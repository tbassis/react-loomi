"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginRestControllerExecute } from "@/api/generated";
import { authCookie } from "@/lib/auth-cookie";
import { userStorage } from "@/lib/user-storage";
import { loginSchema, LoginFormData } from "@/features/auth/login.schema";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLoginRestControllerExecute({
    mutation: {
      onSuccess: (response, variables) => {
        if (response.status !== 200) {
          return;
        }

        authCookie.set(response.data.access_token);
        userStorage.save({ email: variables.data.email });

        router.push("/dashboard");
      },
      onError: () => {},
    },
  });

  function onSubmit(data: LoginFormData) {
    loginMutation.mutate({ data });
  }

  return (
    <section className="flex min-h-screen justify-center items-center p-10 gap-45 bg-background">
      <div className="w-1/2 min-h-full flex flex-col">
        <img className="mb-40" src="/images/nortus-logo.svg" width={174} height={39} alt="Logo" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 rounded">
          <h1 className="text-[36px] ">Login</h1>
          <span className="text-[20px] ">Entre com suas credenciais para acessar sua conta </span>

          <div className="space-y-1 w-full mt-[68px] mb-5">
            <input
              {...register("email")}
              type="email"
              placeholder="Usuário*"
              className="h-15 w-full rounded border rounded-lg p-5 text-[#C9C9C9]"
            />

            <label className="block text-sm text-[#C9C9C9] text-400 ml-5">
              Insira o seu e-mail, CPF ou passaporte.
            </label>
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="space-y-1 w-full">
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full h-15 rounded rounded-lg border p-5 pr-10 text-[#C9C9C9]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
              >
                <img
                  className="cursor-pointer"
                  src="/images/eye-icon.svg"
                  width={25}
                  height={19}
                  alt="Logo"
                />
              </button>
            </div>

            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full mt-10 h-15 rounded-lg bg-blue-600 p-2 text-white cursor-pointer"
          >
            {loginMutation.isPending ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
      <div className="w-1/2 hidden md:block md:w-1/2">
        <img src="/images/login-hero.svg" className="w-full h-full" alt="Logo" />
      </div>
    </section>
  );
}
