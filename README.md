**next-strapi-img** is a wrapper for images, that handles responsive sizes, lazyloading, loading-animation and image-sizing. For responsive sizes it is built to consume the image `formats` from Strapi.

### What it does

- Loading images
-

### Dependencies

- `react-cool-inView`

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
