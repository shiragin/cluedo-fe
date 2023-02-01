import Button from 'react-bootstrap/Button';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { ImHammer2 } from 'react-icons/im';
import ModalAccuse from './ModalAccuse';
import { useGameContext } from '../../Context/Context';


const AccuseButton = () => {
  const { isAccuse, setIsAccuse } = useGameContext();

  function onAccuse() {
    console.log('This player accuse');
    if(setIsAccuse){
      setIsAccuse(true);
    }
  }

  return (
    <Button className='new-btn' onClick={onAccuse}>
      <ImHammer2 /> <span>Accuse</span>
      <ModalAccuse />
    </Button>
  );
};

export default AccuseButton;
