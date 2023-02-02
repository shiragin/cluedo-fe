import Button from 'react-bootstrap/Button';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { Clue } from '../../interfaces/interface';
import { ImHammer2 } from 'react-icons/im';
import ModalAccuse from './ModalAccuse';
import { useGameContext } from '../../Context/Context';

const AccuseButton = ({ murderCards }: { murderCards: Clue[] }) => {
  const { isAccuse, setIsAccuse } = useGameContext();

  function onAccuse() {
    if (setIsAccuse) {
      setIsAccuse(true);
    }
  }

  return (
    <Button className='new-btn' onClick={onAccuse}>
      <ImHammer2 /> <span>Accuse</span>
      <ModalAccuse murderCards={murderCards} />
    </Button>
  );
};

export default AccuseButton;
