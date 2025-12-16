'use client';

import { useState } from 'react';
import { useLoginRestControllerExecute } from '@/api/generated';
import { authCookie } from '@/lib/auth-cookie';
import { userStorage } from '@/lib/user-storage';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginMutation = useLoginRestControllerExecute({
    mutation: {
      onSuccess: (response) => {
        if (response.status !== 200) {
          setError('Credenciais inválidas');
          return;
        }

        // 1️⃣ salvar token em cookie
        authCookie.set(response.data.access_token);

        // 2️⃣ salvar dados do usuário no localStorage
        userStorage.save({ email });

        // 3️⃣ redirecionar
        router.push('/dashboard');
      },
      onError: () => {
        setError('Erro ao realizar login');
      },
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    loginMutation.mutate({
      data: { email, password },
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-80 space-y-4 rounded border p-6"
      >
        <h1 className="text-xl font-bold">Login</h1>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <input
          className="w-full rounded border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full rounded border p-2"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="w-full rounded bg-blue-600 p-2 text-white"
        >
          {loginMutation.isPending ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
