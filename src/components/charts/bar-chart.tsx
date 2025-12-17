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

export function BarChart({ labels, series }: Props) {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    tooltip: {
      theme: "dark",
      x: {
        formatter: (value) => `Mês: ${value}`,
      },
      y: {
        formatter: (value) => `${value}`,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
      },
    },
    colors: ["#72D9F9"],
    dataLabels: {
      enabled: false,
    },
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
    grid: {
      strokeDashArray: 4,
    },
  };

  return <Chart options={options} series={series} type="bar" height={260} />;
}
