import React from "react";
import styled from "styled-components";

import DOJseal from "../assests/DOJseal.png"
import FBIseal from "../assests/fbi.png";
import IPRcenter from "../assests/iprCenter.png";

const Container = styled.div`
    background-color:#fcf7f7;

    text-align: center;

    padding-top: 30px;
    padding-left: 10%;
    padding-right: 10%;

    height: 100%;

    img {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    p {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        font-family: times new roman;
    }

    padding-bottom: 150px;
`


export default function FakeTakeDown() {

    return (
        <>
            <Container>

            <p> 
                This domain name associated with the website Avontoken.com has been
                seized pursuant to an order issued by a U.S. District Court.
            </p>

            <p>
                A federal grand jury has indicted several individuals and entities 
                allegedly involved in the operation of Avontoken.com and related 
                websites charging them with the following federal crimes:
            </p>

            <p> <i> Conspiracy to Commit Racketeering (18 U.S.C - 1962(d)), Conspiracy to
                Commit Copyright Infringement (18 U.S.C. - 371), Conspiracy to Commit Money
                Laundering (18 U.S.C - 1956(h)), and Criminal Copyright Infringement (18
                U.S.C. -- 2, 2319; 17 U.S.C. - 506)
             </i> </p>

            <img src={DOJseal} width="210px" alt="" />
            <img src={FBIseal} width="210px" alt="" />
            <img src={IPRcenter} width="210px" alt="" />

            </Container>
        </>
    )
}