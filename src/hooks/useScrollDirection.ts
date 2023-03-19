import React, { useState, useEffect } from "react";

const enum scrollDirectionEnum {
  UP = "up",
  DOWN = "down",
}

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<scrollDirectionEnum>();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction =
        scrollY > lastScrollY
          ? scrollDirectionEnum.DOWN
          : scrollDirectionEnum.UP;
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
