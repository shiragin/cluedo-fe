export interface Room {
  name: string;
  roomId: string;
  players: {
    playerId: string;
    playerNickname: string;
  }[];
  maxPlayers: number;
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
}

export interface User {
  nickname: string;
  socketId: string;
  _id: string;
}
export interface Props {
  name: string;
  type: string;
  color: string;
  image: string;
}
