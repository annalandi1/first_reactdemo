import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



//crateRoot é un metodo di React che sulla base del contenitore HTML
// crea una "root", ovvero una base di partenza per il nostro progetto React 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

