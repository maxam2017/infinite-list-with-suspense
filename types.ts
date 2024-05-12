import { CSSProperties } from "react";

export type Stylable<T> = T & {
  className?: string;
  style?: CSSProperties;
};
