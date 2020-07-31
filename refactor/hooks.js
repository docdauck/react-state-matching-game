import { useRef, useState, useEffect } from "react";

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const refCopy = ref; // creates a closure
    refCopy.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return function () {
      refCopy.current.removeEventListener("mouseenter", enter);
      refCopy.current.removeEventListener("mouseleave", leave);
    };
  });

  return [ref, hovered];
}

export default useHover;
