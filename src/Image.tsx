import React from "react";
import getSrcSet from "./getSrcSet";
import { ObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  url: string;
  formats?: any;
  objectFit?: ObjectFit;
  objectPosition?: string;
  alternativeText?: string;
  styleImg?: string;
  prefix?: string;
  onLoad: () => void;
}

interface StyledProps {
  src: string;
  alternativeText: string;
  onLoad: () => void;
  objectFit?: ObjectFit;
  objectPosition?: string;
  styleImg?: string;
}

const StyledImage = styled.img<StyledProps>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  ${(props) => props.styleImg}
`;

const Image: React.FC<Props> = ({
  url,
  formats,
  objectFit,
  objectPosition,
  alternativeText,
  styleImg,
  prefix,
  onLoad,
}) => {
  return (
    <picture>
      <source
        srcSet={getSrcSet({ formats, prefix, webp: true })}
        type="image/webp"
      />
      <source srcSet={getSrcSet({ formats, prefix })} type="image/jpeg" />
      <StyledImage
        src={prefix + url}
        alternativeText={alternativeText}
        onLoad={onLoad}
        objectFit={objectFit}
        objectPosition={objectPosition}
        styleImg={styleImg}
      />
    </picture>
  );
};

export default Image;
