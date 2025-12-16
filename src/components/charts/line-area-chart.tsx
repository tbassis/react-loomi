"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  labels: string[];
  series: {
    name: string;
    data: number[];
  }[];
};

export function LineAreaChart({ labels, series }: Props) {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    tooltip: {
      theme: "dark", // ou "dark"
      x: {
        formatter: (value) => `Mês: ${value}`,
      },
      y: {
        formatter: (value) => `${value}`,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "solid",
    },
    colors: ["#4DD4CE"],
    xaxis: {
      categories: labels,
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "12px",
        },
        formatter: (value) => `${value}`,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 4,
    },
  };

  return <Chart options={options} series={series} type="area" height={260} />;
}
