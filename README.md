# `react-strapi-img`

**react-strapi-img** is a wrapper for `img`, that handles webp-support, responsive sizes, lazyloading and loading-animation. It is optimized to consume image-data from `Strapi`, but can be useful in other contexts as well.

🦊 Take a look at the [example](https://andreasfaust.github.io/react-strapi-img/).

### What it does

- Wrap image in proportional container, to preserve and determine height.
- Lazyload image.
- Transform Strapi image-`formats`-object into `srcset`.
- Add Blured, animated base64-placeholder.
- Use `WebP`-format if supported.
- Add `noscript`-image for SEO.

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

To gain the efficency of `srcset`, copy the folder [services](services) to the Strapi-folder `/extensions/upload`. The scripts will resize every uploaded image:

1. to `base64`
2. to sizes from `400px` to the `original image width` in steps of `200px`
   – maximum is `3000px`
   — the original image-size will be added as largest breakpoint

This method is gratefully adapted from here:
https://sarpisik.com/blog/how-to-generate-different-image-formats-with-strapi-plugin-upload-part-ii

In `react` fetch the image with `graphQL`:

```graphql
query {
  image {
    url
    width
    height
    formats
  }
}
```

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
  const { url, width, height, formats } = imageFromStrapi;
  return (
    <Image
      // you could also spread all props like this: {...imageFromStrapi},
      // but for the purpose of demonstration I am adding them one by one
      url={url} // required
      width={width} // optional
      height={height} // optional
      formats={formats} // optional
      prefix={
        process.env.NODE_ENV === "production"
          ? "https://api.myapp.net"
          : "http://localhost:1337"
      } // optional
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
| **style**              | string   |             | Custom styles for wrapper. `styled-components` template-literal.                                                                                                 |
| **stylePlaceholder**   | string   |             | Custom styles for placeholder. `styled-components` template-literal                                                                                              |
| **styleImg**           | string   |             | Custom styles for img-tag. `styled-components` template-literal                                                                                                  |
| **prefix**             | string   |             | Prefix all src and srcset.                                                                                                                                       |

---

## TypeScript-Types

All relevant [Types](/src/types.ts) are exported:

1. ImageProps
2. Formats
3. ObjectFit

```tsx
import { Types } from "react-strapi-img";

interface Props {
  imageFromStrapi: Types.ImageProps;
}

const MyApp: React.FC<Props> = ({ imageFromStrapi }) => {
  return <Image {...imageFromStrapi} />;
};

export default MyApp;
```

---

## Rendered Output

Initially:

```html
<div class="Wrapper__StyledImageWrapper-sc-1o399dd-0 cqCfje imageWrapper">
  <img
    src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUHAgb/xAAlEAACAQMCBgMBAAAAAAAAAAABAgMABBEFEgYHEyExQSIycVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABgRAAMBAQAAAAAAAAAAAAAAAAABEQID/9oADAMBAAIRAxEAPwCT8sZ4o9Q055XZFF1uJz5AFdhzB4mt7rW4hAz7OiBJj3lk7iopZaleWqp0LiRCjb0w31b+/tYuNRurmXfPNI7gEZLevOKmfJvVo2esUg24guVXU5Pl3IGf3GKKQyvvfc+ST7JoplmIN6rp/9k="
    alt='Placeholder for the image "testimg_1d61597ba3.jpg".'
    class="Placeholder__StyledPlaceholder-h5tses-0 grjLdz"
  />
  <noscript>
    <img
      src="testimg_1d61597ba3.jpg"
      alt="This is testimg_1d61597ba3.jpg"
      class="StyledImage-yw93u6-0 bvBGFq"
    />
  </noscript>
</div>
```

After image was loaded:

```html
<div class="Wrapper__StyledImageWrapper-sc-1o399dd-0 bJzCYV imageWrapper">
  <picture>
    <source
      srcset="
        /400_testimg_1d61597ba3.webp   400w,
        /600_testimg_1d61597ba3.webp   600w,
        /800_testimg_1d61597ba3.webp   800w,
        /1000_testimg_1d61597ba3.webp 1000w,
        /1200_testimg_1d61597ba3.webp 1200w,
        /1400_testimg_1d61597ba3.webp 1400w,
        /1600_testimg_1d61597ba3.webp 1600w,
        /1800_testimg_1d61597ba3.webp 1800w,
        /2000_testimg_1d61597ba3.webp 2000w,
        /2200_testimg_1d61597ba3.webp 2200w,
        /2400_testimg_1d61597ba3.webp 2400w,
        /2600_testimg_1d61597ba3.webp 2600w,
        /2800_testimg_1d61597ba3.webp 2800w,
        /3000_testimg_1d61597ba3.webp 3000w
      "
      type="image/webp"
    />
    <source
      srcset="
        /400_testimg_1d61597ba3.jpg   400w,
        /600_testimg_1d61597ba3.jpg   600w,
        /800_testimg_1d61597ba3.jpg   800w,
        /1000_testimg_1d61597ba3.jpg 1000w,
        /1200_testimg_1d61597ba3.jpg 1200w,
        /1400_testimg_1d61597ba3.jpg 1400w,
        /1600_testimg_1d61597ba3.jpg 1600w,
        /1800_testimg_1d61597ba3.jpg 1800w,
        /2000_testimg_1d61597ba3.jpg 2000w,
        /2200_testimg_1d61597ba3.jpg 2200w,
        /2400_testimg_1d61597ba3.jpg 2400w,
        /2600_testimg_1d61597ba3.jpg 2600w,
        /2800_testimg_1d61597ba3.jpg 2800w,
        /3000_testimg_1d61597ba3.jpg 3000w
      "
      type="image/jpeg"
    />
    <img
      src="testimg_1d61597ba3.jpg"
      alt="This is testimg_1d61597ba3.jpg"
      class="StyledImage-yw93u6-0 bvBGFq"
    />
  </picture>
  <noscript>
    <img
      src="testimg_1d61597ba3.jpg"
      alt="This is testimg_1d61597ba3.jpg"
      class="StyledImage-yw93u6-0 bvBGFq"
    />
  </noscript>
</div>
```

---

## Contributing

Every contribution is very much appreciated. In fact,
your testing and feedback is the reason, I am going the extra mile of publishing
my work open-source (and GitHub-Stars, of course!). So join me in making this
software more reliable for everyone.

**If `react-strapi-img` is helpful for you,
don't hesitate to star it on
[GitHub](https://github.com/AndreasFaust/react-strapi-img).**

---

## License

Licensed under the MIT License, Copyright © 2020-present Andreas Faust. See
[LICENSE](LICENSE) for more information.

---
