"use client";

import { Stylable } from "@/types";
import { cn } from "@/utils/cn";

export const Joke = ({
  joke,
  className,
  style,
}: Stylable<{ joke: string }>) => {
  return (
    <div
      className={cn("rounded-lg bg-white p-4 shadow", className)}
      style={style}
    >
      <p className="text-lg font-medium text-gray-900">{joke}</p>
    </div>
  );
};
