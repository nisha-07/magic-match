import './App.css';

import SingleCard from './components/SingleCard/SingleCard';
import { useEffect, useState } from "react";

const cardImages = [
  { src: "img/rose.png" },
  { src: "img/sword.png" },
  { src: "img/key.png" },
  { src: "img/lock.png" },
  { src: "img/mug.png" },
  { src: "img/soccer.png" }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // we cannot check here whether the two choices are equal or not
    // because it will be checked before updating the states
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards are equal")
        resetTurn();
      }
      else {
        console.log("those cards are not equal")
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
  }
  return (
    <div className="App">
      <h1> Magic match</h1 >
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid" >
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
