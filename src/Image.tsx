import React from "react";
import { ObjectFit } from "./types";
import StyledImage from "./StyledImage";

function getFileExtension(filename: string) {
  const extension = filename.split(".").pop();
  return extension === "jpg" ? "jpeg" : extension;
}

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
      {srcSetWebp && <source srcSet={srcSetWebp} type="image/webp" />}
      {srcSet && (
        <source srcSet={srcSet} type={`image/${getFileExtension(src)}`} />
      )}
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
