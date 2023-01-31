import React from 'react';
import '../../Styling/SuspectCard.scss';
import '../../Data/Clues.json';
import Weapon from '../../Data/javascript_logo.png';
// import Location from '../../Data/kitche.jpg';

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
    <div className={`clue-card ${type}`} onClick={handleClick}>
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
    </div>
  );
}

export default ClueCard;
