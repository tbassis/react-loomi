"use client";

import { useGetMapaControllerExecute } from "@/api/generated";
import { OpenLayersMap } from "./openlayers-map";

export function MapSection() {
  const { data, isLoading, isError } = useGetMapaControllerExecute();

  if (isLoading) {
    return <div className="h-full flex items-center justify-center">Carregando mapa...</div>;
  }

  if (isError || !data || data.status === 500) {
    return <div>Erro ao carregar localizações</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locations = (data as any).data.locations;

  return <OpenLayersMap locations={locations} />;
}
