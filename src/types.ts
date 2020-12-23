export type TObjectFit =
  | "fill"
  | "cover"
  | "inherit"
  | "none"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "contain"
  | "scale-down"
  | undefined;

export interface TImageProps {
  url: string;
  formats?: any;
  objectFit?: TObjectFit;
  objectPosition?: string;
  originalWidth?: number;
  originalHeight?: number;
  proportionalHeight?: number;
  alternativeText?: string;
  className?: string;
  style?: object;
  prefix?: string;
  rootMargin?: string;
  cache?: boolean;
}
