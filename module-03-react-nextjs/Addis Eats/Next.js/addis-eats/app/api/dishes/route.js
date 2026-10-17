import { NextResponse } from "next/server";
import { dishes } from "@/app/data/dishes";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = (searchParams.get("q") || "").toLowerCase();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = 2;

  const filtered = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(term)
  );

  const start = (page - 1) * pageSize;

  return NextResponse.json({
    items: filtered.slice(start, start + pageSize),
    page,
    totalPages: Math.ceil(filtered.length / pageSize),
    total: filtered.length,
  });
}