import { useState, useEffect, useRef } from "react";
import { getElementSize } from "./utils";

const Footer = () => {
  const footerRef = useRef(null);
  const [footerSize, setFooterSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        setFooterSize(getElementSize(footerRef.current));
      }
    };

    handleResize(); // 초기 크기 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = footerSize;

  return (
    <footer ref={footerRef}>
      <p>Footer</p>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </footer>
  );
};

export default Footer;
