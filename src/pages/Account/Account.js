import {React, useState} from "react";
import {AccountSettingsContainer, AccountSettingsText, InputDiv, InputLabel, UserInput, PasswordLabel, PasswordDiv, CHANGEPASSWORDBtn, UserInputField, ErrorContainer, Error} from "./AccountElements.js";
import {useHistory} from 'react-router-dom';
import {BackgroundImg, Line} from "../Home/HomeElements.js";
import img from "../../images/arcade3blur.png"
import axios from 'axios';

function Account(props) {

    const [enteredOldPassword, setEnteredOldPassword] = useState("");
    const [enteredNewPassword, setEnteredNewPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const enteredOldPasswordHandler = (event) => {
        setEnteredOldPassword(event.target.value);
    }

    const enteredNewPasswordHandler = (event) => {
        setEnteredNewPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem("access_token");
        const userPasswords = {
            'oldPassword': enteredOldPassword,
            'newPassword': enteredNewPassword
        }
        axios.put('http://localhost:8080/api/v0/users/' + props.username, userPasswords, {
                headers: {
                    'Authorization': "Bearer " + accessToken
                }
            }).then((res) => {
                setEnteredOldPassword("");
                setEnteredNewPassword("");
                localStorage.clear();
                history.push("/signin");
            }).catch(err => {
                const msg = err.response.data;
                if (msg.localeCompare("old password is incorrect") === 0) {
                    setErrorMsg(msg);
                    setShowError(true);
                }
                setEnteredOldPassword("");
                setEnteredNewPassword("");
            });
    }

    return (
        <BackgroundImg img={img} >
            <AccountSettingsContainer>
                <AccountSettingsText>ACCOUNT INFORMATION</AccountSettingsText>
                <Line width={"100%"}/>
                <form onSubmit={submitHandler}>
                    <PasswordDiv>
                        <InputDiv>
                            <InputLabel htmlFor="username">USERNAME</InputLabel>
                            <UserInput type="username" placeholder={props.username} />
                        </InputDiv>
                        <InputDiv>
                            <InputLabel htmlFor="email">EMAIL</InputLabel>
                            <UserInput type="email" placeholder={props.email} />
                        </InputDiv>
                    </PasswordDiv>
                    <Line width={"100%"}/>
                    <PasswordDiv>
                        <InputDiv>
                            <PasswordLabel htmlFor="password">OLD PASSWORD</PasswordLabel>
                            <UserInputField type="password" value={enteredOldPassword} onChange={enteredOldPasswordHandler} />
                        </InputDiv>
                        <InputDiv>
                            <PasswordLabel htmlFor="password">NEW PASSWORD</PasswordLabel>
                            <UserInputField type="password" value={enteredNewPassword} onChange={enteredNewPasswordHandler} />
                        </InputDiv>
                    </PasswordDiv>
                    <ErrorContainer>
                        {showError && <Error>{errorMsg}</Error>}
                    </ErrorContainer>
                    <CHANGEPASSWORDBtn type="submit">CHANGE PASSWORD</CHANGEPASSWORDBtn>
                </form>
            </AccountSettingsContainer>
        </BackgroundImg>
    );
}

export default Account;