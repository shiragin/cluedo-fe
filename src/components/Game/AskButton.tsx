import Button from 'react-bootstrap/Button';
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { SlMagnifier } from 'react-icons/sl';
import { useGameContext } from '../../Context/Context';


const AskButton = () => {
  const { selectedCards, setSelectedCards } = useGameContext();
  const { isAsked, setIsAsked } = useGameContext();

  function onAsk() {
    if(setIsAsked){
      setIsAsked(true); 
    }}

  return (
    <Button className='new-btn' onClick={onAsk}>
      <SlMagnifier /> <span>Ask</span>
    </Button>
  );
};

export default AskButton;
