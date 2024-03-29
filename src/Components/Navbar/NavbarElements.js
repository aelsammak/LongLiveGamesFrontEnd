import styled from "styled-components";
import {HashLink} from "react-router-hash-link";
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
    background: #000A;
    height: 110px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((80vw - 1000px) / 2);
    position: absolute;
    width: 100%;
`

export const Logo = styled.img`
    height: 110px;
    width: 150px;
    padding: 2% 2% 2%;
`

export const NavScrollLink = styled(HashLink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        transform: translate(-100%, 60%);
        font-size: 2.5rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavSignUpBtnLink = styled(HashLink)`
    border-radius: 4px;
    background: #7A63FF;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`