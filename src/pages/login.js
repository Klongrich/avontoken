import React, {useState} from "react";
import styled from "styled-components";
import Dashboard from "./dashboard";
import TokenLogo from "../assests/AvonTokenLogo.png";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

const AvonTokenAddress = "0x7e992d8f57223661106c29e519e22a2a9a7bcefb";

// The minimum ABI to get ERC20 Token balance
var ERC_20_ABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
];

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '43b86485d3164682b5d703fd1d39fe1c' // required
      }
    }
}



const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(38, 33, 23, 0.62)"
      },
      secondary: {
        main: "#ffab61",
      },
    },
  });

const Container = styled.div`
    width: 100%;
    height: 850px;

    background: #EE5F0F;
    padding-top: 164px;

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

margin-left: 38%;

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

margin-top: 58px;
margin-bottom: 58px;

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

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);


    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions //required
    });

    async function loadWeb3() {
        if (window.ethereum) {
            const provider = await web3Modal.connect();
            window.web3 = await new Web3(provider);

            await provider.enable()
            await loadWalletData();
            return(true);
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            
            await loadWalletData();
            return(true);
        }
        else {
            const provider = await web3Modal.connect();
            window.web3 = await new Web3(provider);

            await provider.enable()
            await loadWalletData();
            return(true);
        }
    }

    async function get_token_balance(publicKey, tokenAddy) {
        var web3 = window.web3;
        var balance;
        
        const contract = await new web3.eth.Contract(ERC_20_ABI, tokenAddy);

        await contract.methods.balanceOf(publicKey).call(function(error, result){
            var amount = " " + result.toString();
            balance = web3.utils.fromWei(amount, 'ether');
        });       
        return (balance);
    }

    async function loadWalletData() {
        window.web3 = new Web3(window.web3.currentProvider)
        var web3 = window.web3;

        const accounts = await web3.eth.getAccounts();
        const address = { account: accounts[0] }.account;
        const amount_of_at = await get_token_balance(address, AvonTokenAddress)
        
        setLoggedIn(true);
        setWalletAddress(address);
        setATamount(amount_of_at);      
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
                    <Button variant="outlined" color="primary"  onClick={() => loadWeb3()}>
                        <p> Log In </p>
                    </Button>
                </ThemeProvider>

            </Container>
        </>
    )
    } else if (loggedIn) {
        return (
            <>
                <Dashboard balance={ATamount} walletAddress={walletAddress} />
            </>
        )
    }
}