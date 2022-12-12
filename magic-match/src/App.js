import './App.css';
import { useState } from "react";

const cardImages = [
  { src: "img/,rose.png" },
  { src: "img/sword.png" },
  { src: "img/key.png" },
  { src: "img/lock.png" },
  { src: "img/mug.png" },
  { src: "img/soccer.png" }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    console.log(turns, cards);
  }


  return (
    <div className="App">
      <h1>Magic match</h1>
      <button onClick={shuffleCards}>New game</button>
    </div>
  );
}

export default App;
