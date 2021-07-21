import React, {useState} from "react";
import styled from "styled-components";

import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import Slider from '@material-ui/core/Slider';


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
    text-align: center;
    padding-top: 20px;

    height: 900px;

    h3 {
        font-family: Nova Square;
        font-style: normal;
        font-weight: normal;    
        font-size: 32px;
        line-height: 29px;
        color: #000000;
    }

    h4 {
        font-family: Nova Square;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 45px;
    }
`

export default function GetLoan ({ethAmount}) {

    const [leverage, updateLeverage] = useState(1.1 || '');
    const [liqudationPrice, setLiquidationPrice] = useState(714.42);

    function updateLiqudation(value) {
        updateLeverage(value);
        calculateLiqudation(value);
    }

    function calculateLiqudation(Leverage){
        var result = 0;
        var price_of_eth = 1920.22
        var interest_rate = 5.42

        var partOne = price_of_eth * Leverage;
        var partTwo = Leverage + 1 - (interest_rate * Leverage);

        result = partOne / partTwo;
        setLiquidationPrice(result.toFixed(2) * -1);
        return (result)
    }

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container>
        
            <div Style="margin-bottom: 90px;">
            <h3>Loan Amount</h3>

                <Input style={{minWidth: '275px'}} 
                        color="primary"
                        variant="outlined"
                        type="number"/>
            </div>
                
                <div Style="padding-left: 50px;
                            padding-right: 50px;
                            margin-bottom: 40px;">
                    
                    <p Style="font-size: 16px;
                                padding-bottom: 10px;"> Collateralization</p>
                    
                    <p Style="font-size: 12px;">{leverage}x</p>
                    <Slider min={1.1} max={4}
                            step={0.1}
                            onChange={(e, val) => updateLiqudation(val)}
                    />
                
                </div>

            <h4> Liqudation Price:  ${liqudationPrice} </h4>

            <br />  <br />     
            <Button style={{minWidth: '210px', minHeight: '42px'}} variant="outlined" color="primary">
                Get Loan
            </Button>
        </Container>
        </ThemeProvider>
        </>
    )
}