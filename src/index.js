import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Exemplo from './components/Exemplo';
import Cadastro from './components/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
exemplo.render(
  <React.StrictMode>
    <Exemplo />
  </React.StrictMode>
);

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
exemplo.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);