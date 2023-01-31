import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styling/App.scss";
import { io, Socket } from "socket.io-client";
import GameContextProvider from "./Context/Context";
import HomePage from "./pages/HomePage";
import GameRoomPage from "./pages/GameRoomPage";
import { useEffect, useState } from "react";
const mainSocket = io("http://localhost:8080");
function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    setSocket(mainSocket);
  }, []);

  return (
    <GameContextProvider socket={socket}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GameRoomPage />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
