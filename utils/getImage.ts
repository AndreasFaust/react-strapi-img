import { Types } from "../dist";

function getFormats(url: string, base64: string) {
  const formats = {};
  for (let i = 400; i <= 3000; i += 200) {
    formats[i] = [
      {
        url: `/${i}_${url}`,
      },
      {
        url: `/${i}_${url}`.replace(".jpg", ".webp"),
      },
    ];
  }
  formats["base64"] = [
    {
      url: base64,
    },
  ];
  return formats;
}

export default function getImage({
  url,
  base64,
  width,
  height,
}: {
  url: string;
  base64: string;
  width: number;
  height: number;
}): Types.ImageProps {
  return {
    url,
    alternativeText: `This is ${url}`,
    formats: getFormats(url, base64),
    width,
    height,
  };
}
