// Отображения чата
import type { Chat } from "../../type/types";
import style from "./chatList.module.css";

interface ChatListProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelect: (chatId: string) => void;
}

export const ChatList = ({ chats, activeChatId, onSelect }: ChatListProps) => (
  <ul className={style.list}>
    {chats.map((chat) => (
      <li key={chat.id}>
        <button
          className={`${style.item} ${chat.id === activeChatId ? style.active : ""}`}
          onClick={() => onSelect(chat.id)}
        >
          <span className={style.title}>{chat.title}</span>
          <span className={style.preview}>{chat.lastMessage?.text ?? ""}</span>
        </button>
      </li>
    ))}
  </ul>
);
