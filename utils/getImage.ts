function getFormats(url: string, base64: string) {
  const formats = {};
  for (let i = 500; i <= 3000; i += 250) {
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

export default function getImage(url: string, base64: string) {
  return {
    url,
    alternativeText: `This is ${url}`,
    formats: getFormats(url, base64),
  };
}
