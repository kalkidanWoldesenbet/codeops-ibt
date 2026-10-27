"use client";

import {
  CartesianGrid, Line, LineChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";

export default function OrdersOverTimeChart({ data }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Orders Over Time</h2>
      <p className="text-sm text-gray-600">Number of orders per day</p>
      <div className="h-72 w-full" role="img" aria-label="Line chart showing daily order counts. The same values are listed in the table below.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} domain={[0, "auto"]} />
            <Tooltip />
            <Line dataKey="orders" name="Orders" type="monotone" stroke="#1d4ed8" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="p-2 text-left font-medium">Orders by day — data table</caption>
          <thead><tr><th scope="col" className="border p-2">Date</th><th scope="col" className="border p-2 text-right">Orders</th></tr></thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.date}>
                <td className="border p-2">{row.date}</td>
                <td className="border p-2 text-right tabular-nums">{row.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
