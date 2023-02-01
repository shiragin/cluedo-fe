import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useGameContext } from '../Context/Context';
import '../Styling/Homepage.scss';
import CreateRoom from '../components/Rooms/CreateRoom';
import RoomList from '../components/Rooms/RoomList';
import Queue from '../components/Rooms/Queue';

function HomePage(): JSX.Element {
  const [show, setShow] = useState(true);
  const [create, setCreate] = useState(false);
  const [queue, setQueue] = useState(false);
  const [nickName, setNickname] = useState('');
  const { onAddUser, rooms, user, setUser, onJoin, onGetRooms, currentRoom } =
    useGameContext();

  const handleChange = (e: React.ChangeEvent) => {
    setNickname((e.target as HTMLInputElement).value);
  };
  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onAddUser) {
      onAddUser(nickName);
      setShow(false);
    }
  };

  function getRoomsHandler() {
    if (onGetRooms) onGetRooms();
    setShow(false);
  }

  // checks to see if user details are in localstorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedUserData = savedUser ? JSON.parse(savedUser) : null;
    if (savedUserData) {
      if (setUser) setUser(savedUserData);
    }
  }, []);

  // if there's a current room joined, move to queue
  useEffect(() => {
    if (currentRoom) {
      setQueue(true);
    }
  }, [currentRoom]);

  return (
    <div className='homepage-img'>
      <div className='container'>
        <div className='homepage-title'>
          <h1>Cluedo</h1>
        </div>
        {!user && (
          <Form hidden={!show} onSubmit={handleSub}>
            <Form.Group className='mb-3' controlId='input'>
              <Form.Label>What is your name?</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={nickName}
                minLength={3}
                maxLength={8}
                type='text'
                placeholder='Enter nickname...'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Solve a murder
            </Button>
          </Form>
        )}
        {user && show && (
          <div className='homepage-welcome'>
            <h5 className='mb-4'>
              {`Welcome, ${user.nickname}. Are you ready to solve a crime most
              foul?`}
            </h5>
            <Button className='new-btn' onClick={getRoomsHandler}>
              Solve a murder
            </Button>
          </div>
        )}
        <div hidden={show || queue}>
          {!create ? (
            <RoomList create={create} setCreate={setCreate} />
          ) : (
            <CreateRoom create={create} setCreate={setCreate} />
          )}
        </div>
        <div hidden={show && !queue}>
          {queue && <Queue queue={queue} setQueue={setQueue} />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
