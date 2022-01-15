import React from "react";
import {Nav, NavScrollLink, Bars, NavMenu, NavSignUpBtnLink, Logo} from "./NavbarElements.js";
import {useHistory} from 'react-router-dom';
import LOGO from "../../images/logo.png";

function Navbar(props) {

    const history = useHistory();

    const logOutUserHandler = (event) => {
        event.preventDefault();
        props.setUser("", "");
        localStorage.clear();
        history.push("/");
    }

    return (
        <Nav>
            <NavScrollLink to="/">
                <Logo src={LOGO} alt="" style={{padding:"6%"}}/>
            </NavScrollLink>
            <Bars />
            <NavMenu>
                <NavScrollLink to="/">
                    HOME
                </NavScrollLink>
                <NavScrollLink smooth to="/#games">
                    GAMES
                </NavScrollLink>
                <NavScrollLink smooth to="/#contact">
                    CONTACT
                </NavScrollLink>
                <NavScrollLink smooth to="/#about">
                    ABOUT
                </NavScrollLink>
                {props.isLoggedIn && <NavScrollLink to="/account">HELLO, {(props.username).toUpperCase()}</NavScrollLink>}
                {props.isLoggedIn && <NavSignUpBtnLink to="/" onClick={logOutUserHandler}>LOG OUT</NavSignUpBtnLink>}
                {!props.isLoggedIn && <NavScrollLink to="/signin">SIGN IN</NavScrollLink>}
                {!props.isLoggedIn && <NavSignUpBtnLink to="/signup">SIGN UP</NavSignUpBtnLink>}
            </NavMenu>
        </Nav>
    );
}

export default Navbar;