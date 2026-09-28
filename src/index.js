import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
  PONTO DE ENTRADA DA APLICAÇÃO

  ReactDOM conecta a árvore de componentes React ao elemento #root
  definido em public/index.html.

  Para esta atividade, não é necessário alterar este arquivo.
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
