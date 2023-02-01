import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { useGameContext } from '../../Context/Context';
import { useEffect } from 'react';


const ModalAccuse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isAccuse, setIsAccuse } = useGameContext();
  
  useEffect(() => {
    if (isAccuse) {
      setShow(true);
    }
  }, [isAccuse]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose one weapon, suspect and location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group as={Col} controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select">
                  <option>Classroom</option>
                  <option>Rooftop</option>
                  <option>Kitchen</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeapon">
                <Form.Label>Weapon</Form.Label>
                <Form.Control as="select">
                  <option>JavaScript</option>
                  <option>CSS</option>
                  <option>HTML</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSuspect">
                <Form.Label>Suspect</Form.Label>
                <Form.Control as="select">
                  <option>Mor Mika Krengel</option>
                  <option>Zohar Suslovich</option>
                  <option>Amit Bourmad</option>
                  <option>Lior Barak</option>
                  <option>Yehuda Goldner</option>
                  <option>Yonatan Salmon</option>
                </Form.Control>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAccuse;