const API_URL = "https://4100.api.green-api.com";

export interface TelegramNotification {
  receiptId: number;

  body: {
    typeWebhook: string;

    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: "telegram";
    };

    timestamp: number;
    idMessage: string;

    senderData: {
      chatId: string;
      chatType: "user" | "group" | "supergroup" | "channel" | "bot";
      sender: string;
      chatName: string;
      senderName: string;
      senderType: "user" | "group" | "supergroup" | "channel" | "bot";
      senderContactName: string;
      senderPhoneNumber: number;
    };

    messageData: {
      typeMessage: string;

      textMessageData?: {
        textMessage: string;
      };
    };
  };
}

export async function receiveNotification(
  idInstance: string,
  apiTokenInstance: string
): Promise<TelegramNotification | null> {
  const url =
    `${API_URL}/waInstance${idInstance}` +
    `/receiveNotification/${apiTokenInstance}` +
    `?receiveTimeout=60`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Green API error ${res.status}`);
  }

  const text = await res.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text);
}