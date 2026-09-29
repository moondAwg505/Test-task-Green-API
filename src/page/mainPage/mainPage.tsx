import { useState } from "react";
import { useAuth } from "../../context/AutchContext";
import { useChats } from "../../hooks/useChats";
import { usePolling } from "../../hooks/usePoling";
import { checkAccount } from "../../api/checkAccount";
import { sendMessage } from "../../api/sendMessage";
import { SidebarHeader } from "../../components/sidebarHeader/sidebarHeader";
import { ChatList } from "../../components/chatList/chatList";
import { NewChatbutton } from "../../components/newChatButton/newChatButton";
import { AddContactForm } from "../../components/addContactForm/addContactForm";
import { ChatWindow } from "../../components/chatWindow/chatWindow";
import style from "./mainPage.module.css";

export const MainPage = () => {
  const { idInstance, apiTokenInstance } = useAuth();
  const { chats, messages, activeChatId, setActiveChatId, createChat, addMessage } = useChats();
  const [isFormOpen, setIsFormOpen] = useState(false);

  usePolling((chatId, text, timestamp) => {
    addMessage(chatId, {
      id: crypto.randomUUID(),
      text,
      chatId,
      sender: { id: chatId, username: "" },
      fromMe: false,
      createdAt: new Date(timestamp * 1000).toISOString(),
    });
  });

  const handleAddContact = async (phone: string) => {
    const result = await checkAccount(idInstance!, apiTokenInstance!, phone);
    if (!result.exist) {
      alert("Аккаунт Telegram с таким номером не найден");
      return;
    }
    createChat(result.chatId, phone);
    setIsFormOpen(false);
  };

  const handleSend = async (text: string) => {
    if (!activeChatId) return;
    await sendMessage(idInstance!, apiTokenInstance!, activeChatId, text);
    addMessage(activeChatId, {
      id: crypto.randomUUID(),
      text,
      chatId: activeChatId,
      sender: { id: "me", username: "me" },
      fromMe: true,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className={style.page}>
      <aside className={style.sidebar}>
        <SidebarHeader />
        <ChatList chats={chats} activeChatId={activeChatId} onSelect={setActiveChatId} />
        <NewChatbutton onClick={() => setIsFormOpen(true)} />
        <AddContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleAddContact} />
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

export default MainPage;