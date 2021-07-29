import React from "react";
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu'

import "./burgerMenu.css";

import Logo from "../../../assests/ATlogo.png";
import DesktopNewColor from "../../../assests/DesktopNewColor.png";
import MovingBackground from "../../../assests/ATbackground.gif";

import DesktopDeFi from "../../../assests/DeFiDesktop.png";
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
    margin-top: 120px;
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    width: 80%;
    height: 200px;

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
    margin-top: 120px;

    padding: 20px;
    padding-right: 18px;
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 150px;
    height: 300px;

    border-radius: 15px;
    border: 1px solid white;

    margin-left: 20%;

    img {
        border-radius: 15px;
        border: 1px solid white;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`

const MiddleTextContainer = styled.div`
    width: 78%;

    border-radius: 15px;
    border: 1px solid white;
   
    text-align: center;
    line-height: 1.5;

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;

    margin-top: 100px;
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
const Header = styled.div`

    color: white;
    
    a{
        padding-top: 15px;
        padding-bottom: 15px;
        color: white;
    }

`

export default function HomePage() {

    return (
        <>

        <Header>
        <Menu id={"sidebar"} >
        <a id="home" class="bm-item" href="/">Home</a>
        <a id="about" class="bm-item" href="/">Token Distrubtion</a>
        <a id="contact" class="bm-item" href="/">Team</a>
        <a id="home" class="bm-item" href="/">Road Map</a>
        <a id="about" class="bm-item" href="/">Socials</a>
        <a id="contact" class="bm-item" href="/">About</a>
        <a id="about" class="bm-item" href="/">How It Works</a>
      </Menu>
      </Header>
  
        <Container>
            <MiddleTextContainer>
                <img src={Logo} height="120px" width="120px" alt="" />
                <h1>AvonDeFi</h1>
                <h2>Most User Friendly Collateralized Lending Platform</h2>
            </MiddleTextContainer>

            <DesktopDeFiContainer>                
                <img src={DesktopNewColor} height="200" width="390px" alt="" />
            </DesktopDeFiContainer>

            <MobileDeFiContainer>
                <img src={MobileDeFi} height="400px" widht="180px;" alt="" />
            </MobileDeFiContainer>

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