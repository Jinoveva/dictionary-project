import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Jinoveva's Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="text-center App-footer">Coded by Jinoveva</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
