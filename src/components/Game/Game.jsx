import { useReducer, useState } from 'react';
import './Game.scss'
import GameReducer from './Gamereducer';


const Game = () => {

    

    const [reducer, dispatch] = useReducer(GameReducer,
        [
            {
                id: 1,
                name: 'box1',
                in: '',
                class: '',
            },
            {
                id: 2,
                name: 'box2',
                in: '',
                class: '',
            },
            {
                id: 3,
                name: 'box3',
                in: '',
                class: '',
            },
            {
                id: 4,
                name: 'box4',
                in: '',
                class: '',
            },
            {
                id: 5,
                name: 'box5',
                in: '',
                class: '',
            },
            {
                id: 6,
                name: 'box6',
                in: '',
                class: '',
            },
            {
                id: 7,
                name: 'box7',
                in: '',
                class: '',
            },
            {
                id: 8,
                name: 'box8',
                in: '',
                class: '',
            },
            {
                id: 9,
                name: 'box9',
                in: '',
                class: '',
            }
        ]
    )

    return (
        <div className='Game'>
            <div className="container">
                <div className="Game-block">
                    <div className="Game-block-inner">
                        {
                            reducer.map((box) => (
                                <div className='Game-block-inner-box' key={box.id} id={box.id} onClick={() => handleClick(box.id)}>
                                    <p className={box.class}>{box.in}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;