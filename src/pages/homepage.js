import React from "react";
import styled from "styled-components";

import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/bootstrap/Github";
import {FacebookSquare} from "@styled-icons/boxicons-logos/FacebookSquare";

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

    a {
        color: white;
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

const SocialIconsContainer = styled.div`
    text-align: center;
    padding-top: 28px;

    a {
        margin-left: 15px;
        margin-right: 15px;
    }


`

const LanuchApp = styled.button`
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
                   The recent launch of our ERC20 token will be used in future projects under the <strong> <u> <a href="/avondao"> AvonDAO </a> </u> </strong>
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

                <a href="/app">
                <LanuchApp>
                    Lanuch App 
                </LanuchApp>
                </a>
                <br /> <br />
            </BodyContainer>

            <FooterContainer>
                <p Style="text-align:center;">Token Lanuched Here on Mainnet -> <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>
                <p Style="text-align:center;">Purchase on Uniswap -> <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p>
                
                {/* <p Style="text-align:center;">See Listed on Uniswap -> <a href="https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p> */}
            
                <SocialIconsContainer>
                    <a href="https://twitter.com/avontoken">
                        <Twitter size="42" color="#1DA1F2" />
                    </a>

                    <a href="https://www.instagram.com/avontoken/">
                        <Instagram size="42" color="white" />
                    </a>

                    <a href="https://github.com/avontoken">
                        <Github size="42" color="#333" />
                    </a>

                    <a href="https://www.facebook.com/Avon-Token-110118631342569">
                        <FacebookSquare size="42" color="#3b5998" />
                    </a>
                </SocialIconsContainer>
            </FooterContainer>
        </>
    )
}