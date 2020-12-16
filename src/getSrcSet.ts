interface Args {
  formats: any;
  prefix?: string;
  webp?: boolean;
}

export default function getSrcSet({ formats, prefix, webp }: Args): string {
  if (!formats) return null;
  const srcset = Object.keys(formats)
    .filter((key) => {
      return !!parseInt(key);
    })
    .map((key) => {
      const format = formats[key][webp ? 1 : 0];
      return { width: parseInt(key), url: format.url };
    })
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

  return srcset;
}
