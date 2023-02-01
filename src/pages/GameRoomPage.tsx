import React, { useEffect, useState } from 'react';
import { useGameContext } from '../Context/Context';
import Clues from '../Data/Clues.json';
import { Clue } from '../interfaces/interface';
import Player from '../components/Game/Player';
import Center from '../components/Game/Center';
import ActivePlayer from '../components/Game/ActivePlayer';
import '../Styling/GameRoom.scss';

function GameRoomPage() {
  const { ShuffleMurderCard } = useGameContext();
  const [murderCards, setMurderCards] = useState<Clue[]>([]);
  const [clueCards, setClueCards] = useState<Clue[]>([]);

  useEffect(() => {
    let newMurderCards: Clue[];
    if (ShuffleMurderCard) {
      newMurderCards = ShuffleMurderCard();
      setMurderCards(newMurderCards);

      const newClueCards = Clues.filter(
        (elem) => !newMurderCards.find(({ id }) => elem.id === id)
      );

      setClueCards(newClueCards);
      console.log('Murder', newMurderCards);
      console.log('Clues', newClueCards);
    }
  }, []);

  return (
    <div className='game-container'>
      <div className='top'>
        <Player display={'up'} num={1} />
      </div>
      <div className='middle'>
        <Player display={'left'} num={4} />
        <Center murderCards={murderCards} />
        <Player display={'right'} num={2} />
      </div>
      <div className='bottom'>
        <ActivePlayer />
      </div>
    </div>
  );
}

export default GameRoomPage;
