import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import Dashboard from "./dashboard";
import DesktopDashboard from "./DesktopDashboard";
import TokenLogo from "../../assests/AvonTokenLogo.png";

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

const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions //required
});

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

    img {
        border: 1px solid #000000;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 15px;
    }
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
    const [showDialog, setShowDialog] = useState(false);

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);
    const [ethAmount, setEthAmount] = useState("");
    const [isMobile, setIsMobile] = useState(false);

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

    const loadWalletData = useCallback(async () => {
        window.web3 = new Web3(window.web3.currentProvider)
        var web3 = window.web3;

        const accounts = await web3.eth.getAccounts();
        const address = { account: accounts[0] }.account;
        const amount_of_at = await get_token_balance(address, AvonTokenAddress);
        const EthAmount = await web3.eth.getBalance(address);

        // console.log("Eth Amount: " + EthAmount / 1000000000000000000)
        
        setLoggedIn(true);
        setWalletAddress(address);
        setATamount(amount_of_at); 
        setEthAmount(EthAmount / 1000000000000000000)     
    }, [])

    const loadWeb3 = useCallback(async () => {
        if (window.ethereum) {
            
            console.log("0");

            const provider = await web3Modal.connect();
            window.web3 = await new Web3(provider);

            await provider.enable()
            await loadWalletData();
            return(true);
        }
        else if (window.web3) {
            
            console.log("1");
            
            window.web3 = new Web3(window.web3.currentProvider)
            
            await loadWalletData();
            return(true);
        }
        else {
            if (!isMobile) {
                setShowDialog(true);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);

                const provider = await web3Modal.connect();
                window.web3 = await new Web3(provider);
    
                await provider.enable()
                await loadWalletData();
            }

            return(true);
        }
    }, [loadWalletData, isMobile]) 

    useEffect(() => {
        if (window.innerWidth > 999) {
            setIsMobile(false)
        } else {
            setIsMobile(true);
        }
        
        if (window.web3) {
            if (window.web3.currentProvider.selectedAddress != null) {
                window.web3 = new Web3(window.web3.currentProvider)
                loadWalletData();
            } else {
                web3Modal.clearCachedProvider();
            }
        } else {
           loadWeb3();
       }

    }, [loadWalletData, loadWeb3]);

    if (!loggedIn) {
    return (
        <>
            <Container>
    
                <img src={TokenLogo}
                    height="125px"
                    width="125px" 
                    alt="" 
                />

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
    } else if (loggedIn && isMobile) {
        return (
            <>
                <Dashboard balance={ATamount} 
                            walletAddress={walletAddress}
                            EthAmount={ethAmount}
                            />
            </>
        )
    } else if (loggedIn && !isMobile) {
        return (
            <>
                <DesktopDashboard isLoggedIn={showDialog} />

            </>
        )
    }
}