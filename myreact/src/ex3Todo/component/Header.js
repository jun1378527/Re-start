import "./Header.css";

const Header = () => {
  const today = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const todayStr = today.toLocaleDateString("en-US", options);

  return (
    <header className="header">
      <h1>오늘은 📅</h1>
      <h2>{todayStr}</h2>
    </header>
  );
};

export default Header;
