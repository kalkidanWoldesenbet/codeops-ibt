"use client";

import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useDebounce } from "@/lib/useDebounce";

export default function OrdersPage() {
    const [term, setTerm] = useState("");
    const [page, setPage] = useState(1);

    const debouncedTerm = useDebounce(term, 300);

    const { data, error, isLoading } = useSWR(
      `/api/dishes?q=${encodeURIComponent(debouncedTerm)}&page=${page}`,
      fetcher,
      {
        refreshInterval: 5000,
        keepPreviousData: true,
      }
    );

  return (
    <main>
      <h1>Order Status Demo</h1>

      <input
        value={term}
        placeholder="Search dishes..."
        onChange={(event) => {
          setTerm(event.target.value);
          setPage(1);
        }}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load data.</p>}

      {data?.items?.map((dish) => (
        <article key={dish.id}>
          <h2>{dish.name}</h2>
          <p>Dish ID: {dish.id}</p>
        </article>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <span> Page {page} of {data?.totalPages ?? 1} </span>
      <button
        disabled={page >= (data?.totalPages ?? 1)}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </main>
  );
}