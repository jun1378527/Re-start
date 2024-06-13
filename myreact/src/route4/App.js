import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
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

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

// User 컴포넌트
const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}님 환영해요!</h2>
    </div>
  );
};
