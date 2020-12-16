import React from "react";
import getSrcSet from "./getSrcSet";
import { TObjectFit } from "./types";

interface Props {
  url: string;
  formats?: any;
  objectFit?: TObjectFit;
  objectPosition?: string;
  originalWidth?: number;
  originalHeight?: number;
  proportionalHeight?: number;
  alt?: string;
  className?: string;
  style?: object;
  prefix?: string;
  onLoad: () => void;
}

const Image: React.FC<Props> = ({
  url,
  formats,
  objectFit = "cover",
  objectPosition = "center",
  alt = "Alt-Text",
  prefix = "",
  onLoad,
}) => {
  return (
    <picture>
      <source
        srcSet={getSrcSet({ formats, prefix, webp: true })}
        type="image/webp"
      />
      <source srcSet={getSrcSet({ formats, prefix })} type="image/jpeg" />
      <img src={prefix + url} alt={alt} onLoad={onLoad} />
      <style jsx>{`
        object-fit: ${objectFit};
        object-position: ${objectPosition};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      `}</style>
    </picture>
  );
};

export default Image;
