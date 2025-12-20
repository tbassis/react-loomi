import { useRouter } from "next/navigation";
import { LoginFormData } from "./login.schema";

export function useLogin() {
  const router = useRouter();

  async function login(data: LoginFormData) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao autenticar");
    }

    router.push("/dashboard");
  }

  return {
    login,
    isLoading: false,
  };
}
