import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// importazione di bootstrap dopo l'installazione
import 'bootstrap/dist/css/bootstrap.css';

// la funzione render si occupa di renderizzare il codice JSX
// dentro il contenitore root presente nella pagina html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
