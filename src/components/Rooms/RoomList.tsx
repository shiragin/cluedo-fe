import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useGameContext } from '../../Context/Context';
import '../../Styling/Homepage.scss';

function RoomList({
  create,
  setCreate,
}: {
  create: Boolean;
  setCreate: Function;
}) {
  const { onAddUser, rooms, user, onJoin } = useGameContext();
  const [selectedRoom, setSelectedRoom] = useState(rooms![0]?.roomId || '');

  function selectRoomHandler(roomId: string) {
    if (roomId === selectedRoom) setSelectedRoom('');
    else setSelectedRoom(roomId);
  }

  return (
    <div className='waiting-room-container'>
      <Table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          <>
            {rooms?.map((room) => {
              return (
                <tr
                  onClick={() => selectRoomHandler(room.roomId)}
                  key={room.roomId}
                  className={selectedRoom === room?.roomId ? 'selected' : ''}
                >
                  <td>{room.name}</td>
                  <td>
                    {room?.players?.length}/{room?.maxPlayers}
                  </td>
                </tr>
              );
            })}
          </>
        </tbody>
      </Table>
      <div className='button-container'>
        <Button
          onClick={() => {
            setCreate(!create);
          }}
          variant='primary'
          className='new-btn'
        >
          Create new room
        </Button>
        <Button
          onClick={() => {
            if (onJoin) onJoin(selectedRoom);
          }}
          variant='primary'
          className='new-btn'
          disabled={!selectedRoom}
        >
          Join room
        </Button>
      </div>
    </div>
  );
}

export default RoomList;
