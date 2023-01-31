import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { useGameContext } from '../Context/Context';
import '../Styling/Homepage.scss';
import CreateRoom from '../components/Rooms/CreateRoom';
import WaitingRoom from '../components/Rooms/RoomList';

function HomePage() {
  const [show, setShow] = useState(true);
  const [create, setCreate] = useState(false);
  const [nickName, setNickname] = useState('');
  const { onAddUser, rooms, user, onJoin } = useGameContext();
  console.log(rooms);

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

  return (
    <div className='homepage-img'>
      <div className='container'>
        <div className='homepage-title'>
          <h1>Cluedo</h1>
          {/* <RxMagnifyingGlass /> */}
        </div>
        <Form hidden={!show} onSubmit={handleSub}>
          <Form.Group className='mb-3' controlId='input'>
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              required
              onChange={handleChange}
              value={nickName}
              type='text'
              placeholder='Enter nickname...'
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Solve a murder
          </Button>
        </Form>
        <div hidden={show}>
          {!create ? (
            <WaitingRoom create={create} setCreate={setCreate} />
          ) : (
            <CreateRoom create={create} setCreate={setCreate} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
