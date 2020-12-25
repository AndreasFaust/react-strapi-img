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

interface Format {
  name?: string;
  hash?: string;
  width?: number;
  height?: number;
  size?: number;
  path?: null;
  url: string;
}
interface FormatJPG extends Format {
  ext?: ".jpg";
  mime?: "image/jpg";
}
interface FormatWebP extends Format {
  ext?: ".webp";
  mime?: "image/webp";
}

type Breakpoint = number | "base64";

export type Formats = {
  [breakpoint in Breakpoint]: [FormatJPG, FormatWebP];
};

export interface ImageProps {
  url: string;
  formats?: Formats;
  objectFit?: ObjectFit;
  objectPosition?: string;
  width?: number;
  height?: number;
  proportionalHeight?: number;
  alternativeText?: string;
  className?: string;
  style?: string;
  stylePlaceholder?: string;
  styleImg?: string;
  prefix?: string;
  rootMargin?: string;
  threshold?: number;
}
