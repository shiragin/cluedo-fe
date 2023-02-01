import React, { createContext, useContext, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Room, IGameContext, User } from '../interfaces/interface';

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
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);

  // Add a new user
  const onAddUser = (name: string): void => {
    socket?.emit('add_user', { name });
  };

  // new user response from BE socket
  socket?.off('user_added');
  socket?.on('user_added', (user: User): void => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    socket.emit('choose_room');
  });

  // Get room list (if already logged in)
  function onGetRooms(): void {
    socket?.emit('choose_room');
  }

  // Get room list from BE socket
  socket?.off('get_rooms');
  socket?.on('get_rooms', (roomsList: Array<Room>) => {
    console.log('hi', roomsList);
    setRooms(roomsList);
  });

  function onCreateRoom(newRoom: Room) {
    socket?.emit('create_room', newRoom);
  }

  function onJoin(roomId: string): void {
    socket?.emit('join_room', { roomId, user });
  }

  // entering the room queue
  socket?.off('enter_queue');
  socket?.on('enter_queue', (room: Room) => {
    console.log(room);
    setCurrentRoom(room);
  });

  function onAsk(selectedCards: Array<string>): void {
    socket?.emit('ask', selectedCards);
  }

  socket?.off('error');
  socket?.on('error', (err: string) => {
    console.log(err);
  });

  return (
    <GameContext.Provider
      value={{
        onAddUser,
        rooms,
        user,
        setUser,
        onCreateRoom,
        onGetRooms,
        onJoin,
        onAsk,
        currentRoom,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
