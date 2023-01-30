import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";

const App = () => {
  
  return (
    <GameContextProvider>
      <div className="App">
        <h1>Cluedo!</h1>
        <HomePage />
      </div>
    </GameContextProvider>
  );
}

export default App;
