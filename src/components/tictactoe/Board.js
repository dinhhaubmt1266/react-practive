import React from 'react';
// import "./GameStyle.css"
import Cell from './Cell';
import { calculateWinner } from '../../helpers';

const Board = (props) => {
    console.log(props);
    const cells = [
        null, null, null,
        "X", "X", "O", 
        null, null, null
    ];
    console.log(calculateWinner(cells));
    return (
        <div className='game-board'>
        {/* {Array(9).fill().map((item, index) => (
            <Cell key={index}></Cell>
        ))} */}
        {
            props.cells.map((item, index) => (
                <Cell 
                    key={index} 
                    value={item} 
                    onClick={() => props.onClick(index)}
                    className={item === 'X' ? 'is-X': item === 'O' ? "is-Y" : ""}
                    >
                </Cell>
            ))
        }
        </div>
    );
};

export default Board;