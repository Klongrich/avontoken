import React from "react";
import styled from "styled-components";

import TokenLogo from "../assests/AvonTokenLogo.png";

const Container = styled.div`
    background-color: #F0EAEA;

    height: 750px;
    padding: 10px;
`

const Button = styled.div`
    width: 228px;
    height: 65px;

    background: #FB6C1C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    border-radius: 18px;

    margin-top: 70px;
    margin-bottom: 50px;    
    margin-left: 63px;

    p {
        font-family: Nova Square;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 22px;
        text-align: center;

        color: #000000;
        padding-top: 22px;
    }
`

const BottomButton = styled.div`
width: 60px;
height: 54px;

background: #FB6C1C;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

float: left;
margin-left: 40px;
margin-top: 35px;

text-align: center;

`

const Circle = styled.div`
width: 15px;
height: 13.99px;

background: #C4C4C4;
border-radius: 21px;
transform: matrix(1, 0, 0, 1, 0, 0);

margin-top: -42px;
margin-left: 65px;
`

const Line = styled.div`
position: absolute;
width: 9px;
height: 0px;

border: 1px solid #000000;
transform: matrix(1, -0.01, 0.01, 1, 0, 0);

margin-top: 6px;
margin-left: 2px;
`

const VerticalLine = styled.div`
position: absolute;
width: 8.6px;
height: 0px;

border: 1px solid #000000;
transform: matrix(0, 1, -1, 0, 0, 0);

margin-top: 6px;
margin-left: 2px;
`

const CircleLogo = styled.div`
width: 52px;
height: 51px;

background-image: url(${TokenLogo});
background-size: 100% 100%;
border: 1px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 25px;

margin-left: 80%;
margin-top: -28px;
`

export default function Dashboard({balance}) {
    
    return (
        <>
            <Container>
                <h4 Style="font-family:Nova Square; font-size: 18px;"> {balance} AT </h4>
                
                <Circle>
                    <Line></Line>
                    <VerticalLine></VerticalLine>
                </Circle>

                <CircleLogo />

                <Button>
                    <p> Get Loan </p>
                </Button>

                <Button>
                    <p> Stake AT </p>
                </Button>

                <Button>
                    <p>Add Liquidity</p>
                </Button>

                <BottomButton>
                    <p>Logo</p>
                </BottomButton>

                <BottomButton>
                    <p>Logo</p>
                </BottomButton>

                <BottomButton>
                    <p>Logo</p>
                </BottomButton>
            </Container>
        </>
    )
}