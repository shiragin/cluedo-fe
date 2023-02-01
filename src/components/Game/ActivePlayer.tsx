import { useEffect } from 'react';
import { useGameContext } from '../../Context/Context';
import Clues from '../../Data/Clues.json';
import ClueCard from '../Cards/ClueCard';
import AccuseButton from './AccuseButton';
import AskButton from './AskButton';

function ActivePlayer({
  activePlayer,
  askedPlayer,
}: {
  activePlayer: string;
  askedPlayer: string;
}): JSX.Element {
  const { user } = useGameContext();

  console.log(user);
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
              type={clue.type}
              color={clue.color}
              image={clue.image}
            />
          ))}
        </div>
        <div className='card-row'>
          {Clues.slice(6, 12).map((clue, index) => (
            <ClueCard
              key={index}
              name={clue.name}
              type={clue.type}
              color={clue.color}
              image={clue.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivePlayer;
