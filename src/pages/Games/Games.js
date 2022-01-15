import React from "react";
import Card from "../../Components/Card/Card";
import {CardContainer, Separator, Title, GameDiv} from "./GameElements.js";
import {Line} from "../Home/HomeElements.js";
import img1 from "../../images/pongimg.png";
import img2 from "../../images/pacman.png";
import img3 from "../../images/spaceinvaders.png";
import img4 from "../../images/arcadecarpetgrey.png";

function Games() {
    return (
        <GameDiv img={img4}>
            <Title>GAME SELECTION</Title>
            <Line style={{position: "relative", top: "8vh"}} width={"40%"}/>
            <CardContainer>
                <Card title={"PAC-MAN"} description={"A nostalgic action maze chase game where the player must eat all of the dots placed in the maze while avoiding the four colored ghosts."} imgUrl={img2}/>
                <Separator />
                <Card title={"SPACE INVADERS"} description={"A classic singleplayer shooter in which the player must eliminate and survive against aliens for as long as possible."} imgUrl={img3}/>
                <Separator />
                <Card title={"PONG"} description={"A 2D arcade sports game that simulates table tennis. Players must find a friend to play against!"} imgUrl={img1}/>
            </CardContainer>
        </GameDiv>
    );
}

export default Games