import React from 'react';
import '../../Styling/SuspectCard.scss';
import "../../Data/Clues.json";


interface Props {
  name: string;
  type: string;
  color: string;
  image: string;
}

function ClueCard({ name, type, color, image }: Props): JSX.Element {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className={`clue-card ${type}`} onClick={handleClick} style={{ width: "200px", height: "250px" }}>
      <div className='clue-card-type'>{type.toUpperCase()}</div>
      <div className='clue-card-name'>
        <div className='deck'>{color}</div>
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={image} alt={name} style={{ width: "90px", height: "200px" }} />
    </div>
  );
}

export default ClueCard;
