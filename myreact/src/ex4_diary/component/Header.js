import "../style/Header.css";

export default function Header({ title, leftChild, rightChild }) {
  return (
    <div className="header">
      <div className="header-left">{leftChild}</div>
      <div className="header-title">{title}</div>
      <div className="header-right">{rightChild}</div>
    </div>
  );
}
