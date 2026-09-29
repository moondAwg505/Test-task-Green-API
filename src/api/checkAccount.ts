import { callMethod } from "./client";

interface CheckAccountResponse {
  exist: boolean;
  chatId: string;
}

export function checkAccount(idInstance: string, apiTokenInstance: string, phoneNumber: string) {
  return callMethod<CheckAccountResponse>(idInstance, apiTokenInstance, "checkAccount", {
    method: "POST",
    body: JSON.stringify({ phoneNumber: Number(phoneNumber) }),
  });
}