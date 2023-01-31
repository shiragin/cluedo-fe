import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styling/App.scss';
// import {io} from "socket.io-client";
import GameContextProvider from './Context/Context';
import Homepage from './pages/Homepage';
import GameRoom from './components/GameRoom';

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/game' element={<GameRoom />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
