import { useState } from "react";
import "./App.css";

// Header 컴포넌트
function Header({ title, onChangeMode }) {
  return (
    <header>
      <h1 onClick={onChangeMode}>{title}</h1>
    </header>
  );
}

// Nav 컴포넌트
function Nav({ topics, onChangeMode }) {
  const list = topics.map(t => (
    <li key={t.id}>
      <a
        href={"/read/" + t.id}
        id={t.id}
        onClick={event => {
          event.preventDefault();
          onChangeMode(t.id);
        }}
      >
        {t.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
}

// Article 컴포넌트
function Article({ title, body }) {
  return (
    <div className="article-container">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

// Create 컴포넌트
function Create({ onCreate }) {
  const handleSubmit = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    onCreate(title, body);
  };

  return (
    <div className="article-container">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <textarea name="body" placeholder="body"></textarea>
        </div>
        <div>
          <input type="submit" value="Create"></input>
        </div>
      </form>
    </div>
  );
}

// Update 컴포넌트 추가
function Update({ title, body, onUpdate }) {
  const handleSubmit = event => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    const newBody = event.target.body.value;
    onUpdate(newTitle, newBody);
  };

  return (
    <div className="article-container">
      <h2>Update</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" defaultValue={title} />
        </div>
        <div>
          <textarea name="body" defaultValue={body}></textarea>
        </div>
        <div>
          <input type="submit" value="Update"></input>
        </div>
      </form>
    </div>
  );
}

// App 컴포넌트
function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setID] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html은 쉽다." },
    { id: 2, title: "css", body: "css도 쉽다." },
    { id: 3, title: "js", body: "js도 쉽다." },
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, web!" />;
  } else if (mode === "READ") {
    let title = "",
      body = "";
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break; // 일치하는 토픽을 찾으면 루프를 종료합니다.
      }
    }
    content = <Article title={title} body={body} />;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: topics.length + 1, title, body };
          setTopics([...topics, newTopic]);
          setMode("READ");
          setID(newTopic.id);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    let title = "",
      body = "";
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break; // 일치하는 토픽을 찾으면 루프를 종료합니다.
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(newTitle, newBody) => {
          const updatedTopics = topics.map(t =>
            t.id === id ? { ...t, title: newTitle, body: newBody } : t
          );
          setTopics(updatedTopics);
          setMode("READ");
        }}
      />
    );
  }

  const handleDelete = () => {
    const updatedTopics = topics.filter(t => t.id !== id);
    setTopics(updatedTopics);
    setMode("WELCOME");
  };

  let contextControl = null;
  if (mode === "READ" && id !== null) {
    contextControl = (
      <>
        <li>
          <a
            href={`/update/${id}`}
            onClick={e => {
              e.preventDefault();
              setMode("UPDATE");
            }}
          >
            UPDATE
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              handleDelete();
            }}
          >
            DELETE
          </a>
        </li>
      </>
    );
  }

  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={_id => {
          setMode("READ");
          setID(_id);
        }}
      />
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={e => {
              e.preventDefault();
              setMode("CREATE");
            }}
          >
            CREATE
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
