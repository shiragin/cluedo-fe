import { useEffect, useState } from 'react';
import { Props } from '../../interfaces/interface';
import { useGameContext } from '../../Context/Context';
import '../../Styling/SuspectCard.scss';
import '../../Data/Clues.json';
import { Clue } from '../../interfaces/interface';
import Ribbon from './Ribbon';
import ActivePlayer from '../Game/ActivePlayer';

function ClueCard({
  name,
  cardType,
  image,
  myClues,
  asked,
}: Props): JSX.Element {
  const [eliminated, setEliminated] = useState<boolean>(false);
  const { selectedCards, setSelectedCards, game, activePlayer } =
    useGameContext();
  const [clue, setClue] = useState(false);

  const handleClick = () => {
    console.log('Asked', asked);
    if (asked) return;
    if (selectedCards && setSelectedCards)
      if (selectedCards.includes(name)) {
        setSelectedCards(selectedCards.filter((card) => card !== name));
      } else {
        if (selectedCards.length < 2)
          setSelectedCards((prev) => [...prev, name]);
      }
  };

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();
    setEliminated(!eliminated);
  }

  useEffect(() => {
    const clueNames = myClues?.map((clue: any) => clue.name);
    if (clueNames.includes(name)) {
      setClue(true);
    } else {
      setClue(false);
    }
  }, [myClues]);

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
      <div className={`clue-card-name ${cardType}`}>
        <div>{name}</div>
      </div>
      <img className='clue-card-image' src={image} alt={name} />
      {clue && <Ribbon />}
    </div>
  );
}

export default ClueCard;
