import Button from 'react-bootstrap/Button';

const AskButton = () => {
  function onAsk() {
    console.log('This player asks');
  }

  return (
    <Button className='new-btn' onClick={onAsk}>
      {' '}
      Ask{' '}
    </Button>
  );
};

export default AskButton;
