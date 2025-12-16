export type StoredUser = {
  email: string;
};

const USER_KEY = "auth:user";

export const userStorage = {
  save(user: StoredUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  get(): StoredUser | null {
    const value = localStorage.getItem(USER_KEY);
    return value ? JSON.parse(value) : null;
  },

  clear() {
    localStorage.removeItem(USER_KEY);
  },
};
