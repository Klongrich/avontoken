import React, {useState} from "react";
import styled from "styled-components";

import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/bootstrap/Github";
import {FacebookSquare} from "@styled-icons/boxicons-logos/FacebookSquare";

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent"

import TokenLogo from "../assests/AvonTokenLogo.png";


const theme = createTheme({
    palette: {
      primary: {
        main: "#F3BD02"
      },
      secondary: {
        main: "#ffab61",
      },
    },
  });

const Container = styled.div`
    background-color: black;
    height: 100%;

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

const LinksContainer = styled.div`
    background-color: black;
    color: white;
    padding-top: 35px;
    padding-bottom: 25px;

    padding-left: 25px;
    padding-right: 25px;

    word-wrap: break-word;

    a {
        color: #0000EE;
    }
`

const SocialIconsContainer = styled.div`
    text-align: center;
    padding-top: 58px;
    padding-bottom: 50px;

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

const TeamContainer = styled.div`
    color: white;
    border-top: 1px solid white;
    padding-left: 25px;
    padding-right: 25px;

    height: 575px;

    h3 {
        padding-left: 10px;
        padding-right: 10px;
    }
`

const Box1 = styled.div`
    border: 1px solid white;
    :hover {
        color: red;
    }
`

const Box2 = styled.div`
    border: 1px solid white;
    :hover {
        color: orange;
    }
`

const Box3 = styled.div`
    border: 1px solid white;
    :hover {
        color: blue;
    }
`


export default function Homepage() {

    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
      };
      
      const handleToClose = () => {
        setOpen(false);
      };

    return (
        <>

<div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Join Team"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            All posistion currently full, please check back again at a different time.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToClose} 
                            color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>
            <div Style="background-color: black; height: 100%">

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
                    Launch App 
                </LanuchApp>
                </a>
                <br /> <br />
            </BodyContainer>

            <LinksContainer>
                <p Style="text-align:center;">Token Lanuched Here on Mainnet ->  <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>
                <p Style="text-align:center;">Purchase on Uniswap -> <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p>
                 {/* <p Style="text-align:center;">See Listed on Uniswap -> <a href="https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://info.uniswap.org/#/tokens/0x7e992d8f57223661106c29e519e22a2a9a7bcefb</a> </p> */}
            </LinksContainer>

            <TeamContainer>
                <h2 Style="margin-bottom: 25px;"> Avon Token Team </h2>

                <div Style="border: 1px solid white; text-align: center;">
                    
                    <Box1>
                        <h3>Design Lead / Head of Instagram</h3>
                        <h4> ( $100k+ / year ) </h4>
                        <p> - Blake Rose</p>
                    </Box1>

                    <Box2>
                        <h3>Head of Facebook</h3>
                        <h4> ( $100k+ / year ) </h4>
                        <p> - Austin Seitz</p>
                    </Box2>

                    <Box3>
                        <h3>Head of Twitter</h3>
                        <h4> ( $100k / year )</h4>
                        <p> - Adam Kirresh</p>
                    </Box3>
                </div>
                <br /> <br />

                <div Style="text-align:center">
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="primary"  onClick={() => handleClickToOpen()}>
                        <p>Join Team</p>
                    </Button>
                </ThemeProvider>
                </div>

                {/* <p Style="padding-top: 10px; padding-bottom: 10px; text-decoration: underline"> Join Team </p> */}

            </TeamContainer>
            
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
            
            </div>
        </>
    )
}