import React from "react";
import styled from "styled-components";

import TokenLogo from "../assests/AvonTokenLogo.png";
import RocketVideo from "../assests/rocket.gif";

const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: black;
    color: white;

    text-align: center;

    height: 750px;

    background-image: url(${RocketVideo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const LogIn = styled.button`
    height: 45px;
    width: 200px;

    color: white;
    background-color: #FF7500;
    border: 1px solid #F7BE00;

    :hover {
        background-color: #ffab61;
        cursor: pointer;
    }

    margin-top: 15px;
    margin-bottom: 15px;

    box-shadow: 1px 2px #F7BE00;
`

export default function NewsPage () {

    return (
        <>
            <Container>
                    <h2 Style="margin-bottom: 50px;"> Must Have At Least 100 AvonTokens To Log In</h2>
                    <h3 Style="margin-bottom: 50px;"> We'll see you all at the moon</h3>
                    <img src={TokenLogo} height="342" alt="" />
            </Container>

            <div Style="background-color:black; height: 200px; text-align:center;">
                <LogIn>
                    Log In
                </LogIn>
            </div>
        </>
    )
}