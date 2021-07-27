import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

const ActionConatiner = styled.div`
    background-color: #fcf7f7;
    border-radius: 15px;
    margin-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 1px;
    padding-bottom: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin-left: 7%;
    margin-right: 7%;

    li {
        font-size: 14px;
        
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 42px;

        margin-left: -20px;
    }

`

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
    height: 100%;

    padding-top: 30px;

    text-align: center;

    h3 {
        font-family: Nova Square;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
    }
`

const RewardsBox = styled.div`
    background-color: #FCF7F7;
    color: balck;
    padding: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    margin-top: 40px;
    margin-left: 22%;
    margin-right: 22%;
    margin-bottom: 70px;

    height: 185px;

    h4 {
        font-family: Nova Square;
        font-size: 20px;
        font-style: normal; 
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
    }

    ul {
        list-style-type: none;
    }

    li {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: -35px;

        font-family: Nova Square;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
    }
`

const StakedBox = styled.div`
    background-color: #FCF7F7;
    color: balck;
    padding: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    margin-top: 40px;
    margin-left: 22%;
    margin-right: 22%;
    margin-bottom: 70px;

    height: 185px;

    h4 {
        font-family: Nova Square;
        font-size: 20px;
        font-style: normal; 
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
    }
`


export default function StakePage () {

    return (
        <>
            <ThemeProvider theme={theme}>
            <Container>
            
                <div Style="
                            width: 50%;">
                <ActionConatiner>
                <h3 Style="padding-bottom: 30px;
                           padding-top: 10px;"> Stake AT </h3>
                <Input style={{minWidth: '325px'}}
                        color="primary"
                        type="number"
                         />
                <RewardsBox>
                    <h4>Estimated Rewards</h4>

                    <ul>
                        <li> $12.56 / Day </li>
                        <li> $84.12 / Week </li>
                        <li> $4,584 / Year </li>
                    </ul>
                </RewardsBox>

                <Button style={{minWidth: '325px', minHeight: '42px'}}
                        variant="outlined" 
                        color="primary" >
                            Stake
                </Button>
                </ActionConatiner>
                </div>

                {/* <div Style="background-color: grey;
                            height: 3px;
                            width: 100%;
                            margin-top: 80px;
                            margin-bottom: 50px;">
                </div> */}

                <div Style="
                            width: 50%;
                            margin-left: 50%;
                            margin-top: -573px;">

                <ActionConatiner>
                <h3 Style="padding-bottom: 30px;
                            padding-top: 10px;"> Unstake AT</h3>
                <Input style={{minWidth: '325px'}}
                        color="primary"
                         />

                <StakedBox>
                    <h4>Currently Staked</h4>
                    <p>174.42 AT</p>
                </StakedBox>

                <Button style={{minWidth: '325px', minHeight: '42px'}}
                        variant="outlined" 
                        color="primary" >
                            Unstake
                </Button>
                </ActionConatiner>
                </div>
            </Container>
            </ThemeProvider>
        </>
    )
}