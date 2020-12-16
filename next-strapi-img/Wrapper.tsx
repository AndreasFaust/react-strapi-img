import React from "react";

interface Props {
  originalWidth?: number;
  originalHeight?: number;
  proportionalHeight?: number;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

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
      <div ref={ref} className={`imageWrapper ${className}`} style={style}>
        {children}
        <style jsx>{`
          .imageWrapper {
            position: relative;
            overflow: hidden;
          }
          .imageWrapper::after {
            content: "";
            height: 0;
            display: block;
            padding-top: ${height}%;
          }
        `}</style>
      </div>
    );
  }
);

export default ImageWrapper;
