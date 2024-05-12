"use client";

import { use } from "react";

import { fetchJokes } from "../utils/api";
import { Joke } from "./joke";
import { Observer } from "./observer";

interface PageOfJokesProps {
  page: number;
  onReachEnd?(info: { nextPage?: number }): void;
}

export const PageOfJokes = ({ page, onReachEnd }: PageOfJokesProps) => {
  const { nextPage, items } = use(fetchJokes(page));

  return (
    <>
      {/* list of jokes */}
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
      </div>

      {/* reach end observer */}
      <Observer onIntersection={() => onReachEnd?.({ nextPage })} once={true} />
    </>
  );
};
