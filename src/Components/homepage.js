import React from "react";

import TokenBackground from "../assests/AvonTokenBackground.png";
import TokenLogo from "../assests/AvonTokenLogo.png";

export default function Homepage() {

    return (
        <>
            <div Style="padding: 15px;">
                <img src={TokenLogo} height="75" width="75" />
            </div>
            <img src={TokenBackground} />
            
            <div Style="text-align:center">
                <p>NEXT BIG THING</p>
                <p>NOT A SCAM</p>
            </div>
        </>
    )
}