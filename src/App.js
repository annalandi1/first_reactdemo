import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';
import ButtonComponent from './components/ButtonComponent';
import ImgComponent from './components/ImgComponent';




// sembra HTML, ms in realtá é una sintassi chiamata JSX

// differenze principali:
// -le classi CSS si applicamo con la parola "className" e non "class"
// -si posssono interpolare le variabili semplicemente con {}

const myName = "Anna"

//la funzione App ritorna del JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Primo progetto react di {myName} </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent label="Schiacciami!"/>

        <ImgComponent src="https://media.istockphoto.com/id/831415198/it/foto/paesaggio-delle-vacanze-invernali.jpg?s=612x612&w=0&k=20&c=EIjMUDdXoz9QPx_SEGKoVpsEzEtM28EimGCH03ksxSs=" alt="foto sci"/>
      </header>
      <main>
        <MainComponent />
        
      </main>
    </div>
  );
}

export default App;
