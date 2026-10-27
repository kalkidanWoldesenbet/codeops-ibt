export function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

export function ordersToCsv(orders) {
  const headers = [
    "Order ID",
    "Customer",
    "Phone",
    "Neighbourhood",
    "Status",
    "Total (ETB)",
    "Created At",
  ];

  const rows = orders.map((order) => [
    order.id,
    order.customerName,
    order.phone,
    order.neighbourhood,
    order.status,
    order.total,
    order.createdAt,
  ]);

  return [headers, ...rows]
    .map((row) => row.map(csvCell).join(","))
    .join("\r\n");
}
