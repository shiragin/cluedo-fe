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
  const { ShuffleMurderCard, game } = useGameContext();
  const [murderCards, setMurderCards] = useState<Clue[]>([]);
  const [clueCards, setClueCards] = useState<Clue[]>([]);
  const [activePlayer, setActivePlayer] = useState('');
  const [askedPlayer, setAskedPlayer] = useState('');

  function giveClueCards(clues: Clue[]) {
    console.log('HOW MANY', game?.players);

    const shuffledCards = _.shuffle(clues);
    if (game!.players.length !== undefined) {
      if (game?.players?.length === 2) {
        game.players[0].clues = [
          clues[0],
          clues[1],
          clues[2],
          clues[3],
          clues[8],
        ];
        game.players[1].clues = [
          clues[4],
          clues[5],
          clues[6],
          clues[7],
          clues[8],
        ];
      } else if (game?.players?.length === 3) {
        game.players[0].clues = [clues[0], clues[1], clues[2]];
        game.players[1].clues = [clues[3], clues[4], clues[5]];
        game.players[2].clues = [clues[6], clues[7], clues[8]];
      } else {
        game!.players[0].clues = [clues[0], clues[1], clues[8]];
        game!.players[1].clues = [clues[2], clues[3], clues[8]];
        game!.players[2].clues = [clues[4], clues[5], clues[8]];
        game!.players[3].clues = [clues[6], clues[7], clues[8]];
      }
    }
    console.log('SHUFFLE', game);
  }

  useEffect(() => {
    let newMurderCards: Clue[];
    if (ShuffleMurderCard) {
      newMurderCards = ShuffleMurderCard();
      setMurderCards(newMurderCards);

      const newClueCards = Clues.filter(
        (elem) => !newMurderCards.find(({ id }) => elem.id === id)
      );

      setClueCards(newClueCards);
      giveClueCards(newClueCards);
    }
  }, []);

  useEffect(() => {
    if (game) {
      const active = game.players.find((player) => player.role === 'active');
      const asked = game.players.find((player) => player.role === 'asked');
      setActivePlayer(active!.playerId);
      setAskedPlayer(asked!.playerId);
    }
  }, [game]);

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
        <ActivePlayer activePlayer={activePlayer} askedPlayer={askedPlayer} />
      </div>
    </div>
  );
}

export default GameRoomPage;
