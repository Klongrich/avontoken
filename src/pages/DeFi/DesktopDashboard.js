import React from 'react'
import styled from "styled-components";

import TokenLogo from "../../assests/ATlogo.png";
import UserSignIn from "../../assests/UserSignIn.jpeg";


import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "#d44d00"
      },
      secondary: {
        main: "#ffab61",
      },
    },
  });


const MiddleLogo = styled.div`

width: 250px;
height: 250px;

background: url(${TokenLogo});
border: 5px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 3));
border-radius: 1200px;

background-size: 100%;

margin-left: 40%;
margin-top: -7%;

`

const Container = styled.div`
    background-color: #F9F9F9;
    height: 1750px;

    margin-top: -40px;
`

const HeaderContainer = styled.div`
    border-bottom: 2px solid black;
    height: 100px;

    h3 {
        font-family: NovaMono;
        font-style: normal;
        font-weight: normal;
        font-size: 42px;
        line-height: 134px;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    li {
        font-family: Nova Square;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 77px;
        color: #000000;

        float: left;
        padding-left: 30px;
        margin-top: -70px;

    }

    ul {
        list-style-type: none;
        margin-left: 30.5%;
    }

    p {
        font-family: Nova Square;
font-size: 20px;
font-style: normal;
font-weight: 400;

letter-spacing: 0em;

    }
`

const MiddleContainer = styled.div`

    h2 {
        font-family: Nova Square;
font-style: normal;
font-weight: normal;
font-size: 42px;
line-height: 174px;
text-align: center;

    }

`
const Circle = styled.div`
width: 15px;
height: 13.99px;

background: #C4C4C4;
border-radius: 21px;
transform: matrix(1, 0, 0, 1, 0, 0);

margin-left: 83%;
margin-top: -37px;
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


const IconContainer = styled.div`

width: 50px;
height: 51px;

background: url(${UserSignIn});
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 24px;

background-size: 100% 100%;

margin-left: 93%;
margin-top: -47px;


`

export default function DessktopDashbaord () {

    return (
        <>
            <Container>
                <HeaderContainer>
                    <h3 Style="padding-left: 25px;"> AvonToken </h3>

                    <p Style="margin-left: 85%;
                             margin-top: -120px;"> 100 AT </p>
                    <ul>
                        <li>Messaging</li>
                        <li>Settings</li>
                        <li>View My Loans</li>
                    </ul>

                    <Circle>
                        <Line />
                        <VerticalLine />
                    </Circle>

                    <IconContainer />

                </HeaderContainer>

                <MiddleContainer>
                    <h2>WELCOME</h2>
                    <MiddleLogo />
                </MiddleContainer>

                <div Style="padding-top: 120px; margin-left: 40px;">
                <ThemeProvider theme={theme}>

                    <div Style="margin-left: 10%;">
                    <Button style={{minWidth: '250px', minHeight: '38px'}} variant="outlined" color="primary">
                        <p> GET LOAN </p>
                    </Button>
                    </div>

                    <div Style="margin-top: -64px;
                                margin-left: 38%">
                    <Button style={{minWidth: '250px', minHeight: '50px'}} variant="outlined" color="primary">
                        <p> STAKE AT </p>
                    </Button>
                    </div>

                    <div Style="margin-top: -64px;
                                margin-left: 68%"> 
                    <Button style={{minWidth: '250px', minHeight: '50px'}} variant="outlined" color="primary">
                        <p> ADD LIQUIDITY </p>
                    </Button>
                    </div>
                </ThemeProvider>
                </div>
            </Container>

        </>
    )
}