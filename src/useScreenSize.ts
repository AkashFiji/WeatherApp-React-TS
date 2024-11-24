import { useState, useEffect } from "react";

function useScreenSize() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint is 1024px
    };

    handleResize(); // Initialize state on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLaptop;
}

export default useScreenSize;
