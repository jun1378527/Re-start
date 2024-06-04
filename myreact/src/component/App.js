import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      <div className="App-body">
        <Sidebar isVisible={isSidebarVisible} />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
