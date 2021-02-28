import React, {
  useContext,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import getSrcSets from "./getSrcSets";
import Context from "./context";

import Image from "./Image";
import StyledImage from "./StyledImage";
import Placeholder from "./Placeholder";
import Wrapper from "./Wrapper";
import * as Types from "./types";
import ImageProvider from "./ImageProvider";

const ReactStrapiImg: React.FC<Types.ImageProps> = ({
  url,
  formats,
  objectFit,
  objectPosition,
  width,
  height,
  proportionalHeight,
  placeholder = true,
  rootMargin,
  threshold,
  alternativeText = "Alternative-Text",
  sizes,
  className = "",
  style = "",
  stylePlaceholder = "",
  styleImg = "",
  prefix = "",
  onLoad,
  onError,
}) => {
  const context = useContext(Context);

  const isDecoded = useRef<boolean>(false);
  const srcSet = useMemo(
    () => getSrcSets(formats, prefix || context.prefix),
    []
  );
  const filename = url ? url.replace(/^.*[\\/]/, "").split(".")[0] : "";

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useIntersectionObserver({
    elementRef: ref,
    freezeOnceVisible: true,
    rootMargin: rootMargin || context.rootMargin || "50px",
    threshold: threshold || context.threshold || 0,
  });

  const handleDecode = useCallback(() => {
    isDecoded.current = true;
  }, []);
  const handleLoad = useCallback((event) => {
    if (isDecoded.current) {
      if (onLoad) onLoad(event);
      else if (context.onLoad) context.onLoad(event);
    }
  }, []);
  const handleError = useCallback((event) => {
    if (onError) onError(event);
    else if (context.onError) context.onError(event);
  }, []);

  const [loadImage, setLoadImage] = useState(false);
  const [imageFinished, setImageFinished] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setLoadImage(true);
    }
  }, [isVisible]);

  return (
    <Wrapper
      ref={ref}
      className={`${context.className} ${className}`}
      style={context.style + style}
      width={width}
      height={height}
      proportionalHeight={proportionalHeight || context.proportionalHeight}
    >
      {(placeholder || context.placeholder) && formats && formats.base64 && (
        <Placeholder
          url={url}
          base64={formats.base64.url}
          objectFit={objectFit || context.objectFit || "cover"}
          objectPosition={objectPosition || context.objectPosition || "center"}
          stylePlaceholder={context.stylePlaceholder + stylePlaceholder}
          imageFinished={imageFinished}
        />
      )}
      <Image
        setImageFinished={setImageFinished}
        onLoad={handleLoad}
        onError={handleError}
        onDecode={handleDecode}
        load={loadImage}
        src={(prefix || context.prefix) + url}
        srcSet={srcSet.regular}
        srcSetWebp={srcSet.webp}
        sizes={sizes || context.sizes}
        objectFit={objectFit || context.objectFit || "cover"}
        objectPosition={objectPosition || context.objectPosition || "center"}
        alternativeText={alternativeText}
        styleImg={context.styleImg + styleImg}
        className={`no-js-${filename}`}
      />
      <noscript>
        <style>{`.no-js-${filename} { display: none !important; }`}</style>
        <StyledImage
          srcSet={srcSet && (srcSet.webp || srcSet.regular)}
          loaded
          src={(prefix || context.prefix) + url}
          alt={alternativeText}
          sizes={sizes || context.sizes}
          objectFit={objectFit || context.objectFit}
          objectPosition={objectPosition || context.objectPosition}
          styleImg={context.styleImg + styleImg}
        />
      </noscript>
    </Wrapper>
  );
};

export default ReactStrapiImg;
export { Types, ImageProvider };
