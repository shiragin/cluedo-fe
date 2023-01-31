import Clues from "../Data/Clues.json";
import Button from 'react-bootstrap/Button';
import SuspectCard from "./SuspectCard/SuspectCard";
import AccuseButton from "./AccuseButton/AccuseButton";

function ActivePlayer(): JSX.Element {

  function onAsk() {
    console.log("This player ask");
  }

    return (
      <div className="center">
        {/* <SuspectCard /> */}
        <h3>Active Player:</h3>
        <Button variant="info" onClick={onAsk}> Ask </Button>
        <AccuseButton />

      </div>
    );
  }
  
  export default ActivePlayer;