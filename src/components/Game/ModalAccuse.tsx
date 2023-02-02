import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { useGameContext } from "../../Context/Context";
import { useEffect } from "react";
import Clues from "../../Data/Clues.json";

interface Accusation {
  suspect: string;
  weapon: string;
  location: string;
}

const ModalAccuse: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isAccuse, setIsAccuse } = useGameContext();
  const [selectedSuspect, setSelectedSuspect] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (isAccuse) {
      setShow(true);
    }
  }, [isAccuse]);

  useEffect(() => {
    if (show === false) {
      if (setIsAccuse) {
        setIsAccuse(false);
      }
    }
  }, [show]);

  const handleSuspectChange = (e: React.ChangeEvent) => {
    setSelectedSuspect((e.target as HTMLInputElement).value);
  };

  const handleWeaponChange = (e: React.ChangeEvent) => {
    setSelectedWeapon((e.target as HTMLInputElement).value);
  };

  const handleLocationChange = (e: React.ChangeEvent) => {
    setSelectedLocation((e.target as HTMLInputElement).value);
  };

  const optionsSuspect = Clues.filter((clue) => clue.type === "suspect").map(
    (clue) => (
      <option key={clue.id} value={clue.name}>
        {clue.name}
      </option>
    )
  );
  const optionsWaepon = Clues.filter((clue) => clue.type === "weapon").map(
    (clue) => (
      <option key={clue.id} value={clue.name}>
        {clue.name}
      </option>
    )
  );
  const optionsLocation = Clues.filter((clue) => clue.type === "location").map(
    (clue) => (
      <option key={clue.id} value={clue.name}>
        {clue.name}
      </option>
    )
  );
  const newAccusation: Accusation = {
    suspect: selectedSuspect,
    weapon: selectedWeapon,
    location: selectedLocation,
  };
  const handleSaveChanges = () => {
    console.log(newAccusation);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Choose one weapon, one suspect and one location
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridSuspect">
              <Form.Label>Suspect</Form.Label>
              <Form.Control
                as="select"
                value={selectedSuspect}
                onChange={handleSuspectChange}
              >
                <option>Choose...</option>
                {optionsSuspect}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridWeapon">
              <Form.Label>Weapon</Form.Label>
              <Form.Control
                as="select"
                value={selectedWeapon}
                onChange={handleWeaponChange}
              >
                <option>Choose...</option>
                {optionsWaepon}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="select"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option>Choose...</option>
                {optionsLocation}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAccuse;
