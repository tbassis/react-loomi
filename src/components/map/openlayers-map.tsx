"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import Heatmap from "ol/layer/Heatmap";

export function OpenLayersMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const clients = [
      [-34.8711, -8.0631],
      [-34.8708, -8.0635],
      [-34.8712, -8.0629],
      [-34.8721, -8.0641],
      [-34.8704, -8.0638],
      [-34.8725, -8.0632],
      [-34.873, -8.0634],
      [-34.8736, -8.0636],
      [-34.8741, -8.0638],
      [-34.8748, -8.064],
      [-34.8753, -8.0642],
      [-34.8759, -8.0644],
      [-34.8765, -8.0646],
      [-34.8771, -8.0648],
      [-34.8738, -8.0628],
      [-34.8744, -8.0626],
      [-34.875, -8.0624],
      [-34.8756, -8.0622],
    ];

    const features = clients.map(
      ([lon, lat]) =>
        new Feature({
          geometry: new Point(fromLonLat([lon, lat])),
          weight: 1, // pode variar conforme relevância
        }),
    );

    const heatmapLayer = new Heatmap({
      source: new VectorSource({
        features,
      }),
      blur: 25,
      radius: 15,
      opacity: 0.8,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            attributions: "© OpenStreetMap © CartoDB",
          }),
        }),
        heatmapLayer,
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
