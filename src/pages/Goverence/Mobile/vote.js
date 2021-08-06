import React, {useEffect, useState} from 'react';
import Countdown from 'react-countdown';

import styled from 'styled-components';

import TokenLogo from "../../../assests/AvonTokenLogo.png";

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import AvonDAOabi from "../../../assests/AvonDAO.json";

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent"

import TextField from '@material-ui/core/TextField';

import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { Cancel } from "@styled-icons/material/Cancel";

const AvonTokenAddress = "0x7e992d8f57223661106c29e519e22a2a9a7bcefb";

const AvonTokenMockAddress = "0xF37778Ff2BE5819efee99A0eB7862515b43ED03F";
const AvonDAORinkbeyAddress = "0xC389a1d5935bd84f77E4ce6f86FBDfF5c4dd5AA0";

var ERC_20_ABI = [
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
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
    height: 1765px;


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
    filter: drop-shadow(0px 4px 4px rgb(251,189,1));
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

const DataFiller = [
    {
        id: 0,
        preposal: "Should We Hire (Name Here) As A Designer For $500 To Create A Landing Page?",
        yes: 398,
        no: 75,
        yesPrecentage: 84.14,
        noPrecentage: 15.85,
        timeLeft: "7 hours 24 mintues",
        voted: false
    },
    {
        id: 1,
        preposal: "Should We Lower the LogIn to 10 AT Instead of 100 AT?",
        yes: 356,
        no: 120,
        yesPrecentage: 74.78,
        noPrecentage: 25.21,
        timeLeft: "12 hours 42 minutes",
        voted: false
    }
]

const inputProps = {
    step: 300,
  };

const TimeContainer = styled.div`
    background-color: #F0EAEA;
    padding-top: 25px;
    padding-bottom: 1px;
    padding-left: 12%;
    text-align: center;

    border-radius: 5px;
    border: 1px solid black; 
    box-shadow: 0px 4px 4px rgb(251,189,1);
  

  ul {
      list-style-type: none;
      background-color: white;
      list-style-position: outside;

      margin-top: -22px;
      margin-bottom: 40px;
      margin-left: 22px;
}

  li {
    float: left;
    font-size: 16px;
    margin-left: -38px;
  }
`
  

const TestData = [];

export default function VotePage () {

    const [data, setData] = useState(TestData);

    const [walletAddress, setWalletAddress] = useState("Connect Web3");
    const [ATamount, setATamount] = useState(null);
    const [open, setOpen] = useState(false);
    
    const [over150, setOver150] = useState(false);
    const [proposal, setProposal] = useState("");
    const [endDate, setEndDate] = useState("");
    const [amountOfChars, setAmountOfChars] = useState(0);

    const handleClickToOpen = () => {
        setOpen(true);
      };
      
      const handleToClose = () => {
        setOpen(false);
      };

    async function get_token_balance(publicKey, tokenAddy) {
        var web3 = window.web3;
        var balance;
        
        const contract = await new web3.eth.Contract(ERC_20_ABI, tokenAddy);

        await contract.methods.balanceOf(publicKey).call(function(error, result){
            if (result) {
                var amount = " " + result.toString();
                balance = web3.utils.fromWei(amount, 'ether');
            }
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

            if (result) {
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
            } else {
                setData(DataFiller);
            }
        });
        console.log(web3.currentProvider);
    }

    function setInput(value) {
        setAmountOfChars(value.length);
        setProposal(value);
        if (value.length >= 150) {
            setOver150(true);
        } else {
            setOver150(false);
        }
    }

    async function submitProposal(message, id) {
        if (over150) {
            alert("Proposal is not under 150 Characters");
        }
        console.log("message: " + message);

        let DateObject = new Date(endDate);

        console.log("EndDate: " + endDate);
        console.log("Selected Date: " + DateObject);
        console.log("Selected Time: " + DateObject.getTime());

        //Add A check to make sure they didn't select a date in the past or too far in the future.
        var web3 = window.web3;
        
        const contract = await new web3.eth.Contract(AvonDAOabi.abi, AvonDAORinkbeyAddress);

        await contract.methods.createPreposal(message, id, DateObject.getTime())
            .send( {from: walletAddress} )
            .once("receipt", (receipt) => {
                console.log(receipt)
            });
        };

    
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                return(
                    <>
                        Voting  Is Up
                    </>
                )
            } else {
                return( 
                <>
                <TimeContainer>
                    <ul> 
                        <li> {hours} Hours</li>
                        <li>:</li>
                        <li> {minutes} Mins </li>
                        <li>:</li>
                        <li> {seconds} Secs </li>
                    </ul> 
                </TimeContainer>
                </>
                );
            }
        };


    useEffect(() => {
        async function loadWalletData() {
            window.web3 = new Web3(window.web3.currentProvider)
            var web3 = window.web3;

            var amount_of_at = 0;
            const accounts = await web3.eth.getAccounts();
            const address = { account: accounts[0] }.account;

            //Main Net
            if (web3.currentProvider.networkVersion === "1") {
                amount_of_at = await get_token_balance(address, AvonTokenAddress);
            } 
            else if (web3.currentProvider.networkVersion === "4"){
                amount_of_at = await get_token_balance(address, AvonTokenMockAddress);
            }
            
            setWalletAddress(address);
            setATamount(amount_of_at); 
        }  

        async function loadWeb3() {
            if (window.ethereum) {
                const provider = await web3Modal.connect();
                window.web3 = await new Web3(provider);
                await provider.enable()

                await loadWalletData();
                await getPropsalInfo(0);
                await getPropsalInfo(1);

                console.log("0");
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
                setData(DataFiller);
            }
        }
        loadWeb3();
    } , [])

    return (
        <>

        <div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Create Proposal"}</DialogTitle>
                    <DialogContent>
                    <TextField
                        id="date"
                        label="Experation Date"
                        type="date"
                        defaultValue="2021-08-12"
                        onChange={e => setEndDate(e.target.value)}
                        />
                    </DialogContent>
                    <br />
                    <DialogContent>
                    <DialogContentText>
                            Keep proposal under 150 characters. Thank you
                    </DialogContentText>
                        <TextField id="text" 
                                    type="text" 
                                    inputProps={inputProps} 
                                    multiline rows={4}
                                    style={{minWidth: '100%', minHeight: '82px'}}
                                    onChange={e => setInput(e.target.value)}
                                    ></TextField>
                    <br /> <br /> 
                    <DialogContentText>
                        {!over150 && <> <p Style="margin-top: 0px;"> {amountOfChars} / 150 </p> </>}
                        {over150 && <> <p Style="color: red; margin-top: 0px;"> {amountOfChars} / 150 !</p> </>}
                    </DialogContentText>
                    </DialogContent>
                    <br />
                    <DialogActions>
                        <Button onClick={handleToClose}
                            color="secondary">
                            Close
                        </Button>
                        <div Style="margin-right: 10px;">
                        <Button onClick={() => submitProposal(proposal, 0)} 
                            color="secondary" autoFocus>
                            Submit
                        </Button>
                        </div>
                    </DialogActions>
                    <br />
                </Dialog>
            </ThemeProvider>
        </div>
        
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
                                padding-bottom: 20px;
                                margin-top: 30px;
                                margin-bottom: 30px;
                                box-shadow: 0px 4px 4px rgb(255,90,0);    
                                border-radius: 5px;
                                border: 1px solid #fcf7f7;
                                "
                                >
                        <h4 Style="font-size: 18px;"> {data.preposal} </h4>
                        <p> Yes: {data.yes} - ( {data.yesPrecentage} %) </p>
                        <p Style="margin-bottom: 25px;"> No: {data.no} - ( {data.noPrecentage} %) </p>
                        
                        <Countdown date={Date.now() + 500000}
                                   renderer={renderer} />

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
                    <li> <CheckCircle size="25" color="green" /> This Is An Old Proposal - <a Style="color: green" href="/"> passed </a> </li>
                    <li> <Cancel size="25" color="red" /> Hire Front-End Dev - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <Cancel size="25" color="red" /> This Is A Test - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <CheckCircle size="25" color="green" /> Community Give Away - <a Style="color: green" href="/"> passed </a> </li>
                    <li> <Cancel size="25" color="red" /> This Is Another - <a Style="color: red" href="/"> rejected </a> </li>
                    <li> <CheckCircle size="25" color="green" /> This Is A Thrid Test - <a Style="color: green" href="/"> passed </a> </li>
                </ul>
                
                </InactiveContainer>
                
                <br />
                <div Style="text-align:center;
                            margin-top: 10px;
                            margin-bottom: 30px;">
                <ThemeProvider theme={theme}>  
                    <Button variant="outlined" color="primary1" onClick={() => handleClickToOpen()}>
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
                        All votes and decisions are kept on chain for anyone to view. 
                    </li>
                    <li> 
                        Anyone can opt-in to the avontoken community by purchasing 
                        our governance token $AT
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