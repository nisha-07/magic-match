import './App.css';

import SingleCard from './components/SingleCard/SingleCard';
import { useEffect, useState } from "react";

const cardImages = [
  { src: "img/rose.png", matched: false },
  { src: "img/sword.png", matched: false },
  { src: "img/key.png", matched: false },
  { src: "img/lock.png", matched: false },
  { src: "img/mug.png", matched: false },
  { src: "img/soccer.png", matched: false }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
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
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      }
      else {
        console.log("those cards are not equal")
        // of they do not match, will be flippeed back in 1 second
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // to start the game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  }
  return (
    <div className="App">
      <h1> Magic match</h1 >
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid" >
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
