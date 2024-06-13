import { useRef } from "react";
import useElementSize from "./utils";

const Footer = () => {
  const footerRef = useRef(null);
  const { width, height } = useElementSize(footerRef);

  return (
    <footer
      ref={footerRef}
      style={{ backgroundColor: "lightgrey", padding: "10px" }}
    >
      <p>Footer</p>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </footer>
  );
};

export default Footer;
