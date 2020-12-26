"use strict";
const _ = require("lodash");

module.exports = {
  async uploadFileAndPersist(fileData) {
    const config = strapi.plugins.upload.config;
    const fileFormats = {};
    const {
      getDimensions,
      generateBase64,
      generateResponsiveFormats,
    } = strapi.plugins.upload.services["image-manipulation"];

    await strapi.plugins.upload.provider.upload(fileData);

    const base64 = await generateBase64(fileData);
    if (base64) {
      fileFormats["base64"] = base64;
    }

    const formats = await generateResponsiveFormats(fileData);
    if (
      Array.isArray(formats) &&
      formats.length > 0 &&
      formats[0] !== undefined
    ) {
      for (const format of formats) {
        if (!format || !(Array.isArray(format) && format.length > 0)) continue;
        for (const { key, file } of format) {
          await strapi.plugins.upload.provider.upload(file);
          delete file.buffer;
          // "key" is here as "small", "medium", "large"...
          if (!(key in fileFormats)) {
            fileFormats[key] = [];
          }
          // "file" is created format. "png", "jpeg", "webp"...
          fileFormats[key].push(file);
        }
      }
    }
    // Format generation of all size's has done.
    _.set(fileData, ["formats"], fileFormats);

    const { width, height } = await getDimensions(fileData.buffer);
    delete fileData.buffer;
    _.assign(fileData, {
      provider: config.provider,
      width,
      height,
    });
    return this.add(fileData);
  },

  async remove(file) {
    const config = strapi.plugins.upload.config;
    // execute delete function of the provider
    if (file.provider === config.provider) {
      await strapi.plugins.upload.provider.delete(file);
      const formats = file.formats;
      if (formats) {
        const promises = [];
        const formatKeys = Object.keys(formats).filter(
          (key) => key !== "base64"
        );
        for (const key of formatKeys) {
          const images = formats[key];
          const shouldSkip = !(Array.isArray(images) && images.length > 0);
          if (shouldSkip) continue;
          for (const image of images) {
            promises.push(strapi.plugins.upload.provider.delete(image));
          }
        }
        await Promise.all(promises);
      }
    }
    const media = await strapi.query("file", "upload").findOne({
      id: file.id,
    });
    strapi.eventHub.emit("media.delete", { media });
    return strapi.query("file", "upload").delete({ id: file.id });
  },
};
