import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGameContext } from '../../Context/Context';
import ClueCard from '../Cards/ClueCard';
import { Clue } from '../../interfaces/interface';

function ModalAsk(props: any) {
  const { isAsked, setIsAsked, activePlayer, askedPlayer, game, user } =
    useGameContext();
  const [show, setShow] = useState(false);
  const [asking, setAsking] = useState<{
    playerId: string;
    playerNickname: string;
    role: string;
    clues: Clue[];
  } | null>(null);
  const [asked, setAsked] = useState<{
    playerId: string;
    playerNickname: string;
    role: string;
    clues: Clue[];
  } | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!game) return;
    const active = game!.players.find(
      (player) => player.playerId === activePlayer
    );
    const askedpl = game!.players.find(
      (player) => player.playerId === askedPlayer
    );
    if (active) setAsking(active);
    if (askedpl) setAsked(askedpl);
  }, [activePlayer]);

  useEffect(() => {
    if (!game) return;
    const askedpl = game!.players.find(
      (player) => player.playerId === askedPlayer
    );
    console.log('ask', askedpl?.clues);
    console.log('props', props.asked);
    // const result = askedpl!.clues.filter(({ name }) =>
    //   props.asked.some((clue: Clue) => clue.name === name)
    // );
    // const new = Clues?.filter(
    //   (elem) => !newMurderCards.find(({ id }) => elem.id === id)
    // );
    // console.log('jdfjsl', result);
  }, [askedPlayer, game]);

  function askClickHandler() {
    if (setIsAsked) setIsAsked(false);
  }

  return (
    <>
      <Modal show={isAsked} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {asking?.playerNickname} is asking {asked?.playerNickname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-cards'>
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
        {user?.id === askedPlayer && (
          <div className='ask-buttons'>
            <Button className='new-btn' onClick={askClickHandler}>
              Clue1
            </Button>
            <Button className='new-btn' onClick={askClickHandler}>
              Clue1
            </Button>
            <Button className='new-btn' onClick={askClickHandler}>
              OMG NOES
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalAsk;
