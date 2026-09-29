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
  onIncoming: (chatId: string, text: string, timestamp: number) => void,
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

    const currentIdInstance = idInstance;
    const currentApiTokenInstance = apiTokenInstance;

    stopped.current = false;

    async function loop() {
      while (!stopped.current) {
        try {
          const notification = (await receiveNotification(
            currentIdInstance,
            currentApiTokenInstance,
          )) as IncomingNotification | null;

          if (!notification) {
            continue;
          }

          const { body } = notification;

          if (
            body.typeWebhook === "incomingMessageReceived" &&
            body.messageData.typeMessage === "textMessage"
          ) {
            const text = body.messageData.textMessageData?.textMessage;

            if (text) {
              onIncomingRef.current(
                String(body.senderData.chatId),
                text,
                body.timestamp,
              );
            }
          }

          await deleteNotification(
            currentIdInstance,
            currentApiTokenInstance,
            notification.receiptId,
          );
        } catch (err) {
          console.error("Polling error:", err);

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
