import React from "react";
import {Line, BackgroundImg} from "../Home/HomeElements.js";
import {Title} from "../Games/GameElements.js";
import {AboutDiv, LeftContainer, RightContainer, AboutDescription} from "./AboutElements.js"
import Footer from "../../Components/Footer/Footer.js";
import img from "../../images/spacebackground.png";
import arcadegif from "../../images/neonmachinegif.gif"

function About() {
    return (
        <BackgroundImg img={img} style={{position: "relative"}}>
            <Title style={{top: "5vh"}}>ABOUT</Title>
            <Line style={{position: "relative", top: "4vh"}} width={"18%"}/>
            <AboutDiv>
                <LeftContainer>
                    <img src={arcadegif} alt="" />
                </LeftContainer>
                <RightContainer>
                    <AboutDescription>Hello, my name is Adi El-Sammak and I am a Software Engineering student at Carleton University. I have recently been diving deeper into Web Development and I was inspired to create LongLiveGames to commemorate the memories made from playing classic arcade games. So sit back, relax and create memories with LongLiveGames!</AboutDescription>
                </RightContainer>
            </AboutDiv>
            <Footer />
        </BackgroundImg>
    );
}

export default About