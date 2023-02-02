import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useGameContext } from '../Context/Context';
import Clues from '../Data/Clues.json';
import { Clue } from '../interfaces/interface';
import Player from '../components/Game/Player';
import Center from '../components/Game/Center';
import ActivePlayer from '../components/Game/ActivePlayer';
import '../Styling/GameRoom.scss';

function GameRoomPage() {
  const {
    ShuffleMurderCard,
    game,
    sendClues,
    setGame,
    activePlayer,
    askedPlayer,
  } = useGameContext();
  const [murderCards, setMurderCards] = useState<Clue[]>([]);
  const [clueCards, setClueCards] = useState<Clue[]>([]);

  function giveClueCards(clues: Clue[]) {
    const shuffledCards = _.shuffle(clues);
    if (game && game?.players)
      if (game?.players.length !== undefined) {
        if (game?.players?.length === 2) {
          game.players[0].clues = [
            shuffledCards[0],
            shuffledCards[1],
            shuffledCards[2],
            shuffledCards[3],
            shuffledCards[8],
          ];
          game.players[1].clues = [
            shuffledCards[4],
            shuffledCards[5],
            shuffledCards[6],
            shuffledCards[7],
            shuffledCards[8],
          ];
        } else if (game?.players?.length === 3) {
          game.players[0].clues = [
            shuffledCards[0],
            shuffledCards[1],
            shuffledCards[2],
          ];
          game.players[1].clues = [
            shuffledCards[3],
            shuffledCards[4],
            shuffledCards[5],
          ];
          game.players[2].clues = [
            shuffledCards[6],
            shuffledCards[7],
            shuffledCards[8],
          ];
        } else {
          game!.players[0].clues = [
            shuffledCards[0],
            shuffledCards[1],
            shuffledCards[8],
          ];
          game!.players[1].clues = [
            shuffledCards[2],
            shuffledCards[3],
            shuffledCards[8],
          ];
          game!.players[2].clues = [
            shuffledCards[4],
            shuffledCards[5],
            shuffledCards[8],
          ];
          game!.players[3].clues = [
            shuffledCards[6],
            shuffledCards[7],
            shuffledCards[8],
          ];
        }
      }
    if (sendClues && game) sendClues(game);
  }

  useEffect(() => {
    if (!game && setGame) {
      setGame(JSON.parse(localStorage.getItem('game')!));
    }
  }, [game]);

  useEffect(() => {
    let newMurderCards: Clue[];
    if (ShuffleMurderCard) {
      newMurderCards = ShuffleMurderCard();
      setMurderCards(newMurderCards);

      const newClueCards = Clues?.filter(
        (elem) => !newMurderCards.find(({ id }) => elem.id === id)
      );

      setClueCards(newClueCards);
      giveClueCards(newClueCards);
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
