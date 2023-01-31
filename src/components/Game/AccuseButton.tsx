import Button from 'react-bootstrap/Button';

const AccuseButton = () => {
  function onAccuse() {
    console.log('This player accuse');
  }

  return (
    <Button className='new-btn' onClick={onAccuse}>
      {' '}
      Accuse{' '}
    </Button>
  );
};

export default AccuseButton;
