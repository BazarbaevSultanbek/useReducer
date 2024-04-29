import React, { useEffect, useReducer, useState } from 'react';
import GameReducer from './Gamereducer';
import './Game.scss';

const Game = () => {


  // const [number, setNumber] = useState()
  const [reducer, dispatch] = useReducer(GameReducer, [
    {
      boxNumber: 1,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 2,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 3,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 4,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 5,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 6,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 7,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 8,
      value: '',
      classValue: ''
    },
    {
      boxNumber: 9,
      value: '',
      classValue: ''
    }
  ])

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], // rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonals
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
        return board[a].value;
      }
    }

    return null;
  };

  const ClickedFunc = (number) => {
    const clickedBox = reducer.find((item) => item.boxNumber === number);

    const winner = checkWinner(reducer);
    if (winner) {
      alert('Winner:', winner);
      dispatch({ type: 'ResetBox' });
    }

    if (clickedBox && clickedBox.value === '') {
      dispatch({ type: "ClickedBox", boxNumber: number });

      setTimeout(() => {
        const emptyBoxes = reducer.filter((item) => item.value === '');
        if (emptyBoxes.length > 0) {
          const randomBox = Math.floor(Math.random() * emptyBoxes.length);
          dispatch({ type: 'UnclickedBox', boxNumber: randomBox });
        }
      }, 1000);
    }
  };





  return (
    <div className="Game">
      <div className="container">
        <div className="Game-block">
          <div className="Game-block-inner">
            {
              reducer.map((item) => (
                <div className='Game-block-inner-box' id={item.boxNumber} key={item.boxNumber} onClick={() => ClickedFunc(item.boxNumber)}>
                  <p className={item.classValue}>{item.value}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
