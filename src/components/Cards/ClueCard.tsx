import { useState } from 'react';
import { Props } from '../../interfaces/interface';
import '../../Styling/SuspectCard.scss';
import '../../Data/Clues.json';
import Weapon from '../../Data/javascript_logo.png';

function ClueCard({ name, type, image }: Props): JSX.Element {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [eliminated, setEliminated] = useState<boolean>(false);

  const handleClick = () => {
    if (selectedCards.includes(name)) {
      setSelectedCards(selectedCards.filter((card) => card !== name));
    } else {
      setSelectedCards([...selectedCards, name]);
    }
  };

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();
    setEliminated(!eliminated);
  }

  const handleSendName = () => {
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={(e) => handleRightClick(e)}
      className={
        selectedCards.includes(name) && !eliminated
          ? `clue-card ${type} selected`
          : selectedCards.includes(name) && eliminated
          ? `clue-card ${type} selected greyed`
          : eliminated
          ? `clue-card ${type} greyed`
          : `clue-card ${type}`
      }
    >
      {/* <div className='clue-card-type'>{type.toUpperCase()}</div> */}
      <div className={`clue-card-name ${type}`}>
        {/* <div className='deck'>{color}</div> */}
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={image} alt={name} />
    </div>
  );
}

export default ClueCard;
