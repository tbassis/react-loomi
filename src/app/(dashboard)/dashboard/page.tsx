import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center pt-[56px]">
      <div className="flex flex-col items-center gap-10">
        <div className="flex gap-10">
          <div className="bg-on-background p-6 pt-9 rounded-[24px]">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">Evolução KPI</h2>
            </div>
          </div>
          <div className="bg-on-background p-6 pt-9 rounded-[24px]">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">Taxa de conversão</h2>
            </div>
          </div>
        </div>
        <div className="w-full bg-on-background p-6 pt-9 rounded-[24px]">
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-xl">Mapa de clientes por região</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
