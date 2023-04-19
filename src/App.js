import './App.css';
import MemoryCard from "./components/MemoryCard";
import './components/MemoryCard.css';
import { useState } from 'react';

function App() {
  const generateDeck = () => {
    const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
    let deck = [];

    for (let i = 0; i < 16; i++) {
      const card = {
        isFlipped: false,
        symbol: symbols[i % 8]
      }
      deck.push(card);
    }
    shuffle(deck);
    return deck
  }

  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  const pickCard = (cardIndex) => {
    if (deck[cardIndex].isFlipped) return;
    const cardToFlip = { ...deck[cardIndex], isFlipped: true };
    let newPickedCards = pickedCards.concat(cardIndex);
    const newDeck = deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card
    });
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => unflipCards(card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    setDeck(newDeck);
    setPickedCards(newPickedCards);
  }

  const unflipCards = (card1Index, card2Index) => {
    const card1 = { ...deck[card1Index], isFlipped: false }
    const card2 = { ...deck[card2Index], isFlipped: false }

    const newDeck = deck.map((card, index) => {
      if (card.symbol === card1.symbol) {
        return card1
      }
      if (card.symbol === card2.symbol) {
        return card2
      }
      return card
    });
    setDeck(newDeck);
  }
  const [deck, setDeck] = useState(generateDeck());
  const [pickedCards, setPickedCards] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Memory Game
        </h1>
        <h2 className="subtitle">Match cards to win</h2>
      </header>
      <div className="card-container">
        {deck.map((card, index) =>
          <MemoryCard
            key={index}
            symbol={card.symbol}
            isFlipped={card.isFlipped}
            pickCard={() => pickCard(index)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
