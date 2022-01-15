import React from "react";
import {CardDiv, CardImage, CardTextWrapper, CardTitle, CardDescription, CardButton} from "./CardElements.js";

function Card(props) {
    return (
        <CardDiv>
            <CardImage imgUrl={props.imgUrl}/>
            <CardTextWrapper>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
           </CardTextWrapper>
            <CardButton to="/pong">PLAY</CardButton>
        </CardDiv>
    ); 
}

export default Card