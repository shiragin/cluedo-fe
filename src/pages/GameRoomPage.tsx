import React from 'react';
import Player from '../components/Game/Player';
import Center from '../components/Game/Center';
import ActivePlayer from '../components/Game/ActivePlayer';
import '../Styling/GameRoom.scss';

function GameRoomPage() {
  return (
    <div className='game-container'>
      <div className='top'>
        <Player display={'hor'} />
      </div>
      <div className='middle'>
        <Player display={'ver'} />
        <Center />
        <Player display={'ver'} />
      </div>
      <div className='bottom'>
        <ActivePlayer />
      </div>
    </div>
  );
}

export default GameRoomPage;
