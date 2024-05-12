"use client";

import { RefObject, useEffect, useRef, useState } from "react";

interface LazyProps {
  children: React.ReactNode | (() => React.ReactNode);
}

function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setIsVisible(true);
          intersectionObserver.disconnect();
        }
      }
    });

    intersectionObserver.observe(ref.current as HTMLElement);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [ref]);

  return isVisible;
}

export function Lazy({ children }: LazyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  if (isVisible) {
    return typeof children === "function" ? children() : children;
  }

  return <div ref={ref} />;
}
