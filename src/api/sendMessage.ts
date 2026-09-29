import { callMethod } from "./client";

interface SendMessageResponse {
  idMessage: string;
}

export function sendMessage(idInstance: string, apiTokenInstance: string, chatId: string, message: string) {
  return callMethod<SendMessageResponse>(idInstance, apiTokenInstance, "sendMessage", {
    method: "POST",
    body: JSON.stringify({ chatId, message }),
  });
}