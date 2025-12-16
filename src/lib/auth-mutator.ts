import { authCookie } from "./auth-cookie";

export async function authMutator<T>(url: string, options: RequestInit): Promise<T> {
  const token = authCookie.get();

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!response.ok) {
    throw response;
  }

  return response.json();
}
