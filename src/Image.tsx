import React from "react";
import getSrcSet from "./getSrcSet";
import { TObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  url: string;
  formats?: any;
  objectFit?: TObjectFit;
  objectPosition?: string;
  alternativeText?: string;
  prefix?: string;
  onLoad: () => void;
}

interface StyledProps {
  src: string;
  alternativeText: string;
  onLoad: () => void;
  objectFit?: TObjectFit;
  objectPosition?: string;
}

const StyledImage = styled.img<StyledProps>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

const Image: React.FC<Props> = ({
  url,
  formats,
  objectFit,
  objectPosition,
  alternativeText,
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
      />
    </picture>
  );
};

export default Image;
