import React, { createContext, useContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface IGameContext {
  onAddUser: (name: string) => void;
  rooms: Array<Room>;
  userId: string;
}

interface Room {
  name: string;
  roomId: string;
  players: Array<string>;
  maxPlayers: number;
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
  const [userId, setUserId] = useState<string>("");
  // const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (socket) setUserId(socket.id);
  }, [socket]);

  const [rooms, setRooms] = useState<Array<Room>>([]);
  const onAddUser = (name: string): void => {
    socket?.emit("add_user", { name });
    // setNickname(name);
  };

  socket?.on("user_added", (data: string): void => {
    console.log(data);
    socket.emit("choose_room");

    // console.log(data);
    // socket.emit("create_room", { nickname: nickname, room: "room1" });
  });

  socket?.on("get_rooms", (roomsList: Array<Room>) => {
    setRooms(roomsList);
  });

  function onCreateRoom(){
    
  }

  return (
    <GameContext.Provider value={{ onAddUser, rooms, userId }}>
      {children}
    </GameContext.Provider>
  );
}
