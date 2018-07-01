import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function generateDeck() {
  let symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    let card = {
      isFlipped: false,
      symbol: symbols[i % 8],
    }
    deck.push(card);
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    }
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3 className="subtitle">Match cards to win!</h3>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
}

export default App;
