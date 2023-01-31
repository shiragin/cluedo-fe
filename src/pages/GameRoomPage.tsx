import React from "react";
import Player from "../components/Player";
import Center from "../components/Center";
import ActivePlayer from "../components/ActivePlayer";

function GameRoomPage() {
  return (
    <div>
      GameRoom
      <Player />
      <Center />
      <ActivePlayer />
    </div>
  );
}

export default GameRoomPage;