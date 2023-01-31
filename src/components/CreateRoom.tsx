import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useGameContext} from "../Context/Context";
import "../Styling/Homepage.scss";

function CreateRoom({
  create,
  setCreate,
}: {
  create: Boolean;
  setCreate: Function;
}) {
  const {rooms, user} = useGameContext();

  const [newRoom, setNewRoom] = useState({
    name: "",
    roomId: uuidv4(),
    players: [user?.socketId],
    maxPlayers: 4,
  });

  useEffect(() => {
    if (user) {
      setNewRoom({...newRoom, players: [user?.socketId]});
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setNewRoom({...newRoom, [target.name]: target.value});
  };

  const handleCreate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(newRoom);
  };

  return (
    <div className="waiting-room-container ">
      <Form onSubmit={handleCreate}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Label>Max Players</Form.Label>
        <Form.Select
          name="maxPlayers"
          defaultValue={4}
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </Form.Select>
        <Button className="new-btn" variant="primary" type="submit">
          Create
        </Button>
        <Button
          onClick={() => setCreate(!create)}
          className="new-btn"
          variant="primary"
          type="button"
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default CreateRoom;
