import React, { createContext, useContext, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Room, IGameContext, User, Clue, Game } from '../interfaces/interface';
import Clues from '../Data/Clues.json';

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
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const [rooms, setRooms] = useState<Array<Room>>([]);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);

  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [game, setGame] = useState<Game | null>(null);

  const ShuffleMurderCard = (): Clue[] => {
    const cards: Clue[] = [];
    const pickedTypes = new Set<string>();

    Clues.forEach((clue: Clue) => {
      if (!pickedTypes.has(clue.type)) {
        const filteredClues: Clue[] = Clues.filter(
          (clueInner: Clue) => clueInner.type === clue.type
        );
        const randomIndex = Math.floor(Math.random() * filteredClues.length);
        cards.push(filteredClues[randomIndex]);
        pickedTypes.add(clue.type);
      }
    });
    return cards;
  };

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

  const [isAsked, setIsAsked] = useState<boolean>(false);
  const [isAccuse, setIsAccuse] = useState<boolean>(false);


  // Get room list from BE socket
  socket?.off('get_rooms');
  socket?.on('get_rooms', (roomsList: Array<Room>) => {
    setRooms(roomsList);
  });

  function onCreateRoom(newRoom: Room) {
    socket?.emit('create_room', newRoom);
  }

  function onJoin(roomId: string): void {
    socket?.emit('joinroom', { roomId, user });
  }

  // entering the room queue
  socket?.off('enter_queue');
  socket?.on('enter_queue', (room: Room) => {
    setCurrentRoom(room);
  });

  function onReady(): void {
    socket?.emit('ready', { user, currentRoom });
    setReadyPlayers([...readyPlayers, user!.socketId]);
  }
  socket?.off('player_ready');
  socket?.on('player_ready', (playerId: string) => {
    setReadyPlayers([...readyPlayers, playerId]);
  });

  function onStart(): void {
    socket?.emit('start_game', currentRoom?.roomId);
  }

  socket?.off('game_started');
  socket?.on('game_started', (room): void => {
    console.log('room', room);
    setGameStarted(true);
    setGame(room);
  });

  // useEffect(() => {
  //   if (currentRoom?.players.length === readyPlayers.length) {
  //   }
  // }, [readyPlayers]);

  function onAsk(selectedCards: Array<string>): void {
    socket?.emit('ask', { selectedCards, currentRoom });
  }

  socket?.off('asked_cards');
  socket?.on('asked_cards', (newSelectedCards): void => {
    setSelectedCards(newSelectedCards);
    setIsAsked(true);
  });

  socket?.off('error');
  socket?.on('error', (err: string) => {
    console.log(err);
  });

  socket?.off('player_joined');
  socket?.on('player_joined', (data: { room: Room; message: string }): void => {
    setCurrentRoom(data.room);
  });

  socket?.off('player_quit');
  socket?.on('player_quit', (data: { room: Room; message: string }): void => {
    setCurrentRoom(data.room);
  });

  function onLeave(): void {
    socket?.emit('player_left', { room: currentRoom, user });
  }

  return (
    <GameContext.Provider
      value={{
        onAddUser,
        isAsked,
        setIsAsked,
        isAccuse,
        setIsAccuse,
        rooms,
        user,
        setUser,
        onCreateRoom,
        onGetRooms,
        onJoin,
        onAsk,
        currentRoom,
        onLeave,
        ShuffleMurderCard,
        selectedCards,
        setSelectedCards,
        onReady,
        readyPlayers,
        setReadyPlayers,
        onStart,
        gameStarted,
        game,
        setGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
