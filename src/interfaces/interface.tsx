export interface Room {
  name: string;
  roomId: string;
  players: Array<string>;
  maxPlayers: number;
}

export interface IGameContext {
  onAddUser: (name: string) => void;
  rooms: Array<Room>;
  user: User | null;
  onCreateRoom: (newRoom: Room) => void;
  onJoin: (roomId: string) => void;
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
