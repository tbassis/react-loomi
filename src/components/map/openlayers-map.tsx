"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

export function OpenLayersMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            attributions: "© OpenStreetMap © CartoDB",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-34.8711, -8.0631]), // Recife Antigo
        zoom: 15,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return <div ref={mapRef} className="h-full w-full rounded" />;
}
