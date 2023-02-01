import {Clue} from "../../interfaces/interface";
import Cluedo from "../../Data/Clue.jpg";

function Center(props: any): JSX.Element {
  const {murderCards} = props;
  return (
    <div className="center">
      <img src={Cluedo} alt="The murder case" />
    </div>
  );
}

export default Center;
