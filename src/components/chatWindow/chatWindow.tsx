import type { Message } from "../../type/types";
import style from "./chatWindow.module.css";

import { MessageInput } from "./messageInput";
import { MessageList } from "./messageList";

// Окно чата
interface ChatWindowProps {
  messages: Message[];
  onSend: (text: string) => void;
}

export const ChatWindow = ({ messages, onSend }: ChatWindowProps) => {
  return (
    <div className={style.window}>
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatWindow;
