import { useState, useEffect } from "react";

export function useHexToRgba(hex, opacity = 1) {
  const [rgba, setRgba] = useState("");

  useEffect(() => {
    if (hex) {
      const hexToRgba = (hex, opacity) => {
        let r = 0,
          g = 0,
          b = 0;

        if (hex.length === 4) {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
          r = parseInt(hex[1] + hex[2], 16);
          g = parseInt(hex[3] + hex[4], 16);
          b = parseInt(hex[5] + hex[6], 16);
        }

        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      };

      setRgba(hexToRgba(hex, opacity));
    }
  }, [hex, opacity]);

  return rgba;
}
