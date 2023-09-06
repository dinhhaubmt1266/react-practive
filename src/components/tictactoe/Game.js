import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyle.css"
import { calculateWinner } from '../../helpers';


const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':{
            const {board, xIsNext} = state
            const {index, winner} = action.payload
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board[index] = xIsNext ? "X" : "O"
            nextState.xIsNext =  !xIsNext;
            // console.log(nextState);
            return nextState
        }
        case 'RESET':{
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board = Array(9).fill(null)
            nextState.xIsNext = true
            return nextState
        }

        default:
            break;
    }
    return state;
}

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    //     name: "hand"
    // });
    // console.log(state)
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        // const boardCopy = [...state.board];
        // if (winner || boardCopy[index]) return;
        // boardCopy[index] = state.xIsNext ? "X" : "O";
        dispatch({
            type: 'CLICK',
            payload: {
                index, 
                winner,
            }
        })
        // setState({
        //     ...state,
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext
        // })
        // console.log(state);
        // console.log(boardCopy)
        // state.board(boardCopy);
        // setState(!state.xIsNext);

    };

    const handleResetGame = (state, action) => {
        dispatch({
            type: "RESET"
        })
    }   

    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            <div className='game-winner'>
                {winner ? `Winner is ${state.xIsNext ? 'O':"X"}`:''}
            </div>
            {/* <br></br> */}
            <button className="game-reset" onClick={handleResetGame}>Reset game</button>
        </div>
    );
};

export default Game;