import { useLayoutEffect, useState } from "react";

export const useWindowResize = () => {
  const [widowSize, setWidowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return widowSize;
};
