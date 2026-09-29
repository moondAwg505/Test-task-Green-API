export const API_URL = "https://4100.api.green-api.com";

// Отправление запроса в API
export async function callMethod<T>(
  idInstance: string,
  apiTokenInstance: string,
  method: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_URL}/waInstance${idInstance}/${method}/${apiTokenInstance}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Green API error ${res.status}`);
  return res.json();
}
