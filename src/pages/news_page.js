import React, {useState, useEffect} from "react";
import styled from "styled-components";

import TokenLogo from "../assests/AvonTokenLogo.png";
import RocketVideo from "../assests/rocket.gif";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

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

const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: black;
    color: white;

    text-align: center;

    height: 750px;

    background-image: url(${RocketVideo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const LogIn = styled.button`
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
    margin-bottom: 55px;

    box-shadow: 1px 2px #F7BE00;
`

const LoggedInInfo = styled.div`
    padding-top: 42px;
    background-color: black;
    color: white;

    padding-bottom: 50px;
`

const TokenInfoContainer = styled.div`
    border 1px solid white;

    line-height: 2;

    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;

    padding-left: 5%;
    padding-right: 5%;

    font-family: sans-serif;

    :hover {
        background-color: purple;
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

    :hover {
        background-color: #d2c01e;
    }
`

const ClosingInfoContainer = styled.div`
    line-height: 2;

    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;

    padding-left: 5%;
    padding-right: 5%;

    font-family: sans-serif;
`

export default function NewsPage () {

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);


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
        
        setWalletAddress(address);
        setATamount(amount_of_at);
        setLoggedIn(true);
    }

    useEffect(() => {

        if (window.web3) {
            if (window.web3.currentProvider.selectedAddress != null) {
                window.web3 = new Web3(window.web3.currentProvider)
                loadWalletData();
            } 
        } else {
           loadWeb3();
       }
    }, )

    return (
        <>
            <Container>
                    <h2 Style="margin-bottom: 50px;"> Must Have At Least 100 AvonTokens To Log In</h2>
                    <h3 Style="margin-bottom: 50px;"> We'll see you all at the moon</h3>
                    <img src={TokenLogo} height="342" alt="" />
            </Container>

            <div Style="background-color:black; height: 500px; text-align:center;">
                <LogIn onClick={() => loadWeb3()}>
                   {loggedIn &&  <p> Log Out </p> }
                   {!loggedIn && <p>Log In </p>}
                </LogIn>

                <br /> <br />

                <iframe height="250" width="350" src="https://www.youtube.com/embed/AfnvFnzs91s" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                 </iframe>

                {loggedIn &&                 
                    <LoggedInInfo>
                        <p Style="color: white; font-size: 12px;">Wallet Addresss: {walletAddress} </p>
                        <p Style="color: white">Amount Of AT: {ATamount} </p>

                        <p Style="color: white;">
                            Thank your for your purchase of {ATamount} AT!
                        </p>

                        {/* <ClosingInfoContainer>
                            <h2>
                               <strong> <u> Notes (July 14th, 2021) </u> </strong>
                            </h2>
                            <p>
                                Most people with tech like this go to the richest people they can find and beg for money to find programmers to 
                                code their next big idea, here at AvonToken we don't do that. We are the coders, the builders, the founders. 
                            </p>
                        </ClosingInfoContainer>

                        <TokenInfoContainer Height={500}>
                            <p>
                                If you are reading this you are a very early investor into the AvonToken (AvonDAO) project.
                                We are currently working on putting together a road map, team page, etc ...
                            </p>

                            <p>
                                We are also hiring! We are looking for people that are good at marketing, design, programming, and much more.
                                Reach out to kyle@avontoken.com or adam@avontoken.com for more details on how to go about potentially joining
                                the $AT Team. 
                            </p>
                            <p>
                                We pay in USD or in AvonToken ($AT).
                            </p>
                            <p>
                                Please mention you saw this page when inquiring. Thank You (:
                            </p>


                        </TokenInfoContainer> */}
                            <UpdatesContainer>
                                <h2> Updates </h2>

                                <p Style="height: 500px; text-align: left"> loading .....</p>
                            </UpdatesContainer>
                        {/* <UpdatesContainer>
                            <h2> Updates </h2>

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
                                </p>
                            
                            <br /> 
                            <br />
                        </UpdatesContainer> */}
                    </LoggedInInfo>
                }
            </div>
        </>
    )
}