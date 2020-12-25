import React from "react";
import { ObjectFit } from "./types";
import StyledImage from "./StyledImage";
import stringEndsWith from "./stringEndsWith";

interface Props {
  src: string;
  srcSet?: string;
  srcSetWebp?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  alternativeText?: string;
  styleImg?: string;
  onLoad: () => void;
}

const Image: React.FC<Props> = ({
  src,
  srcSet,
  srcSetWebp,
  objectFit,
  objectPosition,
  alternativeText,
  styleImg,
  onLoad,
}) => {
  return (
    <picture>
      <source srcSet={srcSetWebp} type="image/webp" />
      <source
        srcSet={srcSet}
        type={`image/${stringEndsWith(src, "jpg") ? "jpeg" : "png"}`}
      />
      <StyledImage
        src={src}
        alt={alternativeText}
        onLoad={onLoad}
        objectFit={objectFit}
        objectPosition={objectPosition}
        styleImg={styleImg}
      />
    </picture>
  );
};

export default React.memo(Image);
