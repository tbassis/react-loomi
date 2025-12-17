import { authCookie } from "@/lib/auth-cookie";
import { userStorage } from "@/lib/user-storage";

export function handleLoginSuccess(accessToken: string, email: string) {
  authCookie.set(accessToken);
  userStorage.save({ email });
}
