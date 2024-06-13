import { useState, useEffect, useRef } from "react";
import { getElementSize } from "./utils";

const Header = () => {
  const headerRef = useRef(null);
  const [headerSize, setHeaderSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderSize(getElementSize(headerRef.current));
      }
    };

    handleResize(); // 초기 크기 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = headerSize;

  return (
    <header ref={headerRef}>
      <h1>Header</h1>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </header>
  );
};

export default Header;
