import Cluedo from '../../Data/Clue.jpg';
import { useGameContext } from '../../Context/Context';
import { useEffect, useState } from 'react';
import Clues from '../../Data/Clues.json';
import ClueCard from '../Cards/ClueCard';
import ModalAsk from './ModalAsk';
interface Clue {
  id: number;
  name: string;
  cardType: string;
  color: string;
  image: string;
}

interface Props {
  murderCards: any;
}

const Center: React.FC<Props> = (props: Props) => {
  const { isAsked, setIsAsked } = useGameContext();
  const { selectedCards, setSelectedCards } = useGameContext();
  const [objectsArray, setObjectsArray] = useState<Clue[]>([]);

  useEffect(() => {
    if (isAsked) {
      const objects = selectedCards?.forEach((card: string) => {
        const clues = Clues.filter((elem) => elem.name === card);
        setObjectsArray((prev) => [...prev, ...clues]);
      });
    }
  }, [isAsked, selectedCards]);

  return (
    <div className='center'>
      <ModalAsk asked={objectsArray} />
      <img src={Cluedo} className='clue' alt='The murder case' />
    </div>
  );
};

export default Center;
