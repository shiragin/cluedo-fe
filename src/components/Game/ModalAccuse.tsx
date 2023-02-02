import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { useGameContext } from '../../Context/Context';
import { useEffect } from 'react';
import { Clue } from '../../interfaces/interface';
import Clues from '../../Data/Clues.json';
import ClueCard from '../Cards/ClueCard';

interface Accusation {
  suspect: string;
  weapon: string;
  location: string;
}

function ModalAccuse({ murderCards }: { murderCards: Clue[] }): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isAccuse, setIsAccuse, accuse, winResult } = useGameContext();
  const [selectedSuspect, setSelectedSuspect] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

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

  const optionsSuspect = Clues.filter(
    (clue) => clue.cardType === 'suspect'
  ).map((clue) => (
    <option key={clue.id} value={clue.name}>
      {clue.name}
    </option>
  ));
  const optionsWaepon = Clues.filter((clue) => clue.cardType === 'weapon').map(
    (clue) => (
      <option key={clue.id} value={clue.name}>
        {clue.name}
      </option>
    )
  );
  const optionsLocation = Clues.filter(
    (clue) => clue.cardType === 'location'
  ).map((clue) => (
    <option key={clue.id} value={clue.name}>
      {clue.name}
    </option>
  ));
  const newAccusation: Accusation = {
    suspect: selectedSuspect,
    weapon: selectedWeapon,
    location: selectedLocation,
  };
  const handleSaveChanges = () => {
    console.log('accusation', newAccusation);
    console.log('solution', murderCards);
    const murder: Accusation = { suspect: '', location: '', weapon: '' };
    murderCards.forEach((card) => {
      if (card.cardType === 'suspect') {
        murder.suspect = card.name;
      } else if (card.cardType === 'location') {
        murder.location = card.name;
      } else if (card.cardType === 'weapon') {
        murder.weapon = card.name;
      }
    });
    if (
      newAccusation.suspect === murder.suspect &&
      newAccusation.weapon === murder.weapon &&
      newAccusation.location === murder.location
    ) {
      console.log('WIN');
      if (accuse) accuse(true);
    } else {
      console.log('sorry, no');
      if (accuse) accuse(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {!winResult?.stat && (
          <Modal.Header closeButton>
            <Modal.Title>
              Choose one weapon, one suspect and one location
            </Modal.Title>
          </Modal.Header>
        )}
        {!winResult?.stat && (
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId='formGridSuspect'>
                <Form.Label>Suspect</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedSuspect}
                  onChange={handleSuspectChange}
                >
                  <option>Choose...</option>
                  {optionsSuspect}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='formGridWeapon'>
                <Form.Label>Weapon</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedWeapon}
                  onChange={handleWeaponChange}
                >
                  <option>Choose...</option>
                  {optionsWaepon}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='formGridLocation'>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option>Choose...</option>
                  {optionsLocation}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        {!winResult?.stat && (
          <Modal.Footer>
            <Button variant='primary' onClick={handleSaveChanges}>
              Accuse!
            </Button>
          </Modal.Footer>
        )}
        {winResult?.stat && (
          <div className='d-flex flex-column align-items-center text-center fs-1'>
            {winResult?.win ? 'KILLER FOUND' : 'WRONG ACCUSATION'}
            {/* <div> THE SOLUTION IS</div> */}
            {/* {murderCards.map((object: Clue, index: number) => (
              <ClueCard
                key={index}
                name={object.name}
                cardType={object.cardType}
                color={object.color}
                image={object.image}
                myClues={[]}
              />
            ))} */}
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalAccuse;
