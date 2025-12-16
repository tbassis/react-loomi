import { authCookie } from "./auth-cookie";

export function authFetch(input: RequestInfo, init?: RequestInit) {
  const token = authCookie.get();

  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
}
