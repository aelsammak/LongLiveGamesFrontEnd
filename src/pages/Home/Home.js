import React from 'react';
import {BackgroundImg, TextContainer, BlackBox, Greeting, Line, Intro, ScrollBtnLink} from "./HomeElements.js";
import img from "../../images/arcade.jpg";
import Games from '../Games/Games.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

function Home() {
    return (
    <div>
        <section id="home">
            <BackgroundImg img={img}>
                    <TextContainer>
                        <BlackBox>
                            <Greeting>WELCOME TO LONG.LIVE.GAMES</Greeting>
                            <Line width={"65%"}/>
                            <Intro>Ready to dive into a selection of timeless games?</Intro>
                            <div style={{paddingBottom: "3%", paddingTop: "1.3%"}}>
                                <ScrollBtnLink to="/#games" smooth>BROWSE GAMES</ScrollBtnLink>
                            </div>
                        </BlackBox>
                    </TextContainer>
            </BackgroundImg>
        </section>
        <section id="games">
            <Games />
        </section>
        <section id="contact">
            <Contact />
        </section>
        <section id="about">
            <About />
        </section>
    </div>
    );
}

export default Home;