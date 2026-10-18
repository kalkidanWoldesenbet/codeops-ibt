import { signIn } from "./actions";

export default async function SignInPage({ searchParams }) {
  const params = await searchParams;
  const next =
    typeof params.next === "string" &&
    params.next.startsWith("/") &&
    !params.next.startsWith("//") &&
    !params.next.includes("\\")
      ? params.next
      : "/orders";

  return (
    <main>
      <h1>Sign in</h1>
      <p>Demo sign-in for Day-17 practice.</p>

      {params.error === "missing-user" && (
        <p>Please enter a user ID.</p>
      )}

      <form action={signIn}>
        <label htmlFor="userId">Demo user ID</label>
        <input id="userId" name="userId" required />

        <input type="hidden" name="next" value={next} />

        <button type="submit">Sign in</button>
      </form>

      <p>Try `customer-1` or `staff-demo`.</p>
    </main>
  );
}