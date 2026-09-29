import { useState, useCallback } from "react";
import type { Chat, Message } from "../type/types";

export function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const createChat = useCallback((chatId: string, title: string) => {
    setChats((prev) => (prev.some((c) => c.id === chatId) ? prev : [...prev, { id: chatId, title }]));
    setMessages((prev) => (prev[chatId] ? prev : { ...prev, [chatId]: [] }));
    setActiveChatId(chatId);
  }, []);

  const addMessage = useCallback((chatId: string, message: Message) => {
    setMessages((prev) => ({ ...prev, [chatId]: [...(prev[chatId] ?? []), message] }));
    setChats((prev) => prev.map((c) => (c.id === chatId ? { ...c, lastMessage: message } : c)));
  }, []);

  return {
    chats,
    messages: activeChatId ? messages[activeChatId] ?? [] : [],
    activeChatId,
    setActiveChatId,
    createChat,
    addMessage,
  };
}