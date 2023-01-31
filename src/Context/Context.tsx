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
  // const [nickname, setNickname] = useState("");

  // console.log("MAIN", mainSocket.id);

  // useEffect(() => {
  //   if (socket) setUser(socket.id);
  //   console.log(socket?.id);
  // }, [socket]);

  const [rooms, setRooms] = useState<Array<Room>>([]);
  const onAddUser = (name: string): void => {
    socket?.emit("add_user", { name });
    // setNickname(name);
  };

  socket?.off("user_added");
  socket?.on("user_added", (user: User): void => {
    console.log(user);
    setUser(user);
    socket.emit("choose_room");

    // console.log(data);
    // socket.emit("create_room", { nickname: nickname, room: "room1" });
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

  socket?.off("error");
  socket?.on("error", (err: string) => {
    console.log(err);
  });

  return (
    <GameContext.Provider
      value={{ onAddUser, rooms, user, onCreateRoom, onJoin }}
    >
      {children}
    </GameContext.Provider>
  );
}
