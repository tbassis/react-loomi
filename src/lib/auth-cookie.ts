const TOKEN_KEY = "access_token";

export const authCookie = {
  set(token: string) {
    document.cookie = `${TOKEN_KEY}=${token}; path=/`;
  },

  get(): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${TOKEN_KEY}=([^;]+)`));
    return match ? match[2] : null;
  },

  clear() {
    document.cookie = `${TOKEN_KEY}=; Max-Age=0; path=/`;
  },
};
