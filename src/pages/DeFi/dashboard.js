import React, {useState, useEffect} from "react";
import styled from "styled-components";

import AccountPage from "./account_page";
import SettingsPage from "./settings";
import MessagePage from "./messageCenter";
import StakePage from "./stake";
import ClaimRewards from './claimrewards';

import GetLoanPage from "./getLoan";

import TokenLogo from "../../assests/AvonTokenLogo.png";

import { User } from "@styled-icons/boxicons-regular/User";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Message } from "@styled-icons/boxicons-regular/Message";
import {Settings2Outline} from "@styled-icons/evaicons-outline/Settings2Outline";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import MUIButton from "@material-ui/core/Button";

import MetamaskIcon from "../../assests/metamaskLogo.png";
import TrustwalletIcon from "../../assests/trustwalletLogo.png";

// import WalletconnectIcon from "../../assests/walletconnectLogo.png";

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


const Container = styled.div`
    background-color: #F0EAEA;

    height: 900px;
    padding: 10px;

    h4 {
        background-color: white;
        border-radius: 15px;
        width: 250px;
        padding: 20px;
        padding-bottom: 40px;
    }
`

const Button = styled.div`
    width: 228px;
    height: 65px;

    background: #FB6C1C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    border-radius: 18px;

    margin-top: 70px;
    margin-bottom: 50px;    
    margin-left: 63px;

    p {
        font-family: Nova Square;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 22px;
        text-align: center;

        color: #000000;
        padding-top: 22px;
    }
`

const BottomButton = styled.div`
width: 60px;
height: 54px;

background: #FB6C1C;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

float: left;
margin-left: 44px;
margin-top: 35px;


text-align: center;

`

const Circle = styled.div`
width: 15px;
height: 13.99px;

background: #C4C4C4;
border-radius: 21px;
transform: matrix(1, 0, 0, 1, 0, 0);

margin-top: -53px;
margin-left: 21px;
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

const CircleLogo = styled.div`
width: 52px;
height: 51px;

background-image: url(${TokenLogo});
background-size: 100% 100%;
border: 1px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 25px;

margin-left: 85%;
margin-top: -55px;
`

export default function Dashboard({
    balance, 
    walletAddress, 
    EthAmount, 
    EthPrice, 
    connected, 
    networkID
}){
    const [showAccount, setShowAccount] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showGetLoan, setShowGetLoan] = useState(false);
    const [showStakePage, setShowStakePage] = useState(false);
    const [showClaimRewards, setShowClaimRewards] = useState(false);

    const [open, setOpen] = useState(connected);

    function handleToClose() {
        setOpen(false);
    }

    function handleShowAccount () {
        setShowAccount(true);
    }

    function handleShowenAccount() {
        setShowAccount(false);
    }

    function handleShowSettings () {
        setShowSettings(true);
    }

    function handleShowenSettings () {
        setShowSettings(false);
    }

    function handleShowMessages () {
        setShowMessages(true);
    }

    function handleShowenMessages() {
        setShowMessages(false);
    }

    function handleGetLoan() {
        setShowGetLoan(true);
    }

    function handleGotLoan() {
        setShowGetLoan(false);
    }

    function handleShowStakePage () {
        setShowStakePage(true);
    }

    function handleShowenStakePage () {
        setShowStakePage(false);
    }

    function handleShowClaimRewards () {
        setShowClaimRewards(true);
    }

    function handleShowenClaimRewards () {
        setShowClaimRewards(false);
    }

    useEffect(() => {
        // Bug when using {connected} && connected when passing it as a parameter above
        console.log("showDialog: connected " + connected);
        console.log("showDialog: open " + open);
        console.log(open);
        console.log("networkID: " + networkID);
    })
    
    if (!showAccount && !showSettings && !showMessages && !showGetLoan  && !showStakePage && !showClaimRewards) {
    return (
        <>
        <div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                {networkID === "0" && <> 
                    <DialogTitle>{"Wallet Not Found!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We have detected that your browser does not have a web3 wallet!
                            We reccomened trying Metamask, Trust Wallet, or another Wallet-Connect app.
                            <br /> <br />
                            <a href="https://metamask.io/download">
                                Download Metamask
                                <img  Style="margin-left: 51px;
                                        margin-bottom: -8px;
                                        margin-top: 10px;"
                                      src={MetamaskIcon} alt='' height="30" width="30" />
                            </a>

                            <br /> <br />
                            <a href="https://trustwallet.com/download-page/">
                                Download Trust Wallet 
                                <img Style="margin-left: 31px;
                                            margin-bottom: -17px;
                                            margin-top: 2px;" 
                                    src={TrustwalletIcon} alt='' height="45" width="45" />
                            </a>
                            <br /> <br /> <br /> 
                            <a href="https://registry.walletconnect.org/wallets">
                                See List of Wallet-Connect Options
                            </a> 
                            <br /> <br />
                        </DialogContentText>
                    </DialogContent>
                    </>}

                    {networkID === "1" && <> 
                    <DialogTitle>{"Main Network Detected!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We have detected that your web3 wallet is currently connected to: 
                            <p Style="color: #05B09C; text-align: center">  Main Network  </p>
                          
                           <p> 
                            Please Switch Wallet To ---> 
                               
                            <p Style="color: #6534C9; text-align: center;"> Kovan Test Network </p> 
                                                    
                            </p>
                            
                            For testing the dapp until further notice.                             
                            <br /> <br /> <br />
                            Thank You!
                        </DialogContentText>
                    </DialogContent>
                    </>}
                    <DialogActions>
                        <MUIButton onClick={handleToClose} 
                            color="primary" autoFocus>
                            Close
                        </MUIButton>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>

            <Container>
                <h4 Style="font-family:Nova Square; font-size: 18px;"> {balance} AT </h4>
                
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb">

                <Circle>
                    <Line></Line>
                    <VerticalLine></VerticalLine>
                </Circle>

                </a>

                <CircleLogo />

                <Button onClick={() => handleGetLoan()}> 
                    <p> Get Loan </p>
                </Button>

                <Button onClick={() => handleShowStakePage()}>
                    <p> Stake AT </p>
                </Button>

                <Button onClick={() => handleShowClaimRewards()}>
                    <p>Claim Rewards</p>
                </Button>

                <BottomButton onClick={() => handleShowAccount()}>
                    <div Style="padding-top: 10px;">
                        <User size="35" />
                    </div>
                </BottomButton>

                <BottomButton onClick={() => handleShowMessages()}>
                    <div Style="padding-top: 10px;">
                        <Message size="35" />
                    </div>
                </BottomButton>

                <BottomButton onClick={() => handleShowSettings()}>
                    <div Style="padding-top: 10px;">
                        <Settings2Outline size="35" />
                    </div>
                </BottomButton>
            </Container>
        </>
    )
    } else if (showAccount) {

        return(
            <>
                <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #EE5F0F;
                            border-radius: 15px;">
                    <ArrowBack size="50" onClick={() => handleShowenAccount()} /> 
                </div>
                
                <AccountPage balance={balance} walletAddress={walletAddress}x/>
            </>
        )
    } else if (showSettings) {
        
        return(
            <>
                <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #EE5F0F;
                            border-radius: 15px;">
                <ArrowBack size="50" onClick={() => handleShowenSettings()} /> 
                </div>

                <SettingsPage />
            </>
        )
    } else if (showMessages) {

        return (
            <>
                <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #74716B;">
                <ArrowBack size="50" onClick={() => handleShowenMessages()} /> 
                </div>

            <MessagePage walletAddress={walletAddress} />
            
            </>
        )
    } else if (showGetLoan) {

        return (
            <>
            
            <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #F0EAEA;">
            <ArrowBack size="50" onClick={() => handleGotLoan()} /> 
            </div>

                <GetLoanPage walletAddress={walletAddress} 
                             EthPrice={EthPrice}
                             EthAmount={EthAmount}/>
            </>
        )
    } else if (showStakePage) {

        return (
            <>
            <div Style="text-align: left; 
                            padding-top: 10px;
                            background-color: #F0EAEA;">
            <ArrowBack size="50" onClick={() => handleShowenStakePage()} /> 
            </div>

                <StakePage />

            </>
        )
    } else if (showClaimRewards) {

        return (
            <>
            <div Style="text-align: left; 
                        padding-top: 10px;
                        background-color: #F0EAEA;"
                        >

            <ArrowBack size="50" onClick={() => handleShowenClaimRewards()} />
            </div>
                <ClaimRewards />
            </>
        )
    }
}