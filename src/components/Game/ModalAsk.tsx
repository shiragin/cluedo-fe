import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGameContext } from '../../Context/Context';
import ClueCard from '../Cards/ClueCard';
import { Clue } from '../../interfaces/interface';

function ModalAsk(props: any) {
  const {
    isAsked,
    setIsAsked,
    activePlayer,
    askedPlayer,
    game,
    user,
    passTurn,
  } = useGameContext();
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

  const [answer, setAnswer] = useState<Clue[] | null>(null);

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
    if (!asked) return;
    const newClues: Clue[] = [];
    for (const clue1 of asked!.clues) {
      for (const clue2 of props.asked) {
        if (clue1.name === clue2.name) {
          newClues.push(clue1);
        }
      }
    }
    console.log('NEW CLUES', newClues);
    setAnswer(newClues);
  }, [asked]);

  function answerHandler(answer: string) {
    if (setIsAsked) setIsAsked(false);
    if (answer === 'no') {
      console.log('no');
      if (passTurn) passTurn();
    }
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
            <div>Answer the question</div>
            {answer?.length === 0 && (
              <Button className='new-btn' onClick={() => answerHandler('no')}>
                Sorry, no
              </Button>
            )}
            {answer?.length === 1 && (
              <Button
                className='new-btn'
                onClick={() => answerHandler('clue1')}
              >
                {answer[0]?.name}
              </Button>
            )}
            {answer?.length === 2 && (
              <div>
                <Button
                  className='new-btn'
                  onClick={() => answerHandler('clue1')}
                >
                  {answer[0].name}
                </Button>
                <Button
                  className='new-btn'
                  onClick={() => answerHandler('clue2')}
                >
                  {answer[1].name}
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalAsk;
