import styled from "styled-components";

export const RoundedContactDiv = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    width: 65%;
    height: 57%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
export const LeftContainer = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    float: left;
`