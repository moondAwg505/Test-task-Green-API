import { callMethod } from "./client";

export const sendMessage = (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string,
  message: string
) => {
  return callMethod(
    idInstance,
    apiTokenInstance,
    "sendMessage",
    {
      method: "POST",
      body: JSON.stringify({
        chatId,
        message,
      }),
    }
  );
};