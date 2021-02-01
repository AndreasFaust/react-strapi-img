import React from "react";
import styled from "styled-components";

interface Props {
  width?: number;
  height?: number;
  proportionalHeight?: number;
  className?: string;
  style?: string;
  children: React.ReactNode;
}

interface StyledProps {
  relativeHeight: number;
  className?: string;
  customStyle?: string;
  children: React.ReactNode;
}

const StyledImageWrapper = styled.div<StyledProps>`
  position: relative;
  overflow: hidden;
  z-index: 0;

  &&::after {
    content: "";
    height: 0;
    display: block;
    padding-top: ${(props) => props.relativeHeight}%;
  }

  ${(props) => props.customStyle}
`;

const ImageWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      width,
      height,
      proportionalHeight,
      className = "",
      style = null,
      children,
    },
    ref
  ) => {
    const relativeHeight = React.useMemo(() => {
      if (proportionalHeight) return proportionalHeight;
      if (height && width) {
        return (height / width) * 100;
      }
      return 100;
    }, [width, height, proportionalHeight]);

    return (
      <StyledImageWrapper
        ref={ref}
        className={`imageWrapper ${className}`}
        customStyle={style}
        relativeHeight={relativeHeight}
      >
        {children}
      </StyledImageWrapper>
    );
  }
);

export default ImageWrapper;
