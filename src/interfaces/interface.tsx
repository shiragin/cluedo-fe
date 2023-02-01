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
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
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
