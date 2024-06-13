import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

// Home 컴포넌트
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Home page!</p>
  </div>
);

// About 컴포넌트
const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the About page.</p>
  </div>
);

// Contact 컴포넌트
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>This is the Contact page.</p>
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

// Redirect 컴포넌트
const Redirect = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Redirect Page</h2>
      <button onClick={goToHome}>Go to Home</button>
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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/User1">User1</Link>
          </li>
          <li>
            <Link to="/user/User2">User2</Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}
