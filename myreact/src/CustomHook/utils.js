import { useState, useEffect } from "react";

const useElementSize = elementRef => {
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setElementSize({ width, height });
      }
    };

    handleResize(); // 초기 크기 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef]);

  return elementSize;
};

export default useElementSize;
