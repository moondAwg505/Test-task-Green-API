import { useEffect, useRef } from "react";
import { receiveNotification, deleteNotification } from "../api/receiveNotification";
import { useAuth } from "../context/AutchContext";

export function usePolling(onIncoming: (chatId: string, text: string, timestamp: number) => void) {
  const { idInstance, apiTokenInstance, isAuthenticated } = useAuth();
  const stopped = useRef(false);

  useEffect(() => {
    if (!isAuthenticated || !idInstance || !apiTokenInstance) return;
    stopped.current = false;

    async function loop() {
      while (!stopped.current) {
        try {
          const notification = await receiveNotification(idInstance!, apiTokenInstance!);
          if (notification?.body.messageData?.typeMessage === "textMessage") {
            onIncoming(
              notification.body.senderData.chatId,
              notification.body.messageData.textMessageData!.textMessage,
              notification.body.timestamp
            );
          }
          if (notification) await deleteNotification(idInstance!, apiTokenInstance!, notification.receiptId);
        } catch (err) {
          console.error(err);
          await new Promise((r) => setTimeout(r, 3000));
        }
      }
    }
    loop();
    return () => { stopped.current = true; };
  }, [idInstance, apiTokenInstance, isAuthenticated]);
}