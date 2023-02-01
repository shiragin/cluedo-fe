import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {useGameContext} from "../../Context/Context";
import "../../Styling/Homepage.scss";

function Queue({queue, setQueue}: {queue: Boolean; setQueue: Function}) {
  const {currentRoom, user, onLeave} = useGameContext();
  const [ready, setReady] = useState(false);
  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);

  console.log(currentRoom);

  function readyClickHandler(player: {
    playerId: string;
    playerNickname: string;
  }) {
    console.log("wow");
    console.log(player.playerId);
    console.log(user!.socketId);
    if (player.playerId !== user?.socketId) return;
    else {
      setReady(!ready);
    }
  }

  useEffect(() => {
    if (ready) setReadyPlayers([...readyPlayers, user!.socketId]);
    else
      setReadyPlayers(
        readyPlayers.filter((player) => player !== user!.socketId)
      );
  }, [ready]);

  function startGameHandler() {
    // start game logic here - check if all players are ready
  }

  function leaveGAmeHandler() {
    // leave game logic here - remove player from ready list
    onLeave && onLeave();
    setQueue(!queue);
  }

  return (
    <div className="queue-container">
      <h1>{currentRoom?.name}</h1>
      {currentRoom?.players?.map((player) => (
        <div className="queue-player" key={player.playerId}>
          <div className="queue-player-nickname">{player.playerNickname}</div>
          <Button
            disabled={player.playerId !== user?.socketId}
            variant={
              readyPlayers.includes(player.playerId)
                ? "secondary"
                : "outline-secondary"
            }
            onClick={() => readyClickHandler(player)}
          >
            Ready
          </Button>
        </div>
      ))}{" "}
      <div>
        <Button className="new-btn" onClick={startGameHandler}>
          Start Game
        </Button>

        <Button className="new-btn" onClick={leaveGAmeHandler}>
          Leave Game
        </Button>
      </div>
    </div>
  );
}

export default Queue;
