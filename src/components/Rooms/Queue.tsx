import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGameContext } from '../../Context/Context';
import '../../Styling/Homepage.scss';

function Queue({ queue, setQueue }: { queue: Boolean; setQueue: Function }) {
  const { currentRoom, user, onLeave, onStart, gameStarted } = useGameContext();
  const [ready, setReady] = useState(false);
  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);

  const navigate = useNavigate();

  function readyClickHandler(player: {
    playerId: string;
    playerNickname: string;
  }) {
    console.log('wow');
    console.log('player', player.playerId);
    console.log('user', user!.id);
    if (player.playerId !== user?.id) return;
    else {
      setReady(!ready);
    }
  }

  useEffect(() => {
    if (ready) setReadyPlayers([...readyPlayers, user!.id]);
    else setReadyPlayers(readyPlayers.filter((player) => player !== user!.id));
  }, [ready]);

  useEffect(() => {
    if (gameStarted) navigate('/game');
  }, [gameStarted]);

  function startGameHandler() {
    if (onStart) onStart();
  }

  function leaveGAmeHandler() {
    // leave game logic here - remove player from ready list
    onLeave && onLeave();
    setQueue(!queue);
  }

  return (
    <div className='queue-container'>
      <h1>{currentRoom?.name}</h1>
      {currentRoom?.players?.map((player) => (
        <div className='queue-player' key={player.playerId}>
          <div className='queue-player-nickname'>{player.playerNickname}</div>
          <Button
            disabled={player.playerId !== user?.id}
            variant={
              readyPlayers.includes(player.playerId)
                ? 'secondary'
                : 'outline-secondary'
            }
            onClick={() => readyClickHandler(player)}
          >
            Ready
          </Button>
        </div>
      ))}{' '}
      <div className='button-container'>
        <Button className='new-btn' onClick={leaveGAmeHandler}>
          Leave Game
        </Button>
        <Button className='new-btn' onClick={startGameHandler}>
          Start Game
        </Button>
      </div>
    </div>
  );
}

export default Queue;
