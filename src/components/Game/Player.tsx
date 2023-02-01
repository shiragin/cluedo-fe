import React, { useContext, useState, useEffect } from 'react';
import { useGameContext } from '../../Context/Context';
import checkList from '../../Data/Clarifications.json';
import Deck from '../../Data/deck.png';

function Player({
  display,
  num,
}: {
  display: string;
  num: number;
}): JSX.Element {
  console.log(checkList);

  interface IPlayer {
    id: string;
    cards: [];
  }
  const [player, setPlayer] = useState<IPlayer | null>(null);

  useEffect(() => {
    //setPlayer()
  }, []);

  //   const {clueCards, onAccuse} = useGameContext()

  return (
    <div className='player'>
      <img src={Deck} alt='A deck of cards' className={display} />
      <div className='player-num'>
        <span>{num}</span>
      </div>
    </div>
  );
}

export default Player;
