"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function BarChart() {
  const series = [
    {
      name: "Conversão",
      data: [42, 55, 48, 62, 50, 3, 42, 43, 43, 23, 32, 44],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
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
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
      },
    },
    colors: ["#72D9F9"], // verde
    dataLabels: {
      enabled: false,
    },
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
    grid: {
      strokeDashArray: 4,
    },
  };

  return <Chart options={options} series={series} type="bar" height={260} />;
}
