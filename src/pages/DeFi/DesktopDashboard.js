import React from 'react'
import styled from "styled-components";

import TokenLogo from "../../assests/ATlogo.png";

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
        font-size: 28px;
        line-height: 77px;
        color: #000000;

        float: left;
        padding-left: 30px;
        margin-top: -70px;

    }

    ul {
        list-style-type: none;
        margin-left: 30%;
        margin-top: -70px;
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


export default function DessktopDashbaord () {

    return (
        <>
            <Container>
                <HeaderContainer>
                    <h3 Style="padding-left: 25px;"> AvonToken </h3>

                    <ul>
                        <li>Messaging</li>
                        <li>Settings</li>
                        <li>View My Loans</li>
                    </ul>
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