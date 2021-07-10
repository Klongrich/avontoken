import React from "react";

import TokenBackground from "../assests/AvonTokenBackground.png";
import TokenLogo from "../assests/AvonTokenLogo.png";

export default function Homepage() {

    return (
        <>
            <div Style="padding: 15px;">
                <img src={TokenLogo} height="75" width="75" alt="" />
            </div>

            <img src={TokenBackground} alt="" />


            <p Style="text-align:center;">Token Lanuched Here on Mainnet -> <a href="https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb"> https://etherscan.io/token/0x7e992d8f57223661106c29e519e22a2a9a7bcefb </a> </p>

            <div Style="text-align:center">
                
                <p>NEXT BIG THING</p>
                <p>NOT A SCAM</p>
            </div>
        </>
    )
}