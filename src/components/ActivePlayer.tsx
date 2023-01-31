import Clues from "../Data/Clues.json";
import Button from 'react-bootstrap/Button';
import SuspectCard from "./SuspectCard/SuspectCard";

function ActivePlayer(): JSX.Element {
    return (
      <div className="center">
        <SuspectCard />
        {/* <h1>Active Player</h1>
        <Button variant="success">Accuse</Button>{' '} */}
      </div>
    );
  }
  
  export default ActivePlayer;