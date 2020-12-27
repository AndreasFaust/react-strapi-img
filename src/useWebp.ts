import React, { useContext } from "react";
import Context from "./context";

function checkWebp(callback: (result: boolean) => void): void {
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(result);
  };
  img.onerror = function () {
    callback(false);
  };
  // just check lossy
  img.src =
    "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
}

export default function useWebp() {
  const { webp } = useContext(Context);
  const [supported, setSupported] = React.useState(webp);

  React.useEffect(() => {
    if (typeof webp !== "boolean") {
      checkWebp((result) => setSupported(result));
    }
  }, []);
  return supported;
}
