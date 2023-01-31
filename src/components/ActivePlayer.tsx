import Clues from '../Data/Clues.json';
import Button from 'react-bootstrap/Button';
import ClueCard from './Cards/ClueCard';

function ActivePlayer(): JSX.Element {
  return (
    <div className='center'>
      <h1>Active Player</h1>
      {Clues.map((clue, index) => (
        <ClueCard key={index} name={clue.name} type={clue.type} color={clue.color} image={clue.image} />
      ))}
      <Button variant="success">Accuse</Button>
      <Button variant="info">Ask</Button>
    </div>
  );
}

export default ActivePlayer;