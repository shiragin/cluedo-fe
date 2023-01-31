import React, { useContext, useState, useEffect } from 'react';
import { useGameContext } from '../../Context/Context';
import checkList from '../../Data/Clarifications.json';
import AccuseButton from './AccuseButton';

function Player({ display }: { display: string }): JSX.Element {
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
    <div>
      <h3>Player</h3>
      {/* <AccuseButton /> */}
    </div>
  );
}

export default Player;
