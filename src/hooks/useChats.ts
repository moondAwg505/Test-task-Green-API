import { useState, useCallback, useEffect } from "react";
import type { Chat, Message } from "../type/types";

const STORAGE_KEY_CHATS = "green_api_chats";
const STORAGE_KEY_MESSAGES = "green_api_messages";
const STORAGE_KEY_ACTIVE_CHAT = "green_api_active_chat";

export function useChats() {
  const [chats, setChats] = useState<Chat[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CHATS);
    return saved ? JSON.parse(saved) : [];
  });

  const [messages, setMessages] = useState<Record<string, Message[]>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_MESSAGES);
    return saved ? JSON.parse(saved) : {};
  });

  const [activeChatId, setActiveChatId] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEY_ACTIVE_CHAT) || null;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CHATS, JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (activeChatId) {
      localStorage.setItem(STORAGE_KEY_ACTIVE_CHAT, activeChatId);
    } else {
      localStorage.removeItem(STORAGE_KEY_ACTIVE_CHAT);
    }
  }, [activeChatId]);

  const createChat = useCallback((chatId: string, title: string) => {
    setChats((prev) => (prev.some((c) => c.id === chatId) ? prev : [...prev, { id: chatId, title }]));
    setMessages((prev) => (prev[chatId] ? prev : { ...prev, [chatId]: [] }));
    setActiveChatId(chatId);
  }, []);

  const addMessage = useCallback((chatId: string, message: Message) => {
    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] ?? []), message],
    }));

    setChats((prev) => {
      const chatExists = prev.some((c) => c.id === chatId);
      if (chatExists) {
        return prev.map((c) =>
          c.id === chatId ? { ...c, lastMessage: message } : c
        );
      }
      return [
        ...prev,
        {
          id: chatId,
          title: message.sender?.username || chatId,
          lastMessage: message,
        },
      ];
    });
  }, []);

  // === НОВАЯ ФУНКЦИЯ УДАЛЕНИЯ ===
  const deleteChat = useCallback((chatId: string) => {
    // 1. Удаляем чат из списка
    setChats((prev) => prev.filter((c) => c.id !== chatId));

    // 2. Удаляем историю сообщений этого чата
    setMessages((prev) => {
      const newMessages = { ...prev };
      delete newMessages[chatId];
      return newMessages;
    });

    // 3. Если удалили активный чат, сбрасываем выбор
    setActiveChatId((prev) => (prev === chatId ? null : prev));
  }, []);

  return {
    chats,
    messages: activeChatId ? messages[activeChatId] ?? [] : [],
    activeChatId,
    setActiveChatId,
    createChat,
    addMessage,
    deleteChat, // <--- Не забудь вернуть её
  };
}