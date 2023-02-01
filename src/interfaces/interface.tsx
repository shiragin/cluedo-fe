export interface Room {
  name: string;
  roomId: string;
  players: {
    playerId: string;
    playerNickname: string;
  }[];
  maxPlayers: number;
}

export interface Clue {
  id: number;
  name: string;
  type: string;
  color: string;
  image: string;
}

export interface IGameContext {
  onAddUser: (name: string) => void;
  rooms: Array<Room>;
  user: User | null;
  onCreateRoom: (newRoom: Room) => void;
  onGetRooms: () => void;
  onJoin: (roomId: string) => void;
  onAsk: (selectedCards: Array<string>) => void;
  setUser: (user: User | null) => void;
  currentRoom: Room | null;
  onLeave: () => void;
  ShuffleMurderCard: () => Clue[];
  selectedCards: string[];
  isAsked: boolean;
  setIsAsked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
  onReady: () => void;
  readyPlayers: string[];
  setReadyPlayers: React.Dispatch<React.SetStateAction<string[]>>;
  onStart: () => void;
  gameStarted: boolean;
  game: Game | null;
  setGame: React.Dispatch<React.SetStateAction<Game | null>>;
}

export interface User {
  nickname: string;
  socketId: string;
  id: string;
}
export interface Props {
  name: string;
  type: string;
  color: string;
  image: string;
}

export interface Game {
  roomId: string;
  name: string;
  players: [{ playerId: string; playerNickname: string; role: string }];
  maxPlayers: number;
}
