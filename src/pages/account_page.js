import React from "react";
import styled from "styled-components";

import UserSignIn from "../assests/UserSignIn.jpeg";

const Container = styled.div`

    margin-top: -20px;
    padding-top: 20px;

    background-color: #EE5F0F;
    height: 900px;

    padding-left: 20px;
    padding-right: 20px;

    text-align: center;

    h4 {
        font-size: 12px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: white;
        border-radius: 15px;


    }
`

const IconContainer = styled.div`

width: 140px;
height: 142px;

background: url(${UserSignIn});
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 24px;

background-size: 100% 100%;

margin-left: 31%;
margin-bottom: 30px;

`

const Button = styled.div`

width: 260px;
height: 42px;

background: #C4C4C4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

p {
    padding-top: 12px;

    font-family: Nova Square;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 16px;
text-align: center;
}

margin-left: 15%;
margin-top: 42px;

`

export default function AccountPage ({balance, walletAddress}) {

    var LinkAddress = "https://etherscan.io/address/" + walletAddress;

    return (
        <>
            <Container>
                <div Style="">
                    <h3 Style="font-size: 22px;"> {balance} AT</h3>
                    <IconContainer />

                    <a href={LinkAddress}>
                        <h4> {walletAddress} </h4>
                    </a>
                </div>

                <Button>
                    <p>Invite Friends</p>
                </Button>

                <Button>
                    <p> Share </p>
                </Button>

                <Button>
                    <p>Update Payment Method</p>
                </Button>
            </Container>
        </>
    )
}