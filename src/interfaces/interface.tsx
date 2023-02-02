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
  cardType: string;
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
  isAccuse: boolean;
  setIsAccuse: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
  onReady: () => void;
  readyPlayers: string[];
  setReadyPlayers: React.Dispatch<React.SetStateAction<string[]>>;
  onStart: () => void;
  gameStarted: boolean;
  game: Game | null;
  setGame: React.Dispatch<React.SetStateAction<Game | null>>;
  sendClues: (game: Game) => void;
  activePlayer: string;
  askedPlayer: string;
  playerClues: any;
  // setPlayerClues:
}

export interface User {
  nickname: string;
  socketId: string;
  id: string;
}
export interface Props {
  name: string;
  cardType: string;
  color: string;
  image: string;
  myClues: Clue[];
}

export interface Game {
  roomId: string;
  name: string;
  players: {
    playerId: string;
    playerNickname: string;
    role: string;
    clues: Clue[];
  }[];

  maxPlayers: number;
}
