import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const apiResponse = await fetch("https://nortus-challenge.api.stage.loomi.com.br/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!apiResponse.ok) {
    return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
  }

  const data = await apiResponse.json();

  const response = NextResponse.json({ ok: true });

  response.cookies.set("access_token", data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
