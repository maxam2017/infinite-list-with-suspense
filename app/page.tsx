"use client";

import { Suspense, useState } from "react";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { LoadJokeError } from "@/components/load-joke-error";
import { PageOfJokes } from "@/components/page-of-jokes";
import { Shimmer } from "@/components/shimmer";

export const runtime = "edge";
export const dynamic = "force-static";

const INITIAL_PAGES = [1];

export default function Page() {
  const [pages, setPages] = useState<number[]>(INITIAL_PAGES);
  const [noMore, setNoMore] = useState(false);

  const handleReachEnd = (info: { nextPage?: number }) => {
    const nextPage = info.nextPage;

    if (typeof nextPage === "number") {
      // Append the next page to the list of pages
      setPages((prev) => [...prev, nextPage]);
    } else {
      // No more jokes to load
      setNoMore(true);
    }
  };

  return (
    <>
      {pages.map((page) => (
        <ErrorBoundary key={page} errorComponent={LoadJokeError}>
          <Suspense fallback={<Shimmer />}>
            <PageOfJokes page={page} onReachEnd={handleReachEnd} />
          </Suspense>
        </ErrorBoundary>
      ))}

      {noMore && (
        <div className="text-sm text-center text-gray-400 py-4">
          No more jokes
        </div>
      )}
    </>
  );
}
