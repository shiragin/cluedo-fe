import { useEffect, useState } from 'react';
import { Props } from '../../interfaces/interface';
import { useGameContext } from '../../Context/Context';
import '../../Styling/SuspectCard.scss';
import '../../Data/Clues.json';

function ClueCard({ name, cardType, image }: Props): JSX.Element {
  const [eliminated, setEliminated] = useState<boolean>(false);
  const { selectedCards, setSelectedCards } = useGameContext();

  const handleClick = () => {
    if (selectedCards && setSelectedCards)
      if (selectedCards.includes(name)) {
        setSelectedCards(selectedCards.filter((card) => card !== name));
      } else {
        if (selectedCards.length < 2)
          setSelectedCards((prev) => [...prev, name]);
      }
  };

  useEffect(() => {}, [selectedCards]);

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
        selectedCards?.includes(name) && !eliminated
          ? `clue-card ${cardType} selected`
          : selectedCards?.includes(name) && eliminated
          ? `clue-card ${cardType} selected greyed`
          : eliminated
          ? `clue-card ${cardType} greyed`
          : `clue-card ${cardType}`
      }
    >
      {/* <div className='clue-card-type'>{type.toUpperCase()}</div> */}
      <div className={`clue-card-name ${cardType}`}>
        {/* <div className='deck'>{color}</div> */}
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={image} alt={name} />
    </div>
  );
}

export default ClueCard;
