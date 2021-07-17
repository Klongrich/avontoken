import React, {useState} from "react";
import styled from "styled-components";
import Dashboard from "./dashboard";
import TokenLogo from "../assests/AvonTokenLogo.png";

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#FF7500"
      },
      secondary: {
        main: "#ffab61",
      },
    },
  });

const Container = styled.div`
    width: 100%;
    height: 850px;

    background: rgba(38, 33, 23, 0.62);
    padding-top: 200px;

    text-align: center;
`

const LogoContainer = styled.div`

width: 96px;
height: 98px;

background: url(${TokenLogo});
border: 1px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 15px;

background-size: 100% 100%;

margin-left: 36%;



`

const AvonTokenText = styled.h3`

font-family: NovaMono;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 33px;
text-align: center;

color: #000000;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin-top: 18px;
margin-bottom: 20px;

`

// const LogInButton = styled.div`
// position: absolute;
// width: 149px;
// height: 44px;

// background: #FB6C1C;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 20px;

// margin-left: 31%;
// margin-top: -19px;

// p {
//     font-family: Nova Square;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 18px;
//     line-height: 22px;
//     text-align: center;

//     color: #000000;

//     margin-top: 11px;
// }

// `

export default function LogIn () {

    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogIn() {
        setLoggedIn(true);
    }

    if (!loggedIn) {
    return (
        <>
            <Container>
                <LogoContainer />

                <AvonTokenText>
                    AvonToken
                </AvonTokenText>

                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="primary"  onClick={() => handleLogIn()}>
                        <p> Log In </p>
                    </Button>
                </ThemeProvider>

            </Container>
        </>
    )
    } else if (loggedIn) {
        return (
            <>
                <Dashboard balance="100" />
            </>
        )
    }
}