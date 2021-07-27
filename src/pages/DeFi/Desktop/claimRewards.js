import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

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
    height: 1100px;

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

    padding-top: 32px;
    padding-bottom: 42px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    margin-top: 40px;
    margin-left: 33%;
    margin-right: 33%;
    margin-bottom: 70px;

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




export default function ClaimRewards () {

    return (
        <>
            <ThemeProvider theme={theme}>
            <Container>
          
                <h3 Style="padding-bottom: 0px;
                           "> Claim Rewards</h3>
                <Input style={{minWidth: '325px'}}
                        color="primary"
                        type="number"
                         />
                <RewardsBox>
                    <h4> Rewards To Claim</h4>
                    <p>
                        $3,509.93
                    </p>
                </RewardsBox>

                <Button style={{minWidth: '325px', minHeight: '42px'}}
                        variant="outlined" 
                        color="primary" >
                            Claim
                </Button>
            </Container>
            </ThemeProvider>
        </>
    )
}