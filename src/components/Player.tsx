import React, { useContext, useState, useEffect } from "react";
import { useGameContext } from "../Context/Context";
import checkList from "../../Data/Clarifications.json";

function Player(): JSX.Element {
  console.log(checkList);
  interface Player {
    id: string;
    cards: [];
  }
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    //setPlayer()
  }, []);

  //   const {clueCards, onAccuse} = useGameContext()

  function onAccuse() {
    console.log("This player accuse");
  }

  return (
    <div>
      <button onClick={onAccuse}>Accuse</button>
    </div>
  );
}

export default Player;
