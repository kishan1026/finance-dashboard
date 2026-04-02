import { useState } from "react";

const data = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 1000, category: "Travel", type: "expense" },
];

export default function Transactions({ role }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = data.filter((t) => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || t.type === filter)
    );
  });

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow">
      
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Transactions
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          placeholder="Search by category..."
          className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#FF8C8C]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded-lg bg-white focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table Wrapper (for mobile scroll) */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{t.date}</td>

                  <td className="p-3 font-medium">
                    ₹{t.amount}
                  </td>

                  <td className="p-3">{t.category}</td>

                  {/* Type Badge */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        t.type === "income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    {role === "admin" ? (
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:underline">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline">
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        View only
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}