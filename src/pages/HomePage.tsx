import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useGameContext } from "../Context/Context";
import "../Styling/HomePage.css";

function HomePage() {
  const [nickName, setNickname] = useState("");

  const { onAddUser } = useGameContext();

  const handleChange = (e: any) => {
    setNickname(e.target.value);
  };
  const handleSub = (e: any) => {
    e.preventDefault();
    onAddUser(nickName);
  };

  return (
    <div>
      <div className="App">
        <h1>Cluedo!</h1>
      </div>
      <div className="form">
        <Form onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="input">
            <Form.Label>What is Your Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={nickName}
              type="text"
              placeholder="Enter Nickname"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default HomePage;
