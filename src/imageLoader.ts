export default class ImageLoader {
  private img: HTMLImageElement | null = null;

  load(src: string, srcSet: string, onDecode: () => void): void {
    this.img = new Image();
    if (srcSet) this.img.srcset = srcSet;
    this.img.src = src;

    this.img
      .decode()
      .then(() => {
        onDecode();
      })
      .catch(() => {
        throw new Error(`react-strapi-img: Could not decode image "${src}".`);
      });
  }

  unload(): void {
    if (this.img) {
      this.clearImgSrc();
      this.img = null;
    }
  }

  private clearImgSrc() {
    (this.img as HTMLImageElement).srcset = "";
    (this.img as HTMLImageElement).src = "";
    try {
      delete (this.img as HTMLImageElement).srcset;
      delete (this.img as HTMLImageElement).src;
    } catch (error) {}
  }
}
