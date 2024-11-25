import logo from './logo.svg';
import './App.css';
// sembra HTML , ms in realtá é una sintassi chiamata JSX

// differenze principali:
// -le classi CSS si applicamo con la parola "className" e non "class"
// -si posssono interpolare le variabili semplicemente con {}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
