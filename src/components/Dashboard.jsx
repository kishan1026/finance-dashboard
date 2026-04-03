import React, { useState } from "react";
import Chart from "./Chart";
import Transactions from "./Transactions";
import Insights from "./Insights";
import PieChart from "./PieChart";

function Dashboard() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6 lg:p-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Finance Dashboard</h2>

          {/* Role Switch */}
          <div className="flex items-center gap-3">
            <select
              className="border px-3 py-2 rounded-lg bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>

            {role === "admin" && (
              <button className="bg-[#FF8C8C] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                + Add
              </button>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Total Balance</p>
            <h3 className="text-xl font-semibold mt-2">₹50,000</h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Income</p>
            <h3 className="text-xl font-semibold mt-2 text-green-500">
              ₹70,000
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Expenses</p>
            <h3 className="text-xl font-semibold mt-2 text-red-500">₹20,000</h3>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-6 bg-white p-5 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Expenses Overview</h3>
          <Chart />
        </div>
        <div className="mt-6 bg-white p-5 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Spending Breakdown</h3>
          <PieChart />
        </div>

        {/* Activity + Bills */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Recent Activity</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>Sent ₹10,000 to mother</li>
              <li>Paid electricity bill</li>
              <li>Received salary ₹50,000</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Pending Bills</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>Internet: ₹1,000</li>
              <li>Rent: ₹8,000</li>
            </ul>
          </div>
        </div>

        {/* Transactions */}
        <Transactions role={role} />

        {/* Insights */}
        <Insights />
      </div>
    </div>
  );
}

export default Dashboard;
