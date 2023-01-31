import Clues from '../Data/Clues.json';
import Button from 'react-bootstrap/Button';
import ClueCard from './Cards/ClueCard';

function ActivePlayer(): JSX.Element {
  return (
    <div className='center'>
      <ClueCard />
      {/* <h1>Active Player</h1>
        <Button variant="success">Accuse</Button>{' '} */}
    </div>
  );
}

export default ActivePlayer;
