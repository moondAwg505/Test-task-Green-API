import style from "./messageList.module.css";
import { useEffect, useRef } from "react";
import type { Message } from "../../../type/types";
import { MessageBubble } from "../messageInput/messageBubble";

// Стиль сообщения
export const MessageList = ({ messages }: { messages: Message[] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={style.list}>
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
