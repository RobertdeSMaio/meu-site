import React from "react";
import "./App.css";
import MeuComponente from "./MeuComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu Site</h1>
        <p>Este é um site básico feito com React.js.</p>
        <MeuComponente />
      </header>
    </div>
  );
}

export default App;
