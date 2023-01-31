import React, { createContext, useContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Room, IGameContext, User } from "../interfaces/interface";

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
  const [user, setUser] = useState<User | null>(null);

  const [rooms, setRooms] = useState<Array<Room>>([]);
  const onAddUser = (name: string): void => {
    socket?.emit("add_user", { name });
  };

  socket?.off("user_added");
  socket?.on("user_added", (user: User): void => {
    console.log(user);
    setUser(user);
    socket.emit("choose_room");
  });

  socket?.off("get_rooms");
  socket?.on("get_rooms", (roomsList: Array<Room>) => {
    console.log(roomsList);
    setRooms(roomsList);
  });

  function onCreateRoom(newRoom: Room) {
    socket?.emit("create_room", newRoom);
  }

  function onJoin(roomId: string): void {
    socket?.emit("join_room", roomId);
  }

  function onAsk(selectedCards: Array<string>): void {
    socket?.emit("ask", selectedCards);
  }

  socket?.off("error");
  socket?.on("error", (err: string) => {
    console.log(err);
  });

  socket?.off("player_joined");
  socket?.on("player_joined", (data: { room: Room; message: string }): void => {
    console.log(data.room);
    console.log(data.message);
  });

  socket?.off("player_quit");
  socket?.on("player_quit", (message: string): void => {
    console.log(message);
  });

  function onGoBack(): void {
    socket?.emit("player_left");
  }

  return (
    <GameContext.Provider
      value={{ onAddUser, rooms, user, onCreateRoom, onJoin, onAsk, onGoBack }}
    >
      {children}
    </GameContext.Provider>
  );
}
