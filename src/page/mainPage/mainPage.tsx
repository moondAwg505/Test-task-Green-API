

import { ChatList } from "../../components/chatList/chatList";
import ChatWindow from "../../components/chatWindow/chatWindow";
import NewChatButton from "../../components/newChatButton/newChatButton";
import { SidebarHeader } from "../../components/sidebarHeader";

// mainPage.tsx
export const MainPage = () => {
  // позже здесь будет useChats(): chats, activeChatId, messages, sendMessage...
  return (
    <div className={style.page}>
      <aside className={style.sidebar}>
        <SidebarHeader />
        <ChatList chats={chats} activeChatId={activeChatId} onSelect={setActiveChatId} />
        <NewChatButton />
      </aside>
      <main className={style.chat}>
        {activeChatId ? (
          <ChatWindow messages={messages} onSend={handleSend} />
        ) : (
          <p className={style.placeholder}>Выберите чат</p>
        )}
      </main>
    </div>
  );
};