import React, { useContext, useState, useEffect } from "react";

function Player(): JSX.Element {
  interface Player {
    id: string;
    cards: [];
  }
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    //setPlayer()
  }, []);

  // const {clueCards, clarificationCards, onAccuse} = useContext(gameContext)

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
