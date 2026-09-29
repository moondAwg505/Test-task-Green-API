import type { Chat } from "../../type/types";
import style from "./chatList.module.css";
import { Trash2 } from "lucide-react";

interface ChatListProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelect: (chatId: string) => void;
  onDelete: (chatId: string) => void;
}

// Список чатов
export const ChatList = ({
  chats,
  activeChatId,
  onSelect,
  onDelete,
}: ChatListProps) => {
  return (
    <div className={style.list}>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`${style.item} ${activeChatId === chat.id ? style.active : ""}`}
          onClick={() => onSelect(chat.id)}
        >
          <div className={style.info}>
            <div className={style.title}>{chat.title}</div>
            {chat.lastMessage && (
              <div className={style.lastMessage}>{chat.lastMessage.text}</div>
            )}
            <button
              className={style.deleteBtn}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(chat.id);
              }}
              title="Удалить чат"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
      {chats.length === 0 && <div className={style.empty}>Нет чатов</div>}
    </div>
  );
};
