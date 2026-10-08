"use client";

export default function Error() {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>We encountered an error while loading the menu. Please try again later.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}