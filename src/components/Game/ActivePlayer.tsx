import Clues from '../../Data/Clues.json';
import ClueCard from '../Cards/ClueCard';
import AccuseButton from './AccuseButton copy';
import AskButton from './AskButton';

function ActivePlayer(): JSX.Element {
  return (
    <div className='active-player'>
      {/* <div className='active-player-title'> */}
      {/* <h1>You</h1> */}
      {/* </div> */}

      <div className='active-player-cards'>
        <div className='buttons'>
          <AccuseButton />
          <AskButton />
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
