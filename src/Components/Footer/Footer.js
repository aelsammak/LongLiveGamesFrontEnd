import React from "react";
import {FooterDiv, LogoContainer, Logo, StayConnected, CopyrightDiv, Copyright} from "./FooterElements.js"
import FacebookLogo from "../../images/logo-facebook.svg";
import TwitterLogo from "../../images/logo-twitter.svg";
import YoutubeLogo from "../../images/logo-youtube.svg";
import DiscordLogo from "../../images/logo-discord.svg";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <FooterDiv>
            <StayConnected>STAY CONNECTED</StayConnected>
            <LogoContainer>
                <Logo src={FacebookLogo} />
                <Logo src={TwitterLogo} />
                <Logo src={YoutubeLogo} />
                <Logo src={DiscordLogo} />
            </LogoContainer>
            <CopyrightDiv>
                <Copyright>@{year} LONG.LIVE.GAMES</Copyright>
            </CopyrightDiv>
        </FooterDiv>
    );
}

export default Footer