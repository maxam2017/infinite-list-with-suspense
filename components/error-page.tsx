"use client";

import { useEffect } from "react";

import { Smile } from "lucide-react";

interface ErrorPageProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4 pt-60 pb-12 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
          Something went wrong
        </h1>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 flex flex-wrap">
          An unexpected error has occurred. Please try again later.
        </p>
      </div>
    </div>
  );
}
