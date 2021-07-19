import React from 'react';
import styled from 'styled-components';

import TokenLogo from "../assests/AvonTokenLogo.png";

const Container = styled.div`
    background-color: #F0EAEA;
    color:  black;
    font-family: Nova Square;
    font-style: normal;
    font-weight: normal;

    padding: 25px;
    height: 1295px;


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


const Data = [
    {
        id: 0,
        preposal: "Should we fire Austin Seitz?",
        yes: 356,
        no: 120,
        yesPrecentage: 74.78,
        noPrecentage: 25.21,
        timeLeft: "12 hours 42 minutes"
    },
    {
        id: 1,
        preposal: "Should we create the NFT market before DeFi platform?",
        yes: 398,
        no: 75,
        yesPrecentage: 84.14,
        noPrecentage: 15.85,
        timeLeft: "7 hours 24 mintues"
    },
]

export default function VotePage () {

    return (
        <>
            <Container>

                <h2 Style="text-decoration: underline;">Proposals</h2>

                <CircleLogo />

                {Data.map( data => (
                    <div Style="text-align:center; 
                                border-top: 1px solid white; 
                                background: #FB6C1C;
                                padding: 10px;
                                margin-top: 30px;
                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
                                border-radius: 18px;
                                "
                                >
                        <h4> {data.preposal} </h4>
                        <p> Yes: {data.yes} - ( {data.yesPrecentage} %) </p>
                        <p> No: {data.no} - ( {data.noPrecentage} %) </p>
                        <p>Time left: {data.timeLeft}</p>
                    </div>
                ))}

                <h3 Style="text-decoratin: underline; margin-top: 40px;">Inactive</h3>

                <ul Style="list-style-type: circle;">
                    <li>This is an old proposal - <a Style="color: green" href="/"> passed </a> </li>
                    <li>Hire for front-end development - <a Style="color: red" href="/"> rejected </a> </li>
                    <li>This is a test - <a Style="color: red" href="/"> rejected </a> </li>
                    <li>Community Give Away - <a Style="color: green" href="/"> passed </a> </li>
                    <li>This is another - <a Style="color: red" href="/"> rejected </a> </li>
                    <li>This is a thrid Test - <a Style="color: green" href="/"> passed </a> </li>
                </ul>
                
                <br />
                <button>
                    Create Proposal
                </button>
                <p> Must Hold 100 AT to Create A Proposal </p>

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
                        out governece token AT
                    </li>
                    <li>
                        Anyone holding AT has the ability to vote on all proposals
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