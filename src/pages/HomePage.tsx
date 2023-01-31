import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import { RxMagnifyingGlass } from 'react-icons/rx';
import {useGameContext} from "../Context/Context";
import "../Styling/Homepage.scss";

function HomePage() {
  const [show, setShow] = useState(true);
  const [create, setCreate] = useState(true);
  const [nickName, setNickname] = useState("");
  const {onAddUser, rooms, user} = useGameContext();
  console.log(rooms);

  const handleChange = (e: React.ChangeEvent) => {
    setNickname((e.target as HTMLInputElement).value);
  };
  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onAddUser) {
      onAddUser(nickName);
      setShow(false);
    }
  };
  const handleCreate = (e: React.FormEvent<HTMLFormElement>): void => {
    const newRoom = {
      name: "Test",
      roomId: "3",
      players: [user?.socketId],
      maxPlayers: 3,
    };
  };

  return (
    <div className="homepage-img">
      <div className="container">
        <div className="homepage-title">
          <h1>Cluedo</h1>
          {/* <RxMagnifyingGlass /> */}
        </div>
        <Form hidden={!show} onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="input">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              required
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
        </Form>
        <div className="waiting-room-container " hidden={show}>
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
                        console.log(room);
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
          <div className="button-container d-flex flex-column">
            <Button variant="primary" className="new-btn">
              create Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
