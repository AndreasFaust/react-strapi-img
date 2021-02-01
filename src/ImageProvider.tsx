import React from "react";
import { ProviderProps } from "./types";
import useWebp from "./useWebp";
import Context from "./context";

const ImageProvider: React.FC<ProviderProps> = ({
  objectFit,
  objectPosition,
  width,
  height,
  proportionalHeight,
  rootMargin,
  threshold,
  alternativeText,
  placeholder = true,
  sizes,
  className = "",
  style = "",
  stylePlaceholder = "",
  styleImg = "",
  prefix = "",
  children,
  onLoad,
  onError,
}) => {
  const webp = useWebp();
  const handleLoad = React.useCallback((event) => {
    if (onLoad) onLoad(event);
  }, []);
  const handleError = React.useCallback((event) => {
    if (onError) onError(event);
  }, []);

  return (
    <Context.Provider
      value={{
        objectFit,
        objectPosition,
        width,
        height,
        proportionalHeight,
        rootMargin,
        threshold,
        alternativeText,
        className,
        style,
        stylePlaceholder,
        placeholder,
        styleImg,
        prefix,
        webp,
        sizes,
        onLoad: handleLoad,
        onError: handleError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default React.memo(ImageProvider);
