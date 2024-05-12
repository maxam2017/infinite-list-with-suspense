"use client";

import { Suspense, use } from "react";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { Lazy } from "@/components/lazy";

import { fetchJokes } from "../utils/api";
import { Joke } from "./joke";
import { Shimmer } from "./shimmer";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="text-sm text-center text-gray-400 py-4">
      Failed to load more jokes. Please
      <button
        onClick={reset}
        className="ml-1 underline cursor-pointer text-blue-600"
      >
        try again
      </button>
      .
    </div>
  );
};

export const PageOfJokes = ({ page = 1 }: { page?: number }) => {
  const { nextPage, items } = use(fetchJokes(page));

  return (
    <>
      <div className="space-y-6" data-page={page}>
        {items.map(({ id, joke }, index) => {
          const delay = Math.ceil(index / 3) * 100;

          return (
            <Joke
              key={id}
              joke={joke}
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: `${delay}ms` }}
            />
          );
        })}

        {items.length === 0 && (
          <div className="text-sm text-center text-gray-400 py-4">
            No more jokes
          </div>
        )}
      </div>
      {nextPage !== undefined && (
        <Lazy>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Shimmer />}>
              <PageOfJokes page={nextPage} />
            </Suspense>
          </ErrorBoundary>
        </Lazy>
      )}
    </>
  );
};
