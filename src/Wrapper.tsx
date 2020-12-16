import React from "react";
import styled from "styled-components";

interface Props {
  originalWidth?: number;
  originalHeight?: number;
  proportionalHeight?: number;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

interface StyledProps {
  height: number;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

const StyledImageWrapper = styled.div<StyledProps>`
  position: relative;
  overflow: hidden;

  &&::after {
    content: "";
    height: 0;
    display: block;
    padding-top: ${(props) => props.height}%;
  }
`;

const ImageWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      originalWidth,
      originalHeight,
      proportionalHeight,
      className = "",
      style = null,
      children,
    },
    ref
  ) => {
    const height = React.useMemo(() => {
      if (proportionalHeight) return proportionalHeight;
      if (originalHeight && originalWidth) {
        return (originalHeight / originalWidth) * 100;
      }
      return 100;
    }, [originalWidth, originalHeight, proportionalHeight]);

    return (
      <StyledImageWrapper
        ref={ref}
        className={`imageWrapper ${className}`}
        style={style}
        height={height}
      >
        {children}
      </StyledImageWrapper>
    );
  }
);

export default ImageWrapper;
