import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { useGameContext } from '../Context/Context';
import '../Styling/Homepage.scss';

function HomePage() {
  const [nickName, setNickname] = useState('');

  const { onAddUser } = useGameContext();

  const handleChange = (e: React.ChangeEvent) => {
    setNickname((e.target as HTMLInputElement).value);
  };
  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onAddUser) onAddUser(nickName);
  };

  return (
    <div className='homepage-img'>
      <div className='container'>
        <div className='homepage-title'>
          <h1>Cluedo</h1>
          {/* <RxMagnifyingGlass /> */}
        </div>
        <Form onSubmit={handleSub}>
          <Form.Group className='mb-3' controlId='input'>
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
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
      </div>
    </div>
  );
}

export default HomePage;
