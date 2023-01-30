import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function App() {
  return (
    <div className="App">
      <h1>Cluedo!</h1>
    </div>
  );
}

export default App;
