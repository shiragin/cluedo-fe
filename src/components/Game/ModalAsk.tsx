import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGameContext } from '../../Context/Context';
import ClueCard from '../Cards/ClueCard';
import { Clue } from '../../interfaces/interface';

function ModalAsk(props: any) {
  console.log(props);
  const { isAsked } = useGameContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={isAsked} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>An ask!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='selected-card'>
          {props.asked.map((object: Clue, index: number) => (
            <ClueCard
              key={index}
              name={object.name}
              cardType={object.cardType}
              color={object.color}
              image={object.image}
              myClues={[]}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAsk;
