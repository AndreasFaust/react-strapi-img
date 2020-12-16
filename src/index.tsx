import React from "react";
import useInView from "react-cool-inview";
import Image from "./Image";
import Placeholder from "./Placeholder";
import Wrapper from "./Wrapper";
import { Props } from "./types";
import * as storage from "./storage";

const NextStrapiImage: React.FC<Props> = ({
  url,
  formats,
  objectFit = "cover",
  objectPosition = "center",
  originalWidth,
  originalHeight,
  proportionalHeight,
  rootMargin = "50px",
  alternativeText = "Alternative-Text",
  className = "",
  style = null,
  prefix = "",
  cache = true,
}) => {
  const ref = React.useRef(null);
  const { inView } = useInView({
    unobserveOnEnter: true,
    rootMargin,
    ref,
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
    if (inView) {
      setShow(true);
    }
  }, [inView]);

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

export default NextStrapiImage;
