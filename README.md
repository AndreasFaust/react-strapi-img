# `react-strapi-img`

**react-strapi-img** is a wrapper for `img`, that handles webp-support, responsive sizes, lazyloading and loading-animation. It is optimized to consume image-data from `Strapi`, but can be useful in other contexts as well.

### What it does

- Wrap image in proportional container, to preserve and determine height.
- Lazyload image.
- Transform Strapi image-`formats`-object into `srcset`.
- Add Blured, animated base64-placeholder.
- Use `WebP`-format if supported.

### PeerDependencies

- react: >= 16.8.0,
- react-dom: >= 16.8.0,
- styled-components: >= 5.2.0

---

## Install

```zsh
yarn add react react-dom styled-components react-strapi-img
```

```zsh
npm install -S react react-dom styled-components react-strapi-img
```

---

## Setup image-resizing in `Strapi`

To gain the efficency of `srcset`, copy the folder [services](services) to the Strapi-folder `/extensions/upload`. The scripts will resize every uploaded image to sizes from `500 to 3000 pixels width` and `base64`.

This method is gratefully adapted from here:
https://sarpisik.com/blog/how-to-generate-different-image-formats-with-strapi-plugin-upload-part-ii

---

## Usage

After setting up `Strapi` and uploading some images, use them in your react-components:

```tsx
import React from "react";
import Image, { Types } from "react-strapi-img";

interface Props {
  imageFromStrapi: Types.ImageProps;
}

const MyApp: React.FC<Props> = ({ imageFromStrapi }) => {
  return (
    <Image
      {...imageFromStrapi}
      prefix={process.env.MEDIA_PREFIX} // optional example
    />
  );
};

export default MyApp;
```

---

## Props

Except `url` all props are **optional**.

| **Name**               | **Type** | **Default** | **Description**                                                                                                                                                  |
| :--------------------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **url**                | string   |             | Image-url. Fetch with Strapi.                                                                                                                                    |
| **formats**            | object   |             | Strapi provides a formats-object for `srcset` and `base64`. Fetch it and insert it here.                                                                         |
| **objectFit**          | string   | 'cover'     | CSS-property. Useful together with `proportionalHeight`                                                                                                          |
| **objectPosition**     | string   | 'center'    | CSS-property. Useful together with `proportionalHeight`                                                                                                          |
| **width**              | number   |             | Provided by Strapi. Pass it to preserve original image-proportions.                                                                                              |
| **height**             | number   |             | Provided by Strapi. Pass it to preserve original image-proportions.                                                                                              |
| **proportionalHeight** | number   |             | Provide for custom image-proportion. Crops image. Use along with `objectFit` and `objectPosition`.                                                               |
| **rootMargin**         | string   | 50px        | Used by `Intersection Observer` to determine distance from viewport, when the image should be loaded                                                             |
| **threshold**          | number   | 0           | Value between `0` and `1`. Used by `Intersection Observer` to indicate at what percentage of the target's visibility the observer's callback should be executed. |
| **alternativeText**    | string   |             | alt-Attribute of the image. Provided by Strapi. Pass it for good SEO.                                                                                            |
| **className**          | string   |             | Custom className.                                                                                                                                                |
| **style**              | string   |             | Custom styles for wrapper. Styled-Components style-string.                                                                                                       |
| **stylePlaceholder**   | string   |             | Custom styles for placeholder. Styled-Components style-string.                                                                                                   |
| **styleImg**           | string   |             | Custom styles for img-tag. Styled-Components style-string.                                                                                                       |
| **prefix**             | string   |             | Prefix all src and srcset.                                                                                                                                       |

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-strapi-img`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-strapi-img).**

---

## License

Licensed under the MIT License, Copyright © 2020-present Andreas Faust.

See [LICENSE](LICENSE) for more information.

---
