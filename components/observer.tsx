"use client";

import { useEffect, useRef } from "react";

interface ObserverProps {
  onIntersection: () => void;
  once?: boolean;
}

export function Observer({ onIntersection, once }: ObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  const intersectionCallbackRef = useRef(onIntersection);

  useEffect(() => {
    intersectionCallbackRef.current = onIntersection;
  }, [onIntersection]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (once) intersectionObserver.disconnect();
          intersectionCallbackRef.current();
        }
      }
    });

    intersectionObserver.observe(ref.current as HTMLElement);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [once, ref]);

  return <div ref={ref} />;
}
