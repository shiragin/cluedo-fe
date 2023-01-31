import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import { RxMagnifyingGlass } from 'react-icons/rx';
import {useGameContext} from "../Context/Context";
import "../Styling/Homepage.scss";

function HomePage() {
  const [nickName, setNickname] = useState("");
  const rooms = [
    {name: "room1", maxPlayers: 4, id: "1", players: ["1", "2", "3"]},
    {name: "room2", maxPlayers: 3, id: "2", players: ["5", "6"]},
  ];
  const {onAddUser} = useGameContext();

  const handleChange = (e: React.ChangeEvent) => {
    setNickname((e.target as HTMLInputElement).value);
  };
  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onAddUser) onAddUser(nickName);
  };

  return (
    <div className="homepage-img">
      <div className="container">
        <div className="homepage-title">
          <h1>Cluedo</h1>
          {/* <RxMagnifyingGlass /> */}
        </div>
        {/* <Form onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="input">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={nickName}
              type="text"
              placeholder="Enter nickname..."
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Solve a murder
          </Button>
        </Form> */}
        <div className="waiting-room-container d-flex">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Room Name</th>
                <th>Players</th>
              </tr>
            </thead>
            <tbody>
              <>
                {rooms.map((room) => {
                  return (
                    <tr onClick={()=>{console.log(room)}} key={room.id}>
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
          <div className="button-container d-flex flex-column">
            <Button>create Room</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
