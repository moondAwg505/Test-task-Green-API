// Типы
export interface User {
  id: string;
  username: string;
}

export interface Message {
  id: string;
  text: string;
  chatId: string;
  sender: User;
  fromMe: boolean;
  createdAt: number;
}

export interface Chat {
  id: string;
  title: string;
  lastMessage?: Message;
}
