import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {User} from "@styled-icons/boxicons-solid/User";
import {Message} from "@styled-icons/boxicons-regular/Message";
import {Groups} from "@styled-icons/material/Groups";

const Container = styled.div`
    background: #74716B;

    margin-top: -35px;
    height: 900px;
    width: 100%;

    h2 {

font-family: Nova Square;
font-style: normal;
font-weight: normal;
font-size: 38px;
line-height: 29px;
text-align: center;

color: #000000;

transform: rotate(0.02deg);
    }
`

const TopCircle = styled.div`
width: 55px;
height: 52px;

background: #FB6C1C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;


margin-left: 42%;

`

const BlackCircle = styled.div`
width: 30px;
height: 30px;

background: black;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 24px;
transform: rotate(0.02deg);

padding-left: 4px;
padding-top: 4px;

float: left;
`

const MessageBox = styled.div`
width: 100%;
height: 45px;

background: #414141;
border-radius: 5px;
transform: rotate(0.02deg);

padding-top: 5px;
padding-bottom: 5px;
padding-left: 15px;

margin-bottom: 1px;

p {
    margin-top: 19px;
    margin-left: 55px;
    color: white;
}

p1 {
    font-size: 12px;
}

`

const BottomButton = styled.div`
margin-top: 45px;
margin-left: 90px;

float: left;

width: 50px;
height: 47px;

background: #C4C4C4;
border-radius: 10px;
transform: rotate(0.02deg);

h3 {
    font-size: 16px;
    font-family: Nova Square;
}
`

const LineOne = styled.div`
width: 23px;
height: 0px;

border: 1px solid #000000;
transform: rotate(-0.38deg);
`

const LineTwo = styled.div`
width: 23px;
height: 0px;

border: 1px solid #000000;
transform: rotate(90.02deg);

`
const TestData = [
    {
        id: 1,
        Username: "0x4fx",
        Message: "This is a new Message"
    },
    {
        id: 2,
        Username: "0xftax",
        Message: "Another New Message here"
    },
    {
        id: 3,
        Username: "0xftax",
        Message: "What is UP"
    },
    {
        id: 4,
        Username: "0xftax",
        Message: "Have TO fix a few things"
    },
    {
        id: 5,
        Username: "0xftax",
        Message: "Too The fucking Moon"
    },
    {
        id: 7,
        Username: "0xfta",
        Message: "Intergrate ENS"
    }
]


export default function MessageCenter () {

    const [Data, setData] = useState(TestData);

    function GetMessagesFrom(Username) {
        fetch('https://longrichk.com:3030/GetMessage?name=' + Username + '&to=test')
        .then(response => response.json())
        .then(data => setData(data));
    }

    useEffect(() => {
        GetMessagesFrom('kyle');
    }, [])

    return (
        <>
            <Container>

                <TopCircle>
                    <div Style="padding-left: 11px; padding-top: 10px;">
                        <Message size="35" />
                    </div>
                </TopCircle>

                <h2 Style="padding-bottom: 15px;"> Message Center </h2>
                {/* <h4 Style="text-align: center; margin-top: -15px;"> Coming Soon ....</h4> */}

            {Data.map( data => (
                <>
                <MessageBox>
                    <BlackCircle>
                        <User size="25" color="#FB6C1C"/>
                        <p1>{data.Username}</p1>
                    </BlackCircle>
                    <p> {data.Message} </p>
                </MessageBox>
                </>
            ))}


                <BottomButton>
                    <div Style="padding-top: 22px; padding-left: 13px;">
                        <LineOne />
                        <LineTwo />
                    </div>
                    <h3 Style="padding-top: 15px; padding-left: 10px;">New</h3>
                </BottomButton>

                <BottomButton>
                    <div>
                        <Groups size="48" />
                    </div>
                    <h3 Style="margin-top: 10px; margin-left: 0px;">Groups</h3>
                </BottomButton>

            </Container>
        </>
    )
}