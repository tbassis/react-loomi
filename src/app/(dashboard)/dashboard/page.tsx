import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="min-h-full pt-[56px]">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Usuário autenticado</p>
    </div>
  );
}
