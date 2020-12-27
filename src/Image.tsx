import React, { SyntheticEvent } from "react";
import { ObjectFit } from "./types";
import useWebp from "./useWebp";
import StyledImage from "./StyledImage";
import ImageLoader from "./imageLoader";

interface Props {
  load: boolean;
  src: string;
  className: string;
  srcSet?: string;
  srcSetWebp?: string;
  sizes?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  alternativeText?: string;
  styleImg?: string;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  onDecode: () => void;
}

const Image: React.FC<Props> = ({
  load,
  src,
  srcSet,
  srcSetWebp,
  objectFit,
  objectPosition,
  alternativeText,
  className,
  styleImg,
  sizes,
  onDecode,
  onLoad,
  onError,
}) => {
  const imageLoader = React.useRef<ImageLoader>(new ImageLoader());
  const webp = useWebp();
  const [source, setSource] = React.useState<string>(
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
  );
  const [sourceSet, setSourceSet] = React.useState<string | null>(null);

  const handleDecode = React.useCallback(() => {
    onDecode();
  }, []);
  const handleLoad = React.useCallback((event) => {
    onLoad(event);
  }, []);
  const handleError = React.useCallback((event) => {
    onError(event);
  }, []);

  React.useEffect(() => {
    const ImageLoader = imageLoader.current;

    if (load && typeof webp === "boolean") {
      ImageLoader.load(src, webp ? srcSetWebp : srcSet, () => {
        handleDecode();
        setSourceSet(webp ? srcSetWebp : srcSet);
        setSource(src);
      });
    }
    return () => {
      ImageLoader.unload();
    };
  }, [webp, load, src, srcSet]);

  return (
    <StyledImage
      onLoad={handleLoad}
      onError={handleError}
      src={source}
      srcSet={sourceSet}
      sizes={sizes}
      alt={alternativeText}
      objectFit={objectFit}
      objectPosition={objectPosition}
      styleImg={styleImg}
      className={className}
    />
  );
};

export default React.memo(Image);
