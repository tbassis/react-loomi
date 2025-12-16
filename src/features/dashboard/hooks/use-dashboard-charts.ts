import { useState, useMemo } from "react";

type KpiKey = "arpu" | "conversion" | "churn" | "retention";

type DashboardData = {
  kpisTrend: {
    labels: string[];
    arpuTrend: { name: string; data: number[] };
    conversionTrend: { name: string; data: number[] };
    churnTrend: { name: string; data: number[] };
    retentionTrend: { name: string; data: number[] };
  };
};

export function useDashboardCharts(dashboard: DashboardData) {
  const [activeKpi, setActiveKpi] = useState<KpiKey>("arpu");

  const labels = dashboard.kpisTrend.labels;

  const kpiSeriesMap = useMemo(
    () => ({
      arpu: dashboard.kpisTrend.arpuTrend,
      conversion: dashboard.kpisTrend.conversionTrend,
      churn: dashboard.kpisTrend.churnTrend,
      retention: dashboard.kpisTrend.retentionTrend,
    }),
    [dashboard],
  );

  const activeSeries = [kpiSeriesMap[activeKpi]];

  return {
    labels,
    activeKpi,
    setActiveKpi,
    activeSeries,
    conversionSeries: [dashboard.kpisTrend.conversionTrend],
  };
}
