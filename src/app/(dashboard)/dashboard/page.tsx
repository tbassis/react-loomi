import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { OpenLayersMap } from "@/components/map/openlayers-map";
import { LineAreaChart } from "@/components/charts/line-area-chart";
import { BarChart } from "@/components/charts/bar-chart";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center pt-[56px]">
      <div className="flex flex-col items-center gap-10 w-4/5 w-max-[1370] mx-auto">
        <div className="flex w-full h-full max-h-[376px] gap-10">
          <div className="w-3/5 bg-on-background p-6 pt-9 rounded-[24px]">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">Evolução dos KPIs</h2>
            </div>
            <LineAreaChart />
          </div>
          <div className="w-2/5 bg-on-background p-6 pt-9 rounded-[24px]">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">Taxa de conversão</h2>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="w-full bg-on-background p-6 pt-9 rounded-[24px]">
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-xl">Mapa de clientes por região</h2>
          </div>
          <div className="h-[354px] w-full rounded-[16px] overflow-hidden">
            <OpenLayersMap />
          </div>
        </div>
      </div>
    </div>
  );
}
