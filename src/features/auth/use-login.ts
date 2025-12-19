import { useRouter } from "next/navigation";
import { useLoginRestControllerExecute } from "@/api/generated";
import { handleLoginSuccess } from "./auth.service";
import { LoginFormData } from "./login.schema";

export function useLogin() {
  const router = useRouter();

  const mutation = useLoginRestControllerExecute({
    mutation: {
      onSuccess: (response, variables) => {
        if (response.status !== 201) return;

        handleLoginSuccess(response.data.access_token, variables.data.email);

        router.push("/dashboard");
      },
    },
  });

  function login(data: LoginFormData) {
    mutation.mutate({ data });
  }

  return {
    login,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
