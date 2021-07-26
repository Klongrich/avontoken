import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '43b86485d3164682b5d703fd1d39fe1c' // required
      }
    }
}

const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    padding-left: 20px;
    padding-right: 20px;

    background-color: black;
    color: white;

    text-align: center;

    height: 520px;

`

const LoggedInInfo = styled.div`
    padding-top: 42px;
    background-color: black;
    color: white;

    padding-bottom: 50px;

    p {
        padding-left: 10px;
        padding-right: 10px;
    }
`


const UpdatesContainer = styled.div`
    border 1px solid white;

    line-height: 2;

    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;

    padding-left: 5%;
    padding-right: 5%;

    font-family: sans-serif;




`

const CoinsContainer = styled.div`

    ul {
        list-style-type: circle;
    }

    a {
        padding-left: 40px;
    }

    li {
        padding-top: 10px;
        padding-bottom: 10px;
    }

`


export default function NewsPage () {

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [lessThan100, setLessThan100] = useState(true);
    const [amountTo100, setAmountTo100] = useState(0);

    const [open, setOpen] = useState(false);

    
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

        if (amount_of_at >= 100.00) {
            setLessThan100(false);
        } else {
            setAmountTo100(100.00 - amount_of_at)
        }
        
    }

    const handleClickToOpen = () => {
        setOpen(true);
      };
      
      const handleToClose = () => {
        setOpen(false);
      };

    useEffect(() => {

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
    }, )

    return (
        <>
        <div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Log Out?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please disconnect your meta-mask or connected wallet and reload the page
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
                    <h2 Style="margin-bottom: 30px;"> Must Have At Least 100 AvonTokens To Log In</h2>
                    <h3 Style="margin-bottom: 30px;"> We'll see you all at the moon</h3>
                    
                    <iframe src="https://giphy.com/embed/YtT00PQvwNKuveEudl" 
                            width="100%" 
                            height="305" 
                            frameBorder="0" 
                            class="giphy-embed" allowFullScreen 
                            title="moving logo"/>

            </Container>

            <div Style="background-color:black; height: 500px; text-align:center;">

            <ThemeProvider theme={theme}>
                {loggedIn &&  !lessThan100 &&
                    <Button variant="outlined" color="primary"  onClick={handleClickToOpen}>
                        <p>Log Out</p>
                    </Button>
                }

                {loggedIn && lessThan100 && 
                    <Button variant="outlined" color="primary"  onClick={() => loadWeb3()}>
                        <p>Log In</p>
                    </Button>
                }

                {!loggedIn &&
                    <Button variant="outlined" color="primary"  onClick={() => loadWeb3()}>
                        <p>Log In</p>
                    </Button>
                }
            </ThemeProvider>

                <br /> <br /> <br /> <br />

                {/* <iframe height="250" width="100%" src="https://www.youtube.com/embed/AfnvFnzs91s" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                 </iframe> */}

                 {loggedIn && lessThan100 &&
                    <LoggedInInfo>
                        <p Style="color: white; font-size: 12px;">Wallet Addresss: {walletAddress} </p>
                        <p Style="color: white">Amount Of AT: {ATamount} </p>

                        <p Style="color: white;">
                            Thank you for your purchase of {ATamount} AT!
                        </p>

                        <p>
                            Plz buy {amountTo100} more AT to log in.
                        </p>
                    </LoggedInInfo>
                 }

                {loggedIn &&  !lessThan100 &&               
                    <LoggedInInfo>
                        <p Style="color: white; font-size: 12px;">Wallet Addresss: {walletAddress} </p>
                        <p Style="color: white">Amount Of AT: {ATamount} </p>

                        <p Style="color: white;">
                            Thank you for your purchase of {ATamount} AT!
                        </p>

                        <UpdatesContainer>
                            <h2> Updates </h2>

                            <h3 Style="text-align: left">
                                July 2021 DeFi Coins (stable)
                            </h3>

                            <CoinsContainer>

                            <ul Style="text-align: left;">
                                <li>
                                    $AAVE 
                                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9">Buy</a>      
                                    <a href="https://aave.com/">Website</a>
                                </li>
                                <li>
                                    $CRV 
                                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0xD533a949740bb3306d119CC777fa900bA034cd52">Buy</a> 
                                    <a href="https://curve.fi/">Website</a>
                                </li>
                                <li>
                                    $COMP 
                                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0xc00e94cb662c3520282e6f5717214004a7f26888">Buy</a> 
                                    <a href="https://compound.finance/">Website</a>
                                </li>
                                <li>
                                    $MKR 
                                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2">Buy</a> 
                                    <a href="https://makerdao.com/ ">Website</a>
                                </li>
                            </ul>

                            </CoinsContainer>
                            
                            <p Style="text-align: left;
                                      padding-top: 20px;">*** NOT FINANCIAL ADVICE!</p>

                            <p Style="text-align:left;"> Also note you can interact with each of these dapps through your wallet browser </p>
                  
                          
{/* 
                            <h3 Style="text-align: left">
                               <strong> <u> AvonDeFi </u> </strong>
                            </h3>

                            <p>We hope to have most of the MVP for AvonDeFi launched come the end of October 2021</p>

                            <p>This will be a smart contract protocol that allows users to take out collateralized loans against their ETH. Essentially
                                you can stake $100 of ETH and the system will give you back $50 (or 50%) as a loan. This loan is then charged a very low
                                interest rate of 1.42%. If the price of ETH drops more than 50% from original staking price we liquidate the loan
                                and sell the debt on the open market.
                            </p>

                            <p>
                                As holders of AvonTokens, you will be able to stake your tokens in the DAO contract and earn a percentage of interest
                                generated from the loans. You will also have access to APY and Interest from other fields in the future.
                            </p>

                            <br /> <br />
                            <h3 Style="text-align: left">
                               <strong> <u> AvonDAO</u> </strong>
                            </h3>
                               <p>
                                    This will serve as a Decentralized Autonomous Organization for products built and organized under the AvonDAO. 
                                    For now it will be powered by the Ethereum Block-chain under multiple solidity contracts. As holders of
                                    AvonToken you will have the power to create proposals and vote on proposals that change / alter the tech
                                    infrastructure being built under the AvonDAO. This will include all present and future projects ( NFTmarket, DEX, etc ... )
                                </p>
                                <br />
                                <p>
                                    Please check back to this page for more updates (:
                                </p> */}
                            
                            <br /> 
                            <br />
                        </UpdatesContainer> 
                    </LoggedInInfo>
                }
            </div>

        </>
    )
}