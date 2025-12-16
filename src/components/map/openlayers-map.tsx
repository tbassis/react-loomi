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
import VectorLayer from "ol/layer/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";

type Location = {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  color: string;
};

type Props = {
  locations: Location[];
};

function generatePinSvg(color: string) {
  const svg = `
    <svg width="32" height="48" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0C6.48 0 2 4.48 2 10c0 7.5 10 26 10 26s10-18.5 10-26C22 4.48 17.52 0 12 0z"
        fill="${color}"
      />
      <circle cx="12" cy="10" r="4" fill="white"/>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function OpenLayersMap({ locations }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const vectorSourceRef = useRef(new VectorSource());

  useEffect(() => {
    if (!mapRef.current) return;

    const vectorLayer = new VectorLayer({
      source: vectorSourceRef.current,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-34.8711, -8.0631]), // Recife
        zoom: 13,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  useEffect(() => {
    vectorSourceRef.current.clear();

    locations.forEach((location) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(location.coordinates)),
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: generatePinSvg(location.color),
            anchor: [0.5, 1],
          }),
        }),
      );

      vectorSourceRef.current.addFeature(feature);
    });
  }, [locations]);

  return <div ref={mapRef} className="h-full w-full rounded" />;
}
