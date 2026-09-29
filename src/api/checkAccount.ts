import { callMethod } from "./client";

interface CheckAccountResponse {
  exist: boolean; // Зарегестрирован ли номер
  chatId: string; // ID чата
}

// Функция проверяет регистрацию номера в Telegram
export function checkAccount(
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
) {
  return callMethod<CheckAccountResponse>(
    idInstance,
    apiTokenInstance,
    "checkAccount",
    {
      method: "POST",
      body: JSON.stringify({ phoneNumber: Number(phoneNumber) }),
    },
  );
}
