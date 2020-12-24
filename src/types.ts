export type ObjectFit =
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

export interface ImageProps {
  url: string;
  formats?: any;
  objectFit?: ObjectFit;
  objectPosition?: string;
  originalWidth?: number;
  originalHeight?: number;
  proportionalHeight?: number;
  alternativeText?: string;
  className?: string;
  style?: string;
  stylePlaceholder?: string;
  styleImg?: string;
  prefix?: string;
  rootMargin?: string;
  threshold?: number;
  cache?: boolean;
}
