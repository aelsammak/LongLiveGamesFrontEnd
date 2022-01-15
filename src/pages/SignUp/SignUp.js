import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import {SignUpContainer, SignUpText, SignUpInput, SignUpBtn, InputDiv, SignInStatement, SignInToggle, Error, ErrorContainer} from "./SignUpElements";
import {BackgroundImg, Line} from "../Home/HomeElements.js";
import img from "../../images/arcade2blur.png"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

function SignUp() {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const emailHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredPassword.localeCompare(enteredConfirmPassword) === 0) {
            const signUpUser = {
                username: enteredUsername,
                email: enteredEmail,
                password: enteredPassword
            }
            axios.post('http://localhost:8080/api/v0/users', signUpUser)
                .then(() => {
                    setShowError(false);
                    setEnteredUsername("");
                    setEnteredEmail("");
                    setEnteredPassword("");
                    setConfirmPassword("");
                    history.push("/signin");
                }).catch(err => {
                    const msg = err.response.data;
                    if (msg.localeCompare("email already exists") === 0) {
                        setErrorMsg(msg);
                        setShowError(true);
                    } else if (msg.localeCompare("username already exists") === 0) {
                        setErrorMsg(msg);
                        setShowError(true);
                    }
                    console.log(err)
                    setEnteredUsername("");
                    setEnteredEmail("");
                    setEnteredPassword("");
                    setConfirmPassword("");
                });
        } else {
            setErrorMsg("Passwords do not match. Try Again.");
            setEnteredPassword("");
            setConfirmPassword("");
            setShowError(true);
        }
    }

    return (
        <BackgroundImg img={img} >
            <SignUpContainer>
                <SignUpText>SIGN UP</SignUpText>
                <Line width={"100%"}/>
                <form onSubmit={submitHandler}>
                    <InputDiv>
                        <SignUpInput type="text" placeholder="Username" value={enteredUsername} onChange={usernameHandler} />
                        <PersonOutlineIcon style={{position: "absolute", top: "7px", left: "5px"}} />
                    </InputDiv>
                    <InputDiv>
                        <SignUpInput type="email" placeholder="Email" value={enteredEmail} onChange={emailHandler} />
                        <MailOutlineIcon style={{position: "absolute", top: "7px", left: "5px"}} />
                    </InputDiv>
                    <InputDiv>
                        <SignUpInput type="password" placeholder="Password" value={enteredPassword} onChange={passwordHandler} />
                        <LockOutlinedIcon style={{position: "absolute", top: "7px", left: "5px"}} />
                    </InputDiv>
                    <InputDiv>
                        <SignUpInput type="password" placeholder="Confirm Password" value={enteredConfirmPassword} onChange={confirmPasswordHandler} />
                        <LockOutlinedIcon style={{position: "absolute", top: "7px", left: "5px"}} />
                    </InputDiv>
                    <ErrorContainer>
                        {showError && <Error>{errorMsg}</Error>}
                    </ErrorContainer>
                    <SignUpBtn type="submit">REGISTER</SignUpBtn>
                    <SignInStatement>Already have an account?<SignInToggle to="/signin">Sign In</SignInToggle></SignInStatement>
                </form>
            </SignUpContainer>
        </BackgroundImg>
    );
}

export default SignUp;