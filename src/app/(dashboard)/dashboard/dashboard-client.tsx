"use client";

import { useGetDashboardControllerExecute } from "@/api/generated";
import { DashboardContent } from "./dashboard-content";
import { DashboardLoading } from "./dashboard-loading";

export function DashboardClient() {
  const { data, isLoading, isError } = useGetDashboardControllerExecute();

  if (isLoading) {
    return <DashboardLoading />;
  }

  if (isError || !data || data.status === 500) {
    return <div>Erro ao carregar dados do dashboard</div>;
  }

  return <DashboardContent dashboard={data} />;
}
