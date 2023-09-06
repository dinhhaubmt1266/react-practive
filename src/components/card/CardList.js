import React from 'react';
import Cart from './Card';
import styled from "styled-components"
import { CardData } from './CardData';

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
`;

const CardList = (props) => {
    return (
        <StyledCardList>
            {CardData.map((item, index) => {
                return (
                    <Cart image={item.image} avatar={item.avatar} title={item.title} username={item.username}></Cart>
                );
            })}        
        </StyledCardList>
    );
};


export default CardList;