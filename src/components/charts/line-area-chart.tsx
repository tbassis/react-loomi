"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function LineAreaChart() {
  const series = [
    {
      name: "KPI",
      data: [10, 18, 15, 25, 30, 28, 35, 12, 34, 54, 23, 12],
    },
  ];

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
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      labels: {
        style: {
          colors: "#9CA3AF", // cinza
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
        formatter: (value) => `${value}`, // pode customizar
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
