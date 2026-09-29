const API_URL = "https://api.green-api.com";

interface Notification {
  receiptId: number;
  body: {
    timestamp: number;
    senderData: { chatId: string };
    messageData: {
      typeMessage: string;
      textMessageData?: { textMessage: string };
    };
  };
}

export async function receiveNotification(idInstance: string, apiTokenInstance: string): Promise<Notification | null> {
  const url = `${API_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
  const res = await fetch(url);
  const text = await res.text();
  if (!text) return null; // за 5 секунд ничего не пришло — это нормально
  return JSON.parse(text);
}

export async function deleteNotification(idInstance: string, apiTokenInstance: string, receiptId: number) {
  const url = `${API_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;
  await fetch(url, { method: "DELETE" });
}