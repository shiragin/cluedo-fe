import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {io} from "socket.io-client";
import HomePage from "./pages/HomePage";

const socket = io("http://localhost:8080");

function App() {
  return (
    <div className="App">
      <h1>Cluedo!</h1>
      <HomePage />
    </div>
  );
}

export default App;
