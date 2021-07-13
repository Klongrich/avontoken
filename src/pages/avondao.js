import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: black;
    color: white;

    padding: 25px;
    height: 1200px;

    a {
        color:#0000EE;
    }
`

export default function AvonDao () {

    return (
        <> 
            <Container>
                
                <div Style="border-bottom: 1px solid white;">
                    <h2> Avon DAO  </h2>
                </div>
                <p Style="padding-top: 15px;">
                    All DeFi Projects In Once Place
                </p>

                <p>
                    Sick of seeing random tokens blow up for no reason? 
                </p>

                <p>
                    Never seem to get in on them? 
                </p>

                <p> 
                    Well congrats, you have found AvonToken! This page won't be up for much longer 
                    however I invite you to join us with our token $AT.
                </p>

                <p Style="text-align: center; padding-top: 25px; padding-bottom: 25px;">
                    Purchase Here: -> <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a>
                </p>

                <p>
                    We hope to see all of you on the moon. Remeber this is not financial advice.
                    All investing comes with risk, with that said that doesn't mean this can't or
                    won't go up 100x (: 
                </p>
            </Container>
        </>
    )
}