import React from "react";
import { ObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  base64: string;
  alternativeText: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
  imageLoaded: boolean;
}

interface StyledProps {
  src: string;
  alternativeText: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
  imageLoaded: boolean;
  onTransitionEnd: () => void;
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
  transition: opacity 0.4s;
  opacity: ${(props) => (props.imageLoaded ? 0 : 1)};
  filter: blur(10px);
  transform: scale(1.1);
  transform-origin: center;
  z-index: 100;
  pointerevents: none;
  ${(props) => props.stylePlaceholder}
`;

const ImageWrapper: React.FC<Props> = ({
  base64,
  alternativeText,
  objectFit,
  objectPosition,
  imageLoaded,
  stylePlaceholder,
}) => {
  const [render, setRender] = React.useState(true);
  function onTransitionEnd() {
    setRender(false);
  }
  return (
    render && (
      <StyledPlaceholder
        src={base64}
        alternativeText={alternativeText}
        onTransitionEnd={onTransitionEnd}
        objectFit={objectFit}
        objectPosition={objectPosition}
        imageLoaded={imageLoaded}
        stylePlaceholder={stylePlaceholder}
      />
    )
  );
};

export default React.memo(ImageWrapper);
