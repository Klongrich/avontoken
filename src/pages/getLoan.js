import React from "react";
import styled from "styled-components";
 
const Container = styled.div`
    background-color: #C4C4C4;
    text-align: center;
    padding-top: 90px;

    height: 900px;
`

const InputBox = styled.input`

`

export default function GetLoan ({ethAmount}) {

    return (
        <>
        <Container>
            <h3> Get Loan </h3>
            <h4> Your ETH Balance: {ethAmount} </h4>

            <h4>Loan Amount</h4>
            <InputBox />

            <h4>Max Loan: $500</h4>
            <h4>Interest: 1.47%</h4>

            <button>
                Submit
            </button>

        </Container>
        </>
    )
}