import { Formats, Format } from "./types";
import stringEndsWith from "./stringEndsWith";

function getFormat(
  format: Format | Format[],
  webp: boolean
): Format | undefined {
  if (Array.isArray(format)) {
    return webp
      ? format.find((f) => stringEndsWith(f.url, ".webp"))
      : format.find((f) => !stringEndsWith(f.url, ".webp"));
  }
  return webp && stringEndsWith(format.url, ".webp") ? null : format;
}

function getSrcSet(
  formats: Formats,
  prefix?: string,
  webp?: boolean
): string | null {
  if (!formats) return null;
  const formatsNormalized = Object.keys(formats)
    .filter((key) => {
      return !!parseInt(key);
    })
    .map((key) => {
      const format = getFormat(formats[key], webp);
      return format ? { width: parseInt(key), url: format.url } : null;
    })
    .filter((format) => format);

  return !formatsNormalized.length
    ? null
    : formatsNormalized
        .sort((a, b) => {
          if (a.width < b.width) return -1;
          if (a.width > b.width) return 1;
          return 0;
        })
        .reduce((acc: any, current: any, index: number, array: any) => {
          return (
            acc +
            `${prefix + current.url} ${current.width}w${
              index < array.length - 1 ? ", " : ""
            }`
          );
        }, "");
}

export default function getSrcSets(
  formats: Formats,
  prefix?: string
): { regular: string | null; webp: string | null } {
  return {
    regular: getSrcSet(formats, prefix),
    webp: getSrcSet(formats, prefix, true),
  };
}
