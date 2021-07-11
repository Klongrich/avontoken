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

const BodyContainer = styled.div`
    background-color: black;
    text-align: center;
    margin-top: -70px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    h2 {
        color: white;
        padding: 20px;
    }

    p {
        color: white;
        padding: 20px;
    }

    ul {
        color: white;
        list-style-type: none;
        margin-left: -42px;
    }

    li {
        padding-top: 10px;
        padding-bottom: 10px;
    }

`

const FooterContainer = styled.div`
    background-color: black;
    color: white;
    padding-top: 25px;
    padding-bottom: 25px;

    padding-left: 15px;
    padding-right: 15px;

    height: 350px;

    a {
        color: #0000EE;
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

            <BodyContainer>
                <h2> Avon Token is a next generation crypto-currency </h2>

                <p>
                   The recent lanuch of our ERC20 token will be used in future projects under the <strong> <u> AvonDAO </u> </strong>
                </p>

                <p>
                    <strong>
                        Future projects include:
                    </strong>
                </p>

                <ul>
                    <li>AvonNFT Market Place</li>
                    <li>AvonDeFi Protocol</li>
                    <li>AvonInTheKnow Protocol</li>
                </ul>
            </BodyContainer>

            <FooterContainer>
                <p Style="text-align:center;">Token Lanuched Here on Mainnet -> <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>
                <p Style="text-align:center;">Purchase on Uniswap -> <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p>
                {/* <p Style="text-align:center;">See Listed on Uniswap -> <a href="https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p> */}
            </FooterContainer>
        </>
    )
}