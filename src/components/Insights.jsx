export default function Insights() {
    return (
      <div className="mt-8 bg-white p-6 rounded-2xl shadow">
        
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Insights
        </h2>
  
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
  
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-red-50 hover:shadow-md transition">
            <p className="text-sm text-gray-500">Highest Spending</p>
            <h3 className="text-lg font-semibold text-red-500 mt-1">
              🍔 Food
            </h3>
          </div>
  
          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-yellow-50 hover:shadow-md transition">
            <p className="text-sm text-gray-500">Monthly Trend</p>
            <h3 className="text-lg font-semibold text-yellow-600 mt-1">
              📈 Expenses Increased
            </h3>
          </div>
  
          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-green-50 hover:shadow-md transition">
            <p className="text-sm text-gray-500">Balance Status</p>
            <h3 className="text-lg font-semibold text-green-600 mt-1">
              💰 Income &gt; Expenses
            </h3>
          </div>
  
        </div>
      </div>
    );
  }