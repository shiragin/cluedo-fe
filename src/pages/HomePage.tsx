import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function HomePage() {
  return (
    <div>
      <div>HomePage</div>
      <Form>
        <Form.Group className="mb-3" controlId="input">
          <Form.Label>What is Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter NickName" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default HomePage;
