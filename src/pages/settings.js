import React from "react";
import styled from "styled-components";

import {Settings2Outline} from "@styled-icons/evaicons-outline/Settings2Outline";


const Container = styled.div`
    background-color: #EE5F0F;
    margin-top: -44px;

    height: 900px;
`

const TopText = styled.h2`

padding-top: 20px;
font-family: Nova Square;
font-style: normal;
font-weight: normal;
font-size: 38px;
line-height: 29px;
text-align: center;

color: #514C43;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding-right: 8px;
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

margin-left: 19%;
margin-top: 68px;

`

export default function Settings () {

    return (
        <>
            <Container>
                <TopText> Settings </TopText>

                <div Style="margin-top: -65px; 
                            text-align: right; 
                            padding-right: 85px;"
                            >
                    <Settings2Outline size="42" color="#514C43" />
                </div>

                <Button>
                    <p> Change User Name </p>
                </Button>

                <Button>
                    <p> Change Password </p>
                </Button>

                <Button>
                    <p> View My Loans </p>
                </Button>

                <Button>
                    <p> Log Out </p>
                </Button>
            </Container>
        </>
    )
}