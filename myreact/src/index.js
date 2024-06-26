import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./ex2SimpleCounter/App";
// import App from "./p80/App";
// import App from "./ex3Todo/App";
// import App from "./CounterClassVSFunction/App";
// import App from "./propsDrillingRedux/App";
// import App from "./propsDrillingReduxToolkit/App";
import App from "./ex4_diary/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
