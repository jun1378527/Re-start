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
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

// Profile 컴포넌트
const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <p>This is the profile page.</p>
  </div>
);

// Settings 컴포넌트
const Settings = () => (
  <div>
    <h2>Settings Page</h2>
    <p>This is the settings page.</p>
  </div>
);

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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
