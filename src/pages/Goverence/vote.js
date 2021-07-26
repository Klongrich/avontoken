import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import TokenLogo from "../../assests/AvonTokenLogo.png";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import AvonDAOabi from "../../assests/AvonDAO.json";

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { Cancel } from "@styled-icons/material/Cancel";

//const AvonTokenAddress = "0x7e992d8f57223661106c29e519e22a2a9a7bcefb";

const AvonTokenMockAddress = "0xF37778Ff2BE5819efee99A0eB7862515b43ED03F";
const AvonDAORinkbeyAddress = "0x5c628B76C3F90986D204DF0D2E5a8bDA2E2B92Bf";

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
        main: "#5a8f04"
      },
      secondary: {
        main: "#751200",
      },
      primary1:{
          main: "rgba(38, 33, 23, 0.62)"
      }
    },
  });

const Container = styled.div`
    background-color: #F0EAEA;
    color:  black;
    font-family: Nova Square;
    font-style: normal;
    font-weight: normal;

    padding: 25px;
    height: 1665px;


    a {
        color:#0000EE;
    }

    ul {
        list-style-type: number;
    }

    li {
        font-size: 14px;
        
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 42px;
    }
`

const InactiveContainer = styled.div`
    background-color: #fcf7f7;
    border-radius: 15px;
    margin-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 1px;
    padding-bottom: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    li {
        font-size: 14px;
        
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 42px;

        margin-left: -20px;
    }

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
    margin-top: -70px;
`
const WhiteLine = styled.div`
    height: 3px; 
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    background-color: #fcf7f7;
    border-radius: 55px;
`

// const DataFiller = [
//     {
//         id: 0,
//         preposal: "Should We Fire Austin Seitz?",
//         yes: 356,
//         no: 120,
//         yesPrecentage: 74.78,
//         noPrecentage: 25.21,
//         timeLeft: "12 hours 42 minutes",
//         voted: false
//     },
//     {
//         id: 1,
//         preposal: "Should We Create The NFT Market Before The DeFi Platform?",
//         yes: 398,
//         no: 75,
//         yesPrecentage: 84.14,
//         noPrecentage: 15.85,
//         timeLeft: "7 hours 24 mintues",
//         voted: false
//     },
// ]

const TestData = [];

export default function VotePage () {

    const [data, setData] = useState(TestData);
    //const [loggedIn, setLoggedIn] = useState(false);

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);

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

    async function voteOnProposal(id, vote) {
        var web3 = window.web3;
        
        const contract = await new web3.eth.Contract(AvonDAOabi.abi, AvonDAORinkbeyAddress );

        await contract.methods
            .voteOnProposal(id, vote)
            .send({from: walletAddress})
            .once("receipt", (res) => {
                console.log(res);
            })
    }

    async function getPropsalInfo(id) {
        var web3 = window.web3;
        
        const contract = await new web3.eth.Contract(AvonDAOabi.abi, AvonDAORinkbeyAddress);

        await contract.methods.Preposals(id).call(function (error, result) {
           
            console.log("ID: + " + id);
            console.log(result);

            var yesCount = (result.yes / 1000000000000000000).toFixed(0);
            var noCount = (result.no / 1000000000000000000).toFixed(0);

            var yesPrecent = (parseFloat(yesCount) /  (parseFloat(yesCount) + parseFloat(noCount)) * 100).toFixed(2);
            var noPrecent = (100 - parseFloat(yesPrecent)).toFixed(2);

            var newData = {
                id: id,
                preposal: result.preposal,
                yes: yesCount,
                no: noCount,
                yesPrecentage: yesPrecent,
                noPrecentage: noPrecent
            }

            setData(data => [...data, newData])
        });

    }

    useEffect(() => {
        async function loadWalletData() {
            window.web3 = new Web3(window.web3.currentProvider)
            var web3 = window.web3;
    
            const accounts = await web3.eth.getAccounts();
            const address = { account: accounts[0] }.account;
            const amount_of_at = await get_token_balance(address, AvonTokenMockAddress);
            //const EthAmount = await web3.eth.getBalance(address);
    
            //setLoggedIn(true);
            setWalletAddress(address);
            setATamount(amount_of_at); 
            //setEthAmount(EthAmount / 1000000000000000000)     
        }  

        async function loadWeb3() {
            if (window.ethereum) {
                const provider = await web3Modal.connect();
                window.web3 = await new Web3(provider);
    
                await provider.enable()
                await loadWalletData();
                await getPropsalInfo(0);
                await getPropsalInfo(1);
                return(true);
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
                
                await loadWalletData();
                await getPropsalInfo(0);
                await getPropsalInfo(1);
                return(true);
            }
            else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        }

        loadWeb3();
        //const data = loadWeb3();
        // console.log("Data: " + data);
        // console.log("Address: " + walletAddress);
        // console.log("AT amounnt: " + ATamount);
        // //setLoggedIn(data);
    } , [])

    return (
        <>
            <Container>

                <h2 Style="text-decoration: underline;">Proposals</h2>
                <CircleLogo />
                <p Style="margin-top: 10px;">{ATamount} AT</p>

                {data.map( data => (
                    <>
                    <div Style="text-align:center; 
                                border-top: 1px solid white; 
                                background-color: #ed9866;
                                padding: 10px;
                                margin-top: 30px;
                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
                                border-radius: 18px;
                                border: 1px solid #fcf7f7;
                                "
                                >
                        <h4> {data.preposal} </h4>
                        <p> Yes: {data.yes} - ( {data.yesPrecentage} %) </p>
                        <p> No: {data.no} - ( {data.noPrecentage} %) </p>
                        <p>Time left: {data.timeLeft}</p>
                    </div>
                    
                    {!data.voted && 
                        <ThemeProvider theme={theme}>  
                            <div Style="margin-right: 100px;
                                    margin-top: 20px;
                                    text-align:center;">
                            <Button variant="outlined" color="primary" onClick={() => voteOnProposal(data.id, true)} >
                                Yes
                            </Button>
                            </div>

                            <div Style="margin-left: 100px;
                                        margin-top: -37px;
                                        text-align: center;">
                            <Button variant="outlined" color="secondary" onClick={() => voteOnProposal(data.id, false)} >
                                NO
                            </Button>
                            </div>
                        </ThemeProvider>
                    }

                    {data.voted &&
                        <>
                            <div Style="text-align: center;">
                                <p>Thank you for voting</p>
                            </div>
                        </>
                    }
                    </>
                ))}

                    
                <WhiteLine />

                <InactiveContainer>
                <h3 Style="text-decoratin: underline;">Inactive</h3>
                <ul Style="list-style-type: none;">
                    <li> <CheckCircle size="25" color="green" /> This is an old proposal - <a Style="color: green" href="/"> passed </a> </li>
                    <li> <Cancel size="25" color="red" /> Hire front-end dev - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <Cancel size="25" color="red" /> This is a test - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <CheckCircle size="25" color="green" /> Community Give Away - <a Style="color: green" href="/"> passed </a> </li>
                    <li> <Cancel size="25" color="red" /> This is another - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <CheckCircle size="25" color="green" /> This is a thrid Test - <a Style="color: green" href="/"> passed </a> </li>
                </ul>
                
                </InactiveContainer>
                
                <br />
                <div Style="text-align:center;
                            margin-top: 10px;
                            margin-bottom: 30px;">
                <ThemeProvider theme={theme}>  
                    <Button variant="outlined" color="primary1">
                    Create Proposal
                    </Button>
                </ThemeProvider>
                <p> Must Hold 10,000 AT to Create A Proposal </p>
                </div>

                <WhiteLine />


                <a href="https://github.com/avontoken/AvonDAO/blob/master/contracts/AvonDAO.sol">
                    Contract Here
                </a>
                
                <br /> <br />
                <p> <strong> *How It Works </strong> </p>

                <ul>
                    <li> 
                        All votes and descions are kept on chain for anyone to view. 
                    </li>
                    <li> 
                        Anyone can opt-in to the avontoken commuinty by purchasing 
                        our governece token $AT
                    </li>
                    <li>
                        Anyone holding $AT has the ability to vote on all proposals
                        within the correct time frame
                    </li>
                    <li>
                        Voting power is through balance of AT if you have 100 AT and the total
                        amount of holders voting on a proposal is 500 AT you will count for 
                        20% of the vote
                    </li>
                </ul>
            </Container>
        </>
    )
}