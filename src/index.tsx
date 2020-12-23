import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

import Image from "./Image";
import Placeholder from "./Placeholder";
import Wrapper from "./Wrapper";
import * as storage from "./storage";
import * as Types from "./types";

const ReactStrapiImg: React.FC<Types.TImageProps> = ({
  url,
  formats,
  objectFit = "cover",
  objectPosition = "center",
  originalWidth,
  originalHeight,
  proportionalHeight,
  rootMargin = "50px",
  threshold = 0,
  alternativeText = "Alternative-Text",
  className = "",
  style = null,
  prefix = "",
  cache = true,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [isVisible] = useIntersectionObserver({
    elementRef: ref,
    freezeOnceVisible: true,
    rootMargin,
    threshold,
  });

  const [imageLoaded, setImageLoaded] = React.useState(false);
  function onLoad() {
    if (cache) {
      storage.set(url);
    }
    setImageLoaded(true);
  }

  const [show, setShow] = React.useState(false);
  const [cached, setCached] = React.useState(false);

  React.useEffect(() => {
    // call storage in useEffect, to ensure it happens on client
    if (cache && storage.get(url)) {
      setCached(true);
      setShow(true);
    }
  }, []);

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
      originalWidth={originalWidth}
      originalHeight={originalHeight}
      proportionalHeight={proportionalHeight}
    >
      {!cached && (
        <Placeholder
          alternativeText={alternativeText}
          base64={formats.base64[0].url}
          objectFit={objectFit}
          objectPosition={objectPosition}
          imageLoaded={imageLoaded}
        />
      )}
      {show && (
        <Image
          onLoad={onLoad}
          url={url}
          formats={formats}
          objectFit={objectFit}
          objectPosition={objectPosition}
          prefix={prefix}
          alternativeText={alternativeText}
        />
      )}
    </Wrapper>
  );
};

export default ReactStrapiImg;
export { Types };
