import { useEffect, useRef } from "react";
import {
  receiveNotification,
  deleteNotification,
} from "../api/receiveNotification";
import { useAuth } from "../context/AutchContext";

interface IncomingNotification {
  receiptId: number;
  body: {
    typeWebhook: string;
    timestamp: number;
    idMessage: string;

    senderData: {
      chatId: string;
    };

    messageData: {
      typeMessage: string;
      textMessageData?: {
        textMessage: string;
      };
    };
  };
}

export function usePolling(
  onIncoming: (
    chatId: string,
    text: string,
    timestamp: number
  ) => void
) {
  const { idInstance, apiTokenInstance, isAuthenticated } = useAuth();

  const stopped = useRef(false);
  const onIncomingRef = useRef(onIncoming);

  useEffect(() => {
    onIncomingRef.current = onIncoming;
  }, [onIncoming]);

  useEffect(() => {
    if (!isAuthenticated || !idInstance || !apiTokenInstance) {
      return;
    }

    stopped.current = false;

    async function loop() {
      while (!stopped.current) {
        try {
          const notification = await receiveNotification(
            idInstance,
            apiTokenInstance
          ) as IncomingNotification | null;

          if (!notification) {
            continue;
          }

          const { body } = notification;

          // Нас интересуют только входящие сообщения Telegram
          if (
            body.typeWebhook === "incomingMessageReceived" &&
            body.messageData.typeMessage === "textMessage"
          ) {
            const text =
              body.messageData.textMessageData?.textMessage;

            if (text) {
              onIncomingRef.current(
                body.senderData.chatId,
                text,
                body.timestamp
              );
            }
          }

          // Удаляем обработанное уведомление из очереди
          await deleteNotification(
            idInstance,
            apiTokenInstance,
            notification.receiptId
          );
        } catch (err) {
          console.error("Polling error:", err);

          // Небольшая пауза только при настоящей ошибке
          await new Promise((resolve) => {
            setTimeout(resolve, 3000);
          });
        }
      }
    }

    loop();

    return () => {
      stopped.current = true;
    };
  }, [idInstance, apiTokenInstance, isAuthenticated]);
}