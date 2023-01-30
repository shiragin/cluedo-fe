import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);
// socket.on("reply", (args) => {
//   console.log(args);
// });

const onAddUser = (name) => {
  socket.emit("addUser", name);
};

function GameContextProvider({ children }) {
  return (
    <GameContext.Provider value={{ onAddUser }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
