import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import getSrcSet from "./getSrcSet";

import Image from "./Image";
import StyledImage from "./StyledImage";
import Placeholder from "./Placeholder";
import Wrapper from "./Wrapper";
import * as Types from "./types";

const ReactStrapiImg: React.FC<Types.ImageProps> = ({
  url,
  formats,
  objectFit = "cover",
  objectPosition = "center",
  width,
  height,
  proportionalHeight,
  rootMargin = "50px",
  threshold = 0,
  alternativeText = "Alternative-Text",
  className = "",
  style = null,
  stylePlaceholder = null,
  styleImg = null,
  prefix = "",
}) => {
  const srcSetWebp = React.useMemo(
    () => getSrcSet({ formats, prefix, webp: true }),
    []
  );
  const srcSet = React.useMemo(() => getSrcSet({ formats, prefix }), []);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible] = useIntersectionObserver({
    elementRef: ref,
    freezeOnceVisible: true,
    rootMargin,
    threshold,
  });

  const [imageLoaded, setImageLoaded] = React.useState(false);
  const handleLoad = React.useCallback(() => {
    setImageLoaded(true);
  }, []);

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <Wrapper
      ref={ref}
      className={className}
      style={style}
      width={width}
      height={height}
      proportionalHeight={proportionalHeight}
    >
      {formats && formats.base64[0] && (
        <Placeholder
          url={url}
          base64={formats.base64[0].url}
          objectFit={objectFit}
          objectPosition={objectPosition}
          imageLoaded={imageLoaded}
          stylePlaceholder={stylePlaceholder}
        />
      )}
      {show && (
        <Image
          onLoad={handleLoad}
          src={prefix + url}
          srcSetWebp={srcSetWebp}
          srcSet={srcSet}
          objectFit={objectFit}
          objectPosition={objectPosition}
          alternativeText={alternativeText}
          styleImg={styleImg}
        />
      )}
      <noscript>
        <StyledImage
          src={prefix + url}
          alt={alternativeText}
          objectFit={objectFit}
          objectPosition={objectPosition}
          styleImg={styleImg}
        />
      </noscript>
    </Wrapper>
  );
};

export default ReactStrapiImg;
export { Types };
