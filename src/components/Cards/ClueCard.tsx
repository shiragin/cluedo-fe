import React, {useState} from "react";
import "../../Styling/SuspectCard.scss";
import "../../Data/Clues.json";
import { Props } from "../../interfaces/interface";
import Button from 'react-bootstrap/Button';
// interface Props {
//   name: string;
//   type: string;
//   color: string;
//   image: string;
// }

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
    <div className={`clue-card ${type}`} onClick={handleClick} style={{ width: "200px", height: "250px", border: `6px solid ${selectedCards.includes(name) ? 'green' : 'black'}` }}>
      <div className='clue-card-type'>{type.toUpperCase()}</div>
      <div className='clue-card-name'>
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={image} alt={name} style={{ width: "90px", height: "200px" }} />
      <Button variant="info" onClick={handleSendName}>Ask</Button>
    </div>
  );
}

export default ClueCard;