"use server";

import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

function safeNextPath(value) {
  if (
    typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes("\\")
  ) {
    return value;
  }

  return "/orders";
}

export async function signIn(formData) {
  const userId = String(formData.get("userId") || "").trim();
  const next = safeNextPath(formData.get("next"));

  if (!userId) {
    redirect("/sign-in?error=missing-user");
  }

  // Demo identity only; replace with verified credentials later.
  await createSession({
    id: userId,
    role: userId === "staff-demo" ? "staff" : "customer",
  });

  redirect(next);
}