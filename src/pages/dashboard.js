import React, {useState} from "react";
import styled from "styled-components";

import AccountPage from "./account_page";
import TokenLogo from "../assests/AvonTokenLogo.png";

import { User } from "@styled-icons/boxicons-regular/User";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

const Container = styled.div`
    background-color: #F0EAEA;

    height: 900px;
    padding: 10px;

    h4 {
        background-color: white;
        border-radius: 15px;
        width: 250px;
        padding: 20px;
        padding-bottom: 40px;
    }
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

margin-top: -53px;
margin-left: 21px;
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
margin-top: -55px;
`

export default function Dashboard({balance, walletAddress}) {

    const [showAccount, setShowAccount] = useState(false);

    function handleShowAccount () {
        setShowAccount(true);
    }

    function handleShowenAccount() {
        setShowAccount(false);
    }
    
    if (!showAccount) {
    return (
        <>
            <Container>
                <h4 Style="font-family:Nova Square; font-size: 18px;"> {balance} AT </h4>
                
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb">

                <Circle>
                    <Line></Line>
                    <VerticalLine></VerticalLine>
                </Circle>

                </a>

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

                <BottomButton onClick={() => handleShowAccount()}>
                    <div Style="padding-top: 8px;">
                        <User size="35" />
                    </div>
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
    } else if (showAccount) {

        return(
            <>
                <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #EE5F0F;
                            border-radius: 15px;">
                    <ArrowBack size="50" onClick={() => handleShowenAccount()} /> 
                </div>
                
                <AccountPage balance={balance} walletAddress={walletAddress}x/>
            </>
        )
    }
}