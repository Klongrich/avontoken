import React, {useEffect, useState} from "react"

import DesktopPage from "./Desktop/homepage";
import MobilePage from "./Mobile/homepage";

export default function Homepage() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 999) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, [isMobile])

    return (
        <>
        {isMobile && <MobilePage />}
        {!isMobile && <DesktopPage />}
        </>
    ) 
}