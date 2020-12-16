import React from "react";
import { TObjectFit } from "./types";

interface Props {
  base64: string;
  alt: string;
  objectFit: TObjectFit;
  objectPosition: string;
  imageLoaded: boolean;
}

const ImageWrapper: React.FC<Props> = ({
  base64,
  alt,
  objectFit,
  objectPosition,
  imageLoaded,
}) => {
  const [render, setRender] = React.useState(true);
  function onTransitionEnd() {
    setRender(false);
  }
  return (
    render && (
      <>
        <img src={base64} alt={alt} onTransitionEnd={onTransitionEnd} />
        <style jsx>{`
          object-fit: ${objectFit};
          object-position: ${objectPosition};
          transition: opacity 0.3s;
          opacity: ${imageLoaded ? 0 : 1};
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          pointer-events: none;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          filter: blur(10px);
          transform: scale(1.1);
        `}</style>
      </>
    )
  );
};

export default ImageWrapper;
