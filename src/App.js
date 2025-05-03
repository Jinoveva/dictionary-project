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
          <footer className="text-center App-footer">
            Coded by {""}
            <a
              href="https://www.shecodes.io/graduates/122713-jinoveva-lopes"
              target="_blank"
              rel="noreferrer"
            >
              Jinoveva {""}
            </a>
            and is hosted on{" "}
            <a
              href="https://github.com/Jinoveva/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {""} and {""}
            <a
              href="https://jinos-dictionary-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}

export default App;
