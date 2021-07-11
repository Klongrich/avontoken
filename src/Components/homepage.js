import React from "react";
import styled from "styled-components";

import TokenLogo from "../assests/AvonTokenLogo.png";

const Container = styled.div`
    background-color: black;

    font-size: 64px;
    font-family: 'Playball', cursive;
    color: #FFFFFF;

    p{
        margin-left: 130px;
        margin-top: -135px;
    }
`   

export default function Homepage() {

    return (
        <>

            <Container>
            <div Style="padding: 15px;">
                <img src={TokenLogo} height="75" width="75" alt="" />
            </div>
            
                <p> Avon Token </p>
            </Container>

            <p Style="text-align:center;">Token Lanuched Here on Mainnet -> <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>
            <p Style="text-align:center;">Purchase on Uniswap -> <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p>
            <p Style="text-align:center;">See Listed on Uniswap -> <a href="https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p>


        </>
    )
}