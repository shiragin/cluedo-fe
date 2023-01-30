import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import GameContextProvider  from "./Context/Context";

const App = () => {
  
  return (
    <GameContextProvider>
      <div>
        <h1>Test</h1>
      </div>
    </GameContextProvider>
  );
}

export default App;
