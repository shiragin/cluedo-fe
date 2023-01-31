import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {useGameContext} from "../Context/Context";
import "../Styling/Homepage.scss";

function WaitingRoom({
  create,
  setCreate,
}: {
  create: Boolean;
  setCreate: Function;
}) {
  const {onAddUser, rooms, user, onJoin} = useGameContext();

  return (
    <div className="waiting-room-container ">
      <Table striped bordered hover>
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
                  onClick={() => {
                    if (onJoin) onJoin(room.roomId);
                  }}
                  key={room.roomId}
                >
                  <td>{room.name}</td>
                  <td>
                    {room.players.length}/{room.maxPlayers}
                  </td>
                </tr>
              );
            })}
          </>
        </tbody>
      </Table>
      <div className="button-container">
        <Button
          onClick={() => {
            setCreate(!create);
          }}
          variant="primary"
          className="new-btn"
        >
          create Room
        </Button>
      </div>
    </div>
  );
}

export default WaitingRoom;
