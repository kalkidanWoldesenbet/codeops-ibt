"use client";

export default function CsvExport({ csv }) {
  function downloadCsv() {
    const blob = new Blob(["\uFEFF", csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "addis-eats-order-history.csv";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={downloadCsv}
      className="rounded-lg bg-orange-600 px-4 py-2 font-medium text-white hover:bg-orange-700"
    >
      Export order history CSV
    </button>
  );
}
