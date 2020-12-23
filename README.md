**react-strapi-img** is a wrapper for images, that handles responsive sizes, lazyloading and loading-animation. It is built to consume the image-data from Strapi.

### What it does

- Wrap image in proportional container, to preserve and determine height.
- Lazyload image.
- Transform Strapi image-`formats`-object into `srcset`.
- Add Blured, animated base64-placeholder.
- Cache urls of loaded images in `Session Storage` to omit placeholder-animation.
- Use `WebP`-format if supported.

### PeerDependencies

- react: ^16.8.0,
- react-dom: ^16.8.0,
- styled-components: ^5.2.1

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

## Props

| **Name**               | **Type** | **Default** | **Description**                                                                                        |
| :--------------------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------- |
| **url**                | string   |             | Image-url. Fetch with Strapi.                                                                          |
| **formats**            | object   |             | Strapi provides a formats-object for `srcset` and `base64`. Fetch it and insert it here.               |
| **objectFit**          | string   | 'cover'     | CSS-property. Useful together with `proportionalHeight`                                                |
| **objectPosition**     | string   | 'center'    | CSS-property. Useful together with `proportionalHeight`                                                |
| **originalWidth**      | number   |             | Provided by Strapi. Pass it to preserve original image-proportions                                     |
| **originalHeight**     | number   |             | Provided by Strapi. Pass it to preserve original image-proportions                                     |
| **proportionalHeight** | number   |             | Provide for custom image-proportion. Crops image. Use along with `originalWidth` and `originalHeight`. |
| **rootMargin**         | string   | 50px        | Used by `Intersection Observer` to determine distance from viewport, when the image should be loaded   |
| **alternativeText**    | string   |             | alt-Attribute of the image. Provided by Strapi. Pass it for good SEO.                                  |
| **className**          | string   |             | Custom className.                                                                                      |
| **style**              | string   |             | Custom React style-object.                                                                             |
| **prefix**             | string   |             | Prefix all src and srcset.                                                                             |
| **cache**              | boolean  | true        | Saves loaded urls in SessionStorage, to prevent placeholder and animation.                             |

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-raster`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

---

## License

Licensed under the MIT License, Copyright © 2020-present Andreas Faust.

See [LICENSE](LICENSE) for more information.

---

## Thanks

Special thanks to all libraries this one is depending on.
