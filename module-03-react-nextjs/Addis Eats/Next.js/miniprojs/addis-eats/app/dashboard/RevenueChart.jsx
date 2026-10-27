"use client";

import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { etb } from "@/lib/format";

export default function RevenueChart({ data }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Revenue by Neighbourhood</h2>
      <p className="text-sm text-gray-600">Total revenue (ETB)</p>
      <div className="h-72 w-full" role="img" aria-label="Bar chart of revenue by neighbourhood. The same values are listed in the table below.">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="neighbourhood" />
            <YAxis domain={[0, "auto"]} tickFormatter={(value) => etb.format(value)} />
            <Tooltip formatter={(value) => etb.format(value)} />
            <Bar dataKey="revenue" name="Revenue (ETB)" fill="#9a3412" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="p-2 text-left font-medium">Revenue by neighbourhood — data table</caption>
          <thead><tr><th scope="col" className="border p-2">Neighbourhood</th><th scope="col" className="border p-2 text-right">Revenue (ETB)</th></tr></thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.neighbourhood}>
                <td className="border p-2">{row.neighbourhood}</td>
                <td className="border p-2 text-right tabular-nums">{etb.format(row.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
