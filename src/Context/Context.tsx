import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

interface IGameContext {
  onAddUser: (name: string) => void;
}

export const GameContext = createContext<Partial<IGameContext>>({});

export function useGameContext() {
  return useContext(GameContext);
}

export default function GameContextProvider({
  socket,
  children,
}: {
  socket: Socket | null;
  children: any;
}) {
  const onAddUser = (name: string): void => {
    socket?.emit("add_user", { name });
  };

  socket?.on("user_added", (data: string): void => {
    console.log(data);
  });

  return (
    <GameContext.Provider value={{ onAddUser }}>
      {children}
    </GameContext.Provider>
  );
}
