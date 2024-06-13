import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Home 컴포넌트
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>홈페이지</p>
  </div>
);

// About 컴포넌트
const About = () => (
  <div>
    <h2>About</h2>
    <p>About 페이지</p>
  </div>
);
// User 컴포넌트
const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}님 환영해요!</h2>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/User1">User1</Link>
          </li>
          <li>
            <Link to="/user/User2">User2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
