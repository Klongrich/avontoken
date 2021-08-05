import React, {useState} from "react";
import styled from "styled-components";

import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Github} from "@styled-icons/bootstrap/Github";

import {Reddit} from "@styled-icons/boxicons-logos/Reddit";
import {Telegram} from "@styled-icons/boxicons-logos/Telegram";
import {Discord} from "@styled-icons/boxicons-logos/Discord";
import { Newspaper } from "@styled-icons/ionicons-outline/Newspaper";
import { Uni } from "@styled-icons/crypto/Uni";
import { QuestionCircle } from "@styled-icons/bootstrap/QuestionCircle";

import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent"

import TokenLogo from "../assests/AvonTokenLogo.png";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// const TestATContract = "0xF37778Ff2BE5819efee99A0eB7862515b43ED03F";

const ETH_PRICE_QUERY = gql`
  query bundles {
    bundles(where: { id: "1" }) {
      ethPrice
    }
  }
`;

const theme = createTheme({
    palette: {
      primary: {
        main: "#F3BD02"
      },
      secondary: {
        main: "#ffab61",
      },
    },
  });

const Container = styled.div`
    background-color: black;
    height: 100%;

    font-size: 64px;
    font-family: 'Playball', cursive;
    color: #FFFFFF;

    p{
        margin-left: 130px;
        margin-top: -135px;
    }
`   

const BodyContainer = styled.div`
    background-color: black;
    text-align: center;
    margin-top: -70px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding-bottom: 42px;

    h2 {
        color: white;
        padding: 20px;
    }

    p {
        color: white;
        padding: 20px;
    }

    ul {
        color: white;
        list-style-type: none;
        margin-left: -42px;
    }

    li {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    a {
        color: white;
    }

`

const LinksContainer = styled.div`
    background-color: black;
    color: white;
    padding-top: 35px;
    padding-bottom: 25px;

    padding-left: 25px;
    padding-right: 25px;

    word-wrap: break-word;

    a {
        color: #0000EE;
    }

`

const SocialIconsContainer = styled.div`
    text-align: center;
    margin-top: 20px; 
    
    padding-top: 58px;
    padding-bottom: 50px;

    a {
        margin-left: 15px;
        margin-right: 15px;
    }

    border-top: 1px solid white;
`

const AppButton = styled.button`
    height: 45px;
    width: 200px;

    color: white;
    background-color: #FF7500;
    border: 1px solid #F7BE00;

    :hover {
        background-color: #ffab61;
        cursor: pointer;
    }

    margin-top: 15px;
    margin-bottom: 15px;

    box-shadow: 1px 2px #F7BE00;
`

const NewsContainer = styled.div`
    background-color: black;
    text-align: center;
    border-bottom: 1px solid white;

    padding-top: 10px;
    padding-bottom: 10px;

    a {
        color: white;
    }
`

const PriceBox = styled.div`
    font-weight: bold;
`

const BuySellContainer = styled.div`
    margin-top: 0px;
    margin-bottom: 15px;
    padding-bottom: 20px;

    text-align: center;

    ul {
        list-style-type: none;
    }

    li {
        color: white;
        font-size: 13px;
        text-decoration: none;
        float: left;
        padding-left: 30px;
        padding-right: 30px;

        padding-top: 8px;
        padding-bottom: 8px;

        border: 1px solid #F7BE00;
        box-shadow: 1px 2px #F7BE00;

        width: 55px;
    }
`

export default function Homepage() {

    const [open, setOpen] = useState(false);

    const { data: ethPriceData } = useQuery(ETH_PRICE_QUERY);
    const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;
    const priceOfAT = parseFloat(ethPriceInUSD * 0.00053120);
    const currentMarketcap = (parseFloat(ethPriceInUSD * 0.00053120) * 1000000)

    const handleToClose = () => {
        setOpen(false);
    };

    return (
        <>

    <div stlye={{}}>
            <ThemeProvider theme={theme}>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Join Team"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We are currently looking for Fellow Social Media Managers. Email kyle@avontoken.com
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToClose} 
                            color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>
            <div Style="background-color: black; height: 100%">

            <Container>
            <div Style="padding: 15px;">
                <img src={TokenLogo} height="75" width="75" alt="" />
            </div>
            
                <p> Avon Token </p>
                
            </Container>

            <BodyContainer>
                <h2 Style="line-height: 1.42"> AvonToken Is A User First Decentralized Community </h2>

                <p Style="line-height: 1.5; margin-top: -20px;">
                   The launch of our ERC20 token will be used in projects under the AvonDAO 
                </p>
                    
                <PriceBox>
                    <p Style="margin-top: -15px;">
                        Price of ETH: ${parseFloat(ethPriceInUSD).toFixed(2)}
                    </p>
                    <p Style="margin-top: -30px;">
                        Price Of AT: ${parseFloat(priceOfAT).toFixed(2)} 
                    </p>
                </PriceBox>

                    <a href="/vote">
                    <AppButton>
                        AvonDAO Voting
                    </AppButton>
                    </a>
                    <br />

                    <a href="/app">
                     <AppButton>
                        AvonDeFi Protocol
                     </AppButton>
                    </a>
                    <br />

                    <a href="https://github.com/avontoken/AvonNFT">
                    <AppButton>
                        AvonNFT Marketplace
                    </AppButton>
                    </a>
                    <br /> 
            </BodyContainer>

            <NewsContainer>
            <a href="/news">
                    <p Style="margin-left: -20px;"> News Pages </p>
                    <div Style="margin-top: -35px; 
                                margin-left: 105px;
                                margin-bottom: 20px;">
                        <Newspaper size="20" />
                    </div>
                </a>
            </NewsContainer>

            <LinksContainer>
                                
                <h2 Style="text-align:center; margin-top: 0px;">Purchase on Uniswap! </h2>
                
                <div Style="text-align:center;">
                    <Uni size="70" color="#F90076" /> 
                </div>

                <p Style="text-align:center; font-size: 14px;">Current Price: ${parseFloat(priceOfAT).toFixed(2)}  
                    <a  Style="color: white; padding-left: 5px;"
                        href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb#tokenTrade">
                    <QuestionCircle size="12" /> 
                </a>
                </p>

                <p Style="text-align: center; font-size: 14px;">Current Marketcap: ${currentMarketcap.toLocaleString()} 
                    <a Style="color: white; padding-left: 5px;"
                        href="https://www.investopedia.com/terms/m/marketcapitalization.asp">
                    <QuestionCircle size="12" />
                </a>
                </p>

                <br />

                <BuySellContainer>
                <ul>
                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb&inputCurrency=eth">
                <li Style="background-color:#32CD32;">
                    Buy AT
                </li>
                </a>

                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x7e992d8f57223661106c29e519e22a2a9a7bcefb&outputCurrency=eth">
                <li Style="background-color:#B22222;
                            margin-left: 15%;">
                    Sell AT
                </li>
                </a>
                </ul>
                </BuySellContainer>

                <br /> <br />
                <p Style="text-align:center; line-height: 1.5; margin-top: 20px;">Token Lanuched Here on Mainnet ->  <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>

            </LinksContainer>

            {/* 
                <div Style="text-align:center">
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="primary"  onClick={() => handleClickToOpen()}>
                        <p>Join Team</p>
                    </Button>
                </ThemeProvider>
            </div> */}
            
            <SocialIconsContainer>
                    <a href="https://twitter.com/avontoken">
                        <Twitter size="42" color="#1DA1F2" />
                    </a>

                    <a href="https://github.com/avontoken">
                        <Github size="42" color="#333" />
                    </a>

                    <a href="https://www.reddit.com/r/avontoken/">
                        <Reddit size="42" color="#FF4500" />
                    </a>

                    <a href="/">
                        <Telegram size="42" color="#0088cc" />
                    </a>

                    <a href="https://discord.gg/MpnC8aUWPA">
                        <Discord size="42" color="#5865F2" />
                    </a>
                </SocialIconsContainer>
            
            </div>
        </>
    )
}