import React, {useState} from 'react'
import styled from "styled-components";

import TokenLogo from "../../../assests/ATlogo.png";
import UserSignIn from "../../../assests/UserSignIn.jpeg";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";


import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import GetLoan from "./getLoan";
import Stake from "./stake";
import ClaimRewards from "./claimRewards";


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

margin-left: 42.5%;
margin-top: -4%;

`

const Container = styled.div`
background-color: #F0EAEA;
    height: 1250px;

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

        :hover {
            cursor: pointer;
            color: #FF7301;
        }

    }

    ul {
        list-style-type: none;
        margin-left: 35%;
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
    padding-top: 0px;

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

const VerticalLineHeader = styled.div`
position: absolute;
width: 8.6px;
height: 0px;

border: 1px solid #000000;
transform: matrix(0, 2, -1, 0, 0, 0);

margin-top: 39px;
margin-left: -21px;
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

export default function DesktopDashbaord ( {isLoggedIn}) {

    const [open, setOpen] = useState(isLoggedIn);

    const [getLoan, setGetLoan] = useState(false);
    const [stake, setStake] = useState(false);
    const [claimRewards, setClaimRewards] = useState(false);

    function handleToClose() {
        setOpen(false);
    }


    return (
        <>

        <div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Wallet Not Found!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We have detected that your browser does not have a web3 wallet!
                            We reccomened trying meta-mask or another wallet-connect app.
                            <br /> <br />
                            <a href="https://metamask.io/download">
                                Download Metamask
                            </a>
                            <br /> <br />
                            <a href="https://registry.walletconnect.org/wallets">
                                See List of Wallet-Connect Options
                            </a>
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


            <Container>
                <HeaderContainer>
                    <h3 Style="padding-left: 25px;"> AvonDeFi </h3>

                    <p Style="margin-left: 85%;
                             margin-top: -120px;"> 100 AT </p>
                    <ul>
                        <li>Messaging</li>
                        <li> <VerticalLineHeader /> Settings</li>
                        <li> <VerticalLineHeader /> View My Loans</li>
                    </ul>

                    <Circle>
                        <Line />
                        <VerticalLine />
                    </Circle>

                    <IconContainer />
                </HeaderContainer>


                {!getLoan && !stake && !claimRewards &&
                <>
                <MiddleContainer>
                    <h2> WELCOME</h2>
                    <MiddleLogo>
                        
                    </MiddleLogo>
                </MiddleContainer>
                <div Style="padding-top: 200px; margin-left: 40px;">
                <ThemeProvider theme={theme}>

                    <div Style="margin-left: 11%; margin-top: -42px;">
                    <Button style={{minWidth: '250px', minHeight: '38px'}}
                            variant="outlined" 
                            color="primary"
                            onClick={() => setGetLoan(true)}>
                        <p> GET LOAN </p>
                    </Button>
                    </div>

                    <div Style="margin-top: -64px;
                                margin-left: 41%">
                    <Button style={{minWidth: '250px', minHeight: '50px'}} 
                            variant="outlined" 
                            color="primary"
                            onClick={() => setStake(true)}>
                        <p> STAKE AT </p>
                    </Button>
                    </div>

                    <div Style="margin-top: -64px;
                                margin-left: 71%"> 
                    <Button style={{minWidth: '250px', minHeight: '50px'}} 
                            variant="outlined" 
                            color="primary"
                            onClick={() => setClaimRewards(true)}>
                        <p> CLAIM REWARDS </p>
                    </Button>
                    </div>
                </ThemeProvider>
                </div>
                </>
                }

                {getLoan && !stake && !claimRewards &&
                    <>
                        <div Style="text-align: left; 
                            padding-top: 20px;
                            padding-left: 40px;
                            background-color: #F0EAEA;">
                            <ArrowBack size="50" onClick={() => setGetLoan(false)} /> 
                        </div>
                        <GetLoan />

                    </>
                }

                {!getLoan && stake && !claimRewards &&
                <>
                    <div Style="text-align: left; 
                                padding-top: 20px;
                                padding-left: 40px;
                                background-color: #F0EAEA;">
                                <ArrowBack size="50" onClick={() => setStake(false)} /> 
                    </div>
                    <Stake />
                
                </>
                }

                {!getLoan && !stake && claimRewards &&
                    <>
                    <div Style="text-align: left; 
                                padding-top: 20px;
                                padding-left: 40px;
                                background-color: #F0EAEA;">
                                <ArrowBack size="50" onClick={() => setClaimRewards(false)} /> 
                    </div>
                    <ClaimRewards />
                    </>
                }

            </Container>

        </>
    )
}