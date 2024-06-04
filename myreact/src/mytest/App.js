import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕</h1>
      </header>
      <aside className="App-sidebar">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="App-main">
        <h2>메인 콘텐츠</h2>
        <p>여기는 메인 콘텐츠가 들어갈 부분입니다.</p>
      </main>
      <footer className="App-footer">
        <p>© 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
