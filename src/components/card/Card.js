import React from 'react';
import styled from "styled-components";
import "./CardStyle.css"

const StyledCard = styled.div`
    position: relative;
    /* width: 400px;/ */
`;

const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;

const CarImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
    width: 80%;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardTitle = styled.h3`
    font-size: 18;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: black;
`;

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;

const CardAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit:  cover;
    flex-shrink: 0;
`;

const UserName = styled.span `
    font-weight: 300px;
    font-size: 16px;
`;

const CardAmount = styled.span `
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7d6aff 1.38%, #ffb86c 64.35%, #fc2872 119.91%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;  

const CardHeart = styled.img `
    width: 20px;
    height: 20px;
`;

const CardComment = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
    
`;

const Card = (props) => {
    return (
        <StyledCard>
            <CardImage>
                <CarImg src={props.image} alt=''></CarImg>
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <CardAvatar src={props.avatar} alt=''></CardAvatar>
                        <UserName>{props.username}</UserName>
                    </CardUser>
                    <CardComment>
                        <CardHeart src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGYzte4d9_wmg7iHdnRVmIC9bL_s3e7rFXZxXtMyL_ixCrjLJrxf2NMzapPrjSZQiCBA&usqp=CAU' alt=''></CardHeart>
                        <div>256</div>
                    </CardComment>
                </CardTop>
                <CardFooter>
                    <CardTitle>{props.title}</CardTitle>
                    <CardAmount>12000 PSL</CardAmount>
                </CardFooter>
            </CardContent>
        </StyledCard> 
    );
};

export default Card;