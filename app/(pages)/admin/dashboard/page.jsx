"use client";

export default function DashboardComponent() {
  const metrics = [
    { label: "Posts", count: 50, type: "post", id: 1 },
    { label: "Categories", count: 10, type: "category", id: 2 },
    { label: "Comments", count: 200, type: "comment", id: 3 },
  ];

  const deleteItem = (itemType, itemId) => {
    // Implement your delete logic here
    console.log(`Deleting ${itemType} with ID ${itemId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-skin-on-fill">
      <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-8 rounded-lg shadow-md">
        <h2 className="text-black font-semibold text-xl mb-4">Dashboard</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gray-500 py-2 px-4">Metrics</th>
              <th className="bg-gray-500 py-2 px-4">Count</th>
              <th className="bg-gray-500 py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.id}>
                <td className="py-2 px-4">{metric.label}</td>
                <td className="py-2 px-4">{metric.count}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteItem(metric.type, metric.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
