import React from "react";
import styled from "styled-components";

import Logo from "../../../assests/ATlogo.png";
import DesktopNewColor from "../../../assests/DesktopNewColor.png";
import MobileDeFi from "../../../assests/DeFiMobile.png";

const Container = styled.div`
    background-image: linear-gradient(to left, #FF5A00, #FDC402);
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 250px;

    font-family: Nova Square;
`

const DesktopDeFiContainer = styled.div`
    background-color: #fcf7f7;
    border-radius: 15px;
    margin-top: 40px;

    padding: 20px;
    padding-right: 18px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 500px;
    height: 200px;
    
    margin-left: 37%;
    margin-top: -18%;

    border-radius: 15px;
    border: 1px solid white;

    img {
        border-radius: 15px;
        border: 1px solid white;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`

const  MobileDeFiContainer = styled.div`
    background-color: #fcf7f7;
    border-radius: 15px;
    margin-top: 40px;

    padding: 20px;
    padding-right: 18px;
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 150px;
    height: 300px;

    margin-left: 80%;
    margin-top: -22%;

    border-radius: 15px;
    border: 1px solid white;


    img {
        border-radius: 15px;
        border: 1px solid white;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`

const HeaderContainer = styled.div`
    height: 60px;
    background-image: linear-gradient( to left, #FE5D00, #FE8101);
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));

    margin-top: -15px;


    font-family: Nova Square;

    ul {
        list-style-type: none;
        margin-left: 20%;
    }

    li {
        float: left;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 22px;

        :hover {
            color: white;
        }
    }

`

const MiddleTextContainer = styled.div`
    width: 500px;

    border-radius: 15px;
    border: 1px solid white;
   
    text-align: center;
    line-height: 1.5;

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;

    margin-top: 50px;
    margin-left: 20px;

    background-image: linear-gradient( to left, #FE5D00, #FE8101);
    filter: drop-shadow(0px 8px 8px #FE5D00);
    border-radius: 15px;

    h1 {
        font-size: 42px;
    }

    h2 {
        line-height: 2;
        color:  #F0EAEA;
        font-weight: 300;
    }

`

const ProductsContainer = styled.div`
    background-color: #e0d2d2;
    border-top: 1px solid black;

    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

`

export default function HomePage() {

    return (
        <>
        <HeaderContainer>
            <ul>
                <li>Home</li>
                <li>Token Distrubtion</li>
                <li>Team</li>
                <li>Road Map</li>
                <li>Socials</li>
                <li>About</li>
                <li>Github</li>
            </ul>
        </HeaderContainer>
        <Container>
            <MiddleTextContainer>
                <img src={Logo} height="120px" width="120px" alt="" />
                <h1>AvonDeFi</h1>
                <h2>Most User Friendly Collateralized Lending Platform</h2>
            </MiddleTextContainer>

            <MobileDeFiContainer>
                <img src={MobileDeFi} height="400px" widht="180px;" alt="" />
            </MobileDeFiContainer>

            <DesktopDeFiContainer>                
                <img src={DesktopNewColor} height="300px" width="620px" alt="" />
            </DesktopDeFiContainer>
        </Container>

        <ProductsContainer>
            <h2> How To Use </h2>
        </ProductsContainer>

        <div>
            <h2>Team</h2>
        </div>

        <div>
            <h2>Token Distrubtion</h2>
        </div>

        </>
    )
}