import Button from 'react-bootstrap/Button';
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { SlMagnifier } from 'react-icons/sl';

const AskButton = () => {
  function onAsk() {
    console.log('This player asks');
  }

  return (
    <Button className='new-btn' onClick={onAsk}>
      <SlMagnifier /> <span>Ask</span>
    </Button>
  );
};

export default AskButton;
