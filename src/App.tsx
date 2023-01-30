import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import {io} from "socket.io-client";
import GameContextProvider from "./Context/Context";
import HomePage from "./pages/HomePage";
import GameRoom from "./components/GameRoom";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GameRoom />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
