const key = "next-strapi-image";

export const set = (src: string): void => {
  try {
    const data = JSON.parse(sessionStorage.getItem(key) || "{}");
    data[src] = new Date();
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`react-strapi-img: ${error}`);
  }
};

export const get = (src: string): boolean => {
  try {
    const data = JSON.parse(sessionStorage.getItem(key) || "{}");
    return !!data[src];
  } catch (error) {
    console.error(`react-strapi-img: ${error}`);
    return false;
  }
};
