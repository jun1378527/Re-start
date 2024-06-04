import React, { useState } from "react";
import "./App.css";

function Header(props) {
  const handleClick = event => {
    event.preventDefault();
    alert("Header");
    props.onChangeMode();
  };

  return (
    <header className="App-header">
      <h1>
        <a href="/" onClick={handleClick}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Navigation(props) {
  const list = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.id}
          onClick={event => {
            event.preventDefault();
            props.onSelect(t.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav className="App-nav">
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article className="App-article">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "HTML", body: "HTML is the structure of the web." },
    { id: 2, title: "CSS", body: "CSS is the style of the web." },
    {
      id: 3,
      title: "JavaScript",
      body: "JavaScript is the behavior of the web.",
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const handleSelect = id => {
    const topic = topics.find(topic => topic.id === id);
    setSelectedTopic(topic);
  };

  const handleChangeMode = () => {
    console.log("Mode changed");
  };

  return (
    <div className="App">
      <Header title="REACT" onChangeMode={handleChangeMode} />
      <Navigation topics={topics} onSelect={handleSelect} />
      <Article title={selectedTopic.title} body={selectedTopic.body} />
    </div>
  );
}

export default App;
