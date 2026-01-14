import { useEffect, useRef } from "react";
import "./MouseLight.css";

export const MouseLight = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!lightRef.current) return;

      lightRef.current.style.opacity = "1";
      lightRef.current.style.top = `${event.clientY}px`;
      lightRef.current.style.left = `${event.clientX}px`;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (lightRef.current) {
          lightRef.current.style.opacity = "0";
        }
      }, 2500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return <div id="mouse-light" ref={lightRef} />;
};
