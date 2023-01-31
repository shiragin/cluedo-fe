import React from 'react';
import '../../Styling/SuspectCard.scss';
import '../../Data/Clues.json';
import Weapon from '../../Data/javascript_logo.png';
// import Location from '../../Data/kitche.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  name: string;
  type: string;
  color: string;
  image: string;
}

function ClueCard({ name, type, image }: Props): JSX.Element {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleClick = () => {
    if (selectedCards.includes(name)) {
      setSelectedCards(selectedCards.filter((card) => card !== name));
    } else {
      setSelectedCards([...selectedCards, name]);
    }
  };

  const handleSendName = () => {
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  };

  return (
    <div
      className={`clue-card ${type}`}
      onClick={handleClick}
      style={{
        border: `6px solid ${selectedCards.includes(name) ? 'green' : 'black'}`,
      }}
    >
      <div className='clue-card-type'>{type.toUpperCase()}</div>
      <div className='clue-card-name'>
        {/* <div className='deck'>{color}</div> */}
        <div>{name}</div>
      </div>
      {image ? (
        <img className='clue-card-image' src={image} alt={name} />
      ) : (
        <img className='clue-card-image' src={Weapon} alt={name} />
      )}
      {/* <Button className='.new-btn' onClick={handleSendName}>
        Ask
      </Button> */}
    </div>
  );
}

export default ClueCard;
