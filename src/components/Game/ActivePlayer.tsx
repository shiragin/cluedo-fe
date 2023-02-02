import { useEffect, useState } from 'react';
import { useGameContext } from '../../Context/Context';
import { Props, Clue } from '../../interfaces/interface';
import Clues from '../../Data/Clues.json';
import ClueCard from '../Cards/ClueCard';
import AccuseButton from './AccuseButton';
import AskButton from './AskButton';

function ActivePlayer(): JSX.Element {
  const { user, game, activePlayer, askedPlayer } = useGameContext();
  const [myClues, setMyClues] = useState<Clue[]>([]);

  useEffect(() => {
    if (game && user) {
      const player = game.players.filter(
        (player) => player.playerId === user.id
      );
      console.log('me', player);
      // let mePlayer;
      // for (const player of game.players) {
      //   if (player.playerId === user.id) mePlayer = player;
      // }
      // console.log(player);
      // const mePlayer = game.players.find(
      //   (player) => player.playerId === user.id
      // );
      // console.log(mePlayer);
      // player.playerId === user.id);
      // console.log(player);
      // const { clues } = player;
      // console.log('player', player);
      // console.log('clues', player?.clues);
      setMyClues(player[0]!.clues);
    }
  });

  return (
    <div className='active-player'>
      <div className='active-player-cards'>
        <div className='buttons'>
          {user?.id === activePlayer && <AskButton />}
          <AccuseButton />
        </div>
        <div className='card-row'>
          {Clues.slice(0, 6).map((clue, index) => (
            <ClueCard
              key={index}
              name={clue.name}
              cardType={clue.cardType}
              color={clue.color}
              image={clue.image}
              myClues={myClues}
            />
          ))}
        </div>
        <div className='card-row'>
          {Clues.slice(6, 12).map((clue, index) => (
            <ClueCard
              key={index}
              name={clue.name}
              cardType={clue.cardType}
              color={clue.color}
              image={clue.image}
              myClues={myClues}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivePlayer;
