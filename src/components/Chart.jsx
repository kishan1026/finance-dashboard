import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#6B7280",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#6B7280",
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#6B7280",
      },
      grid: {
        color: "#E5E7EB",
      },
    },
  },
};

// Labels
const labels = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sept","Oct","Nov","Dec",
];

// Data
const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [
        15000,10000,14000,11000,16000,12000,
        8000,14000,11000,12000,23000,12000,
      ],
      borderColor: "#FF8C8C",
      backgroundColor: "rgba(255, 140, 140, 0.2)",
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: "#FF8C8C",
    },
  ],
};

export default function Chart() {
  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-2xl shadow">
      
      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4">
        Expenses Overview
      </h3>

      {/* Chart */}
      <div className="w-full h-55 sm:h-65 md:h-80 lg:h-90">
        <Line options={options} data={data} />
      </div>

    </div>
  );
}