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
    sendReply,
    answerBack,
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
  }, [isAsked]);

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
    setAnswer(newClues);
  }, [asked]);

  function answerHandler(choice: number) {
    if (setIsAsked) setIsAsked(false);
    if (choice === -1) {
      if (passTurn) passTurn();
    } else if (choice === 0) {
      if (sendReply) sendReply(answer![0]);
    } else if (choice === 1) {
      if (sendReply) sendReply(answer![1]);
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
          <div className='my-2 ask-buttons d-flex flex-column align-items-center gap-2'>
            <div>Answer the question</div>
            {answer?.length === 0 && (
              <Button
                className='new-btn align-self-center'
                onClick={() => answerHandler(-1)}
              >
                Sorry, no
              </Button>
            )}
            {answer?.length === 1 && (
              <Button
                className='new-btn align-self-center'
                onClick={() => answerHandler(0)}
              >
                {answer[0]?.name}
              </Button>
            )}
            {answer?.length === 2 && (
              <div className='d-flex justify-content-center gap-2'>
                <Button
                  className='new-btn align-self-center'
                  onClick={() => answerHandler(0)}
                >
                  {answer[0].name}
                </Button>
                <Button
                  className='new-btn align-self-center'
                  onClick={() => answerHandler(1)}
                >
                  {answer[1].name}
                </Button>
              </div>
            )}
          </div>
        )}
        {answerBack?.stat && (
          <div className='my-2 ask-buttons d-flex flex-column align-items-center'>
            <div>The answer!</div>
            <ClueCard
              key={1}
              name={answerBack?.answer.name}
              cardType={answerBack?.answer.cardType}
              color={answerBack?.answer.color}
              image={answerBack?.answer.image}
              myClues={[]}
            />
            <Button
              className='new-btn align-self-center'
              onClick={() => answerHandler(-1)}
            >
              Okay!
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalAsk;
