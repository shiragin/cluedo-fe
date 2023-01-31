import React from 'react';
import '../../Styling/SuspectCard.scss';
// interface Props {
//   name: string;
//   type: string;
//   color: string;
//   image: string;
// }

function ClueCard(): JSX.Element {
  const name = 'Yonatan Salmon';
  const type = 'suspect';
  const deck = 'Evidence';
  const img =
    'https://res.cloudinary.com/dmy0f63gx/image/upload/v1675146408/T041TFU6DE1-U041J6GTJS3-4690e5465a74-512_f1aqiq.jpg';
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className={`clue-card ${type}`} onClick={handleClick}>
      <div className='clue-card-type'>{type.toUpperCase()}</div>
      <div className='clue-card-name'>
        <div className='deck'>{deck}</div>
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={img} alt={name} />
    </div>
  );
}

export default ClueCard;
