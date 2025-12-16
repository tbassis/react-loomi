"use client";

import { LineAreaChart } from "@/components/charts/line-area-chart";
import { BarChart } from "@/components/charts/bar-chart";
import { OpenLayersMap } from "@/components/map/openlayers-map";
import { KpiToggleButton } from "@/components/ui/kpi-toggle-button";
import { useDashboardCharts } from "@/features/dashboard/hooks/use-dashboard-charts";

type KpiKey = "arpu" | "conversion" | "churn" | "retention";

type DashboardContentProps = {
  // TODO define schema for api response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dashboard: any; // depois tipamos corretamente
};

export function DashboardContent({ dashboard }: DashboardContentProps) {
  const { labels, activeKpi, setActiveKpi, activeSeries, conversionSeries } =
    useDashboardCharts(dashboard);

  const kpiOptions: { key: KpiKey; label: string }[] = [
    { key: "retention", label: "Retenção" },
    { key: "conversion", label: "Conversão" },
    { key: "arpu", label: "ARPU" },
    { key: "churn", label: "Churn" },
  ];

  return (
    <div className="min-h-full flex flex-col items-center justify-center pt-[56px]">
      <div className="flex flex-col items-center gap-10 w-4/5 max-w-[1370px] mx-auto">
        {/* KPIs */}
        <div className="flex w-full gap-10">
          <div className="w-3/5 bg-on-background p-6 pt-9 rounded-[24px]">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">Evolução dos KPIs</h2>
              <span className="flex gap-3 bg-[#FFFFFF0D] rounded-full py-2 px-3">
                {kpiOptions.map((kpi) => (
                  <KpiToggleButton
                    key={kpi.key}
                    label={kpi.label}
                    isActive={activeKpi === kpi.key}
                    onClick={() => setActiveKpi(kpi.key)}
                  />
                ))}
              </span>
            </div>

            <LineAreaChart labels={labels} series={activeSeries} />
          </div>

          <div className="w-2/5 bg-on-background p-6 pt-9 rounded-[24px]">
            <h2 className="font-bold text-xl mb-6">Taxa de conversão</h2>
            <BarChart labels={labels} series={conversionSeries} />
          </div>
        </div>

        {/* MAPA */}
        <div className="w-full bg-on-background p-6 pt-9 rounded-[24px]">
          <h2 className="font-bold text-xl mb-6">Mapa de clientes por região</h2>
          <div className="h-[354px] w-full rounded-[16px] overflow-hidden">
            <OpenLayersMap />
          </div>
        </div>
      </div>
    </div>
  );
}
