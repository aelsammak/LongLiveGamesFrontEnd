import styled from "styled-components";

export const FooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 153px;
    background: #000A;
    text-align: center;
`
export const StayConnected = styled.h2`
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    padding-top: 1%;
`

export const LogoContainer = styled.div`
    padding-top: 0.5%;
    padding-bottom: 0.5%;
`
export const Logo = styled.img`
    position: relative;
    right: 10px;
    filter: brightness(0) invert(1);
    height: 45px;
    width: 45px;
    padding-left: 1%;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`
export const CopyrightDiv = styled.div`
    padding-bottom: 1%;
`

export const Copyright = styled.p`
    font-size: 13px;
    color: #fff;
    font-weight: 500;
`
