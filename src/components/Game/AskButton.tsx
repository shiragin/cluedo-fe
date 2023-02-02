import Button from 'react-bootstrap/Button';
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { SlMagnifier } from 'react-icons/sl';
import { useGameContext } from '../../Context/Context';

const AskButton = () => {
  const { selectedCards, setSelectedCards, onAsk } = useGameContext();
  const { isAsked, setIsAsked } = useGameContext();

  function onAskHandler() {
    if (isAsked) return;
    if (setIsAsked) {
      setIsAsked(true);
      if (onAsk && selectedCards) onAsk(selectedCards);
    }
  }

  return (
    <Button className='new-btn' onClick={onAskHandler}>
      <SlMagnifier /> <span>Ask</span>
    </Button>
  );
};

export default AskButton;
