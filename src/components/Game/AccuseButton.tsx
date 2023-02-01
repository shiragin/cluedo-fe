import Button from 'react-bootstrap/Button';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { ImHammer2 } from 'react-icons/im';

const AccuseButton = () => {
  function onAccuse() {
    console.log('This player accuse');
  }

  return (
    <Button className='new-btn' onClick={onAccuse}>
      <ImHammer2 /> <span>Accuse</span>
    </Button>
  );
};

export default AccuseButton;
