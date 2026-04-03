import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Food", "Travel", "Bills", "Shopping"],
  datasets: [
    {
      label: "Spending",
      data: [5000, 3000, 4000, 2000],
      backgroundColor: [
        "#FF8C8C",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return (
    <div className="w-full h-62.5 md:h-75">
      <Pie data={data} />
    </div>
  );
}