const isProduction = process.env.NODE_ENV === "production";
const productionPath = "/react-strapi-img";

module.exports = {
  basePath: isProduction ? productionPath : "",
  env: {
    productionPath: isProduction ? productionPath + "/" : "",
  },
};
