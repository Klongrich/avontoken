import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import MobilePage from "./Mobile/vote";
import DesktopPage from "./Desktop/vote";

export default function VotingDapp() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 999) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    })

    return (
        <>
            {isMobile && <MobilePage />}
            {!isMobile && <DesktopPage />}
        </>
    )
}