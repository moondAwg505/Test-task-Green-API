import style from "./messageBubble.module.css";
import type { Message } from "../../../../type/types";
import { formatTime } from "../../../../utils/formatTime";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={`${style.bubble} ${message.fromMe ? style.mine : style.theirs}`}
    >
      <span className={style.text}>{message.text}</span>
      <span className={style.time}>{formatTime(message.createdAt)}</span>
    </div>
  );
};

export default MessageBubble;
