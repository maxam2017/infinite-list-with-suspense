"use client";

import ErrorPage from "@/components/error-page";

export default function Page({
  error,
  reset: _reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} />;
}
