import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {io} from "socket.io-client";
import GameContextProvider from "./Context/Context";
import HomePage from "./pages/HomePage";

function App() {
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
