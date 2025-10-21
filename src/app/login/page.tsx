"use client";

import LoginForm from "./LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const rawName = searchParams?.name;
  const name = Array.isArray(rawName) ? rawName[0] : rawName;

  return <LoginForm name={name} />;
}
