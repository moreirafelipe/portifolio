import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener(
      "resize", () => setWidth(window.screen.width)
    );
  }, []);
  return width;
}