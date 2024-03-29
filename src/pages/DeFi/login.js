import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import Dashboard from "./dashboard";
import DesktopDashboard from "./Desktop/DesktopDashboard";
import TokenLogo from "../../assests/AvonTokenLogo.png";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

const AvonTokenAddress = "0x7e992d8f57223661106c29e519e22a2a9a7bcefb";
// const etherscanURL = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=C6QXCW6BIWZJ9SCG986U1QC5W2CFI9CARA"

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

    const [networkID, setNetworkID] = useState("0");
    const [loggedIn, setLoggedIn] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);
    const [ethAmount, setEthAmount] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    // const [ethPrice, setEthPrice] = useState(0);

    // function getEthPrice() {
    //     fetch(etherscanURL ,{
    //         method: 'GET',
    //         headers: {
    //           Accept: 'application/json',
    //             "Content-Type": "application/json"
    //         },
    //         },
    //     ).then(response => {
    //         if (response.ok) {
    //           response.json().then(json => { 
    //             console.log("ETH price: " + json.result.ethusd);
    //             setEthPrice(json.result.ethusd);
    //           });
    //         }
    //       }).catch(error => alert("Current ETH price can not load, make sure ad-blocker is turned off ..."));
    // }

    async function CheckNetworkVersion(id){
        if (id === "1") {
            console.log("mainnet");
            setNetworkID(id);
        }
        else if (id === "4") {
            console.log("rinkeby");
        }
        else if (id === "3") {
            console.log("Ropsten");
        }
        else if (id === "42") {
            console.log("Kovan");
            setNetworkID(id);
        } else {
            console.log ("unknown networkID")
        }

    }

    async function setATBalance(contract, address) {
        await contract.methods.balanceOf(address).call(function(error, result){
            var temp = result / 1000000000000000000;
            var amount = " " + temp.toString();
            setATamount(amount);
        });    
    }

    const ConnectWeb3Wallet = useCallback(async() => {
        const provider = await web3Modal.connect();
        const web3 = await new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        const address = { account: accounts[0] }.account;
        const contract = await new web3.eth.Contract(ERC_20_ABI, AvonTokenAddress);

        provider.on("accountsChanged", (accounts) => {
            setWalletAddress(accounts[0]);
            setATBalance(contract, accounts[0]);
            console.log(accounts[0]);
        });
          
        //Switch Dialogs and alerts to this section
        provider.on("chainChanged", (chainId) => {
            console.log(chainId);
            if (chainId === '0x2a') {
                console.log("kovan test net");
                setATamount(42);
            }
            if (chainId === '0x1') {
                console.log("Main Network Switched");
                setATBalance(contract, address);
            }
            if (chainId === '0x3') {
                alert("Ropsten Network Switch Detected, Plz switch to Kovan")
            }
            if (chainId === '0x4') {
                alert("Rinkeby Network Switch Detected, Plz switch to Kovan")
            }
        });
          
        provider.on("disconnect", (code, reason) => {
            console.log(code, reason);
        });

        setWalletAddress(address)
        await CheckNetworkVersion(web3.currentProvider.networkVersion);
  
        if (address && web3.currentProvider.networkVersion === "1") {
          web3.eth.getBalance(address, function (error, wei) {
            if (!error) {
              var balance = web3.utils.fromWei(wei, "ether");
              console.log(balance.substring(0, 4));
              setEthAmount(balance.substring(0,4));
            }
            setATBalance(contract, address);
          });
          setShowDialog(true);
        }
        
        if (address && web3.currentProvider.networkVersion === "42"){
            console.log("hello");
        }

        setLoggedIn(true);
    }, []);

    useEffect(() => {
        if (window.innerWidth > 999) {
            setIsMobile(false)
        } else {
            setIsMobile(true);
        }
        if (!window.ethereum){
            console.log("no wallet detected");
            setShowDialog(true);
            setLoggedIn(true);
        } else {
            if (window.web3){
                console.log("Web3 wallet but not connected!")
            }
            ConnectWeb3Wallet();
        }
        // getEthPrice();
    }, [ConnectWeb3Wallet]);

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
                    <Button variant="outlined" color="primary"  onClick={() => ConnectWeb3Wallet()}>
                        <p> Log In </p>
                    </Button>
                </ThemeProvider>

            </Container>
        </>
    )
    } else if (loggedIn && isMobile) {
        return (
            <>
                <Dashboard  balance={ATamount} 
                            walletAddress={walletAddress}
                            EthAmount={ethAmount}
                            connected={showDialog}
                            networkID={networkID}
                            EthPrice={730.42}
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