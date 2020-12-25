"use strict";
/**
 * Image manipulation functions
 */
const sharp = require("sharp");

const { bytesToKbytes } = require("strapi-plugin-upload/utils/file");

// Gets the format name after the dot "."
const getFormat = (ext) => ext.substring(1);

const getMetadatas = (buffer) =>
  sharp(buffer)
    .metadata()
    .catch(() => ({})); // ignore errors

const getDimensions = (buffer) =>
  getMetadatas(buffer)
    .then(({ width = null, height = null }) => ({ width, height }))
    .catch(() => ({})); // ignore errors

const resizeTo = (buffer, options, format) =>
  sharp(buffer)
    .resize(options)
    .toFormat(format)
    .toBuffer()
    .catch(() => null);

const reFormat = (format) => (format === "jpeg" ? "jpg" : format);

// Renames the file extension.
const reName = (name, toName) =>
  name.split(".").slice(0, -1).join().concat(toName);

const BASE64_RESIZE_OPTIONS = {
  width: 20,
  height: 20,
  fit: "inside",
};

const generateBase64 = async (file) => {
  const newBuff = await sharp(file.buffer)
    .resize(BASE64_RESIZE_OPTIONS)
    .toBuffer({
      resolveWithObject: true,
    });

  if (newBuff) {
    const { data, info } = newBuff;

    return {
      url: `data:image/${info.format};base64,${data.toString("base64")}`,
      width: info.width,
      height: info.height,
    };
  }
};

const THUMBNAIL_RESIZE_OPTIONS = {
  width: 245,
  height: 156,
  fit: "inside",
};

const generateThumbnail = async (file) => {
  if (!(await canBeProccessed(file.buffer))) {
    return null;
  }

  const { width, height } = await getDimensions(file.buffer);

  if (
    width > THUMBNAIL_RESIZE_OPTIONS.width ||
    height > THUMBNAIL_RESIZE_OPTIONS.height
  ) {
    const newBuff = await resizeTo(
      file.buffer,
      THUMBNAIL_RESIZE_OPTIONS,
      getFormat(file.ext)
    );

    if (newBuff) {
      const { width, height, size } = await getMetadatas(newBuff);

      return {
        name: `thumbnail_${file.name}`,
        hash: `thumbnail_${file.hash}`,
        ext: file.ext,
        mime: file.mime,
        width,
        height,
        size: bytesToKbytes(size),
        buffer: newBuff,
        path: file.path ? file.path : null,
      };
    }
  }
  return null;
};

const BREAKPOINTS = [
  3000,
  2800,
  2600,
  2400,
  2200,
  2000,
  1800,
  1600,
  1400,
  1200,
  1000,
  800,
  600,
  400,
];

function getBreakpoints(originalWidth, originalBreakpoints) {
  const breakpoints = originalBreakpoints.filter((breakpoint) => {
    return breakpoint <= originalWidth;
  });
  return originalWidth < 3000 && breakpoints[0] < originalWidth
    ? [originalWidth, ...breakpoints]
    : breakpoints;
}

const generateResponsiveFormats = async (file) => {
  const {
    responsiveDimensions = false,
  } = await strapi.plugins.upload.services.upload.getSettings();

  if (!responsiveDimensions) return [];

  if (!(await canBeProccessed(file.buffer))) return [];

  const originalDimensions = await getDimensions(file.buffer);
  const format = getFormat(file.ext);
  const toFormats = [format];

  // We check the format of the original image to prevent
  // duplication of the same format.
  // Because in default, we create "webp" as an additional format.
  if (format !== "webp") {
    toFormats.push("webp");
  }
  const breakpoints = getBreakpoints(originalDimensions.width, BREAKPOINTS);

  return await Promise.all(
    toFormats.map((toFormat) => {
      return Promise.all(
        breakpoints.map((breakpoint) =>
          generateBreakpoint({
            file,
            toFormat,
            breakpoint,
            originalDimensions,
          })
        )
      );
    })
  );
};

const generateBreakpoint = async ({
  file,
  toFormat,
  breakpoint,
  originalDimensions,
}) => {
  const newBuff = await resizeTo(
    file.buffer,
    {
      width: breakpoint,
      height: Math.round(
        (originalDimensions.height / originalDimensions.width) * breakpoint
      ),
      fit: "cover",
    },
    toFormat
  );

  if (newBuff) {
    const data = await getMetadatas(newBuff);
    const { width, height, size } = data;
    const format = reFormat(data.format);
    const ext = `.${format}`;
    return {
      key: `${breakpoint}`,
      file: {
        name: `${breakpoint}_${reName(file.name, ext)}`,
        hash: `${breakpoint}_${file.hash}`,
        ext,
        mime: `image/${format}`,
        width,
        height,
        size: bytesToKbytes(size),
        buffer: newBuff,
        path: file.path ? file.path : null,
      },
    };
  }
};

const formatsToProccess = ["jpeg", "png", "webp", "tiff"];
const canBeProccessed = async (buffer) => {
  const { format } = await getMetadatas(buffer);
  return format && formatsToProccess.includes(format);
};

module.exports = {
  getDimensions,
  generateBase64,
  generateResponsiveFormats,
  generateThumbnail,
  bytesToKbytes,
};
