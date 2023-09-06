import React from 'react';

const Cell = (props) => {
    // console.log(props);
    const {value, onClick, className} = props;
    // console.log(value, onClick, clas);
    // console.log(className);
    return <div className={`game-cell ${props.className}`} onClick={props.onClick}>
        {props.value}
    </div>;
};

export default Cell;