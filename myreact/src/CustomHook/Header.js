import { useRef } from "react";
import useElementSize from "./utils";

const Header = () => {
  const headerRef = useRef(null);
  const { width, height } = useElementSize(headerRef);

  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: "lightblue", padding: "10px" }}
    >
      <h1>Header</h1>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </header>
  );
};

export default Header;
