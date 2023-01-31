import React, { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080');

interface IGameContext {
  onAddUser: (name: string) => void;
}

export const GameContext = createContext<Partial<IGameContext>>({});

export function useGameContext() {
  return useContext(GameContext);
}

export default function GameContextProvider({ children }: { children: any }) {
  // socket.on("reply", (args) => {
  //   console.log(args);
  // });

  const onAddUser = (name: string): void => {
    socket.emit('addUser', name);
  };

  return (
    <GameContext.Provider value={{ onAddUser }}>
      {children}
    </GameContext.Provider>
  );
}
