import React from "react";
import { ObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  base64: string;
  url: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
  imageFinished: boolean;
}

interface StyledProps {
  src: string;
  alt: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
}

const StyledPlaceholder = styled.img<StyledProps>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transform: scale(1.1);
  transform-origin: center;
  z-index: 0;
  pointerevents: none;
  ${(props) => props.stylePlaceholder}
`;

const Placeholder: React.FC<Props> = ({
  base64,
  url,
  objectFit,
  objectPosition,
  stylePlaceholder,
  imageFinished,
}) => {
  return (
    !imageFinished && (
      <StyledPlaceholder
        src={base64}
        alt={`Placeholder for the image "${url}".`}
        objectFit={objectFit}
        objectPosition={objectPosition}
        stylePlaceholder={stylePlaceholder}
      />
    )
  );
};

export default React.memo(Placeholder);
