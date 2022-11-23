import React, { useState } from 'react';
import './NextCard.css'

function NextCard() {

  const initialState = {
    number: 'Hi',
    details: 'Welcome to my app, click the button to start the game and draw your first card'
  };

  const cardNumbers = [
    {
      number: '1',
      details: 'MUST EITHER START A MAN OUT OR MOVE ONE MAN FORWARD 1 SQUARE'
    },
    {
      number: '2',
      details: 'MUST EITHER START A MAN OUT OR MOVE ONE MAN FORWARD 2 SQUARES. DRAW AGAIN'
    },
    {
      number: '3',
      details: 'MUST MOVE ONE MAN FORWARD 3 SQUARES'
    },
    {
      number: '4',
      details: 'MUST MOVE ONE MAN BACKWARD 4 SQUARES'
    },
    {
      number: '5',
      details: 'MUST MOVE ONE MAN FORWARD 5 SQUARES'
    },

    {
      number: '7',
      details: 'MUST EITHER MOVE ONE MAN FORWARD 7 SQUARES OR SPLIT THE MOVE BETWEEN ANY TWO MEN'
    },
    {
      number: '8',
      details: 'MUST MOVE ONE MAN FORWARD 8 SQUARES'
    },
    {
      number: '10',
      details: 'MUST EITHER MOVE ONE MAN FORWARD 10 SQUARES OR MOVE ONE MAN BACKWARD 1 SQUARE'
    },
    {
      number: '11',
      details: 'MOVE ONE MAN FORWARD 11 SQUARES OR ANY ONE OF YOUR MEN MAY SWAP WITH AN OPPONENTS MAN'
    },
    {
      number: '12',
      details: 'MUST MOVE ONE MAN FORWARD 12 SQUARES'
    },
    {
      number: 'SORRY',
      details: 'MUST TAKE ONE MAN FROM YOUR START AND SWAP POSITIONS WITH ANY OPPONENTS MAN'
    }
  ];

  const [card, setCard] = useState(initialState);

  const handleClick = () => {
    const random = Math.floor(Math.random() * 11);
    const updatedCard = cardNumbers[random];
    setCard(updatedCard);
  }

  return (
    <>
      <div className='wrapper'>
        <h2>{card.number}</h2>
        <div className='box'>
          <p>{card.details}</p>
          <button onClick={handleClick} className='button'>Next Card</button>
        </div>
      </div>
    </>
  )
}

export default NextCard;