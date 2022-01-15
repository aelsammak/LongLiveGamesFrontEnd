import styled from "styled-components";

export const AboutDiv = styled.div`
    position: absolute;
    top: 49%;
    left: 50%;
    width: 65%;
    height: 57%;
    transform: translate(-50%, -50%);
    outline: 2px solid #7A63FF;
    border-radius: 30px;
    background: #000A;
`
export const LeftContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    float: left;
`

export const RightContainer = styled.div`
    padding-top: 6.5%;
    padding-right: 4%;
    width: 50%;
    height: 100%;
    line-height: 40px;
    float: right;
`
export const AboutDescription = styled.h2`
    font-size: 22px;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 1.2rem;
    color: #fff;
    font-weight: 500;
`
