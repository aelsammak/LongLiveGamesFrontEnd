import styled from "styled-components";

export const AccountSettingsContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 48%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    background: #000A;
    align-items: center;
    text-align: center;
    padding: 2.5%;
`
export const AccountSettingsText = styled.h1`
    padding-bottom: 3.5%;
    color: #fff;
    font-weight: 500;
    font-size: 35px;
`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative; 
    width: 100%;
    padding: 2.5% 0% 0% 0%;
`

export const PasswordDiv = styled.div`
    display: flex;
    position: relative; 
    width: 100%;
    padding: 2.5% 0% 0% 0%;
`

export const InputLabel = styled.label`
    font-size: 20px;
    color: #fff;
`
export const PasswordLabel = styled.label`
    font-size: 20px;
    color: #fff;
    padding-bottom: 2%;
`

export const UserInput = styled.input`
    pointer-events: none;
    display: block;
    box-sizing: border-box;
    background: #0000;
	width: 60%;
    margin: auto;
    padding: 12px 0px;
    font-size: 0.8rem;
    border-color: transparent;
    box-shadow: none;
    
    ::placeholder {
        color: #fff;
        text-align: center;
    }
`

export const UserInputField = styled.input`
    display: block;
    box-sizing: border-box;
	width: 80%;
    padding: 8px 0px;
    margin-top: 20px;
    margin: auto;
    font-size: 0.8rem;
    border-color: transparent;
    box-shadow: none;
    
    ::placeholder {
        color: #fff;
    }

    &:focus {
        outline: 2px solid #7A63FF;
    }
`

export const CHANGEPASSWORDBtn = styled.button`
    margin-top: 30px;
    margin-bottom: 25px;
    padding: 12px 10px;
    width: 40%;
    font-size: 18px;
    border-radius: 4px;
    background: #7A63FF;
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
export const ErrorContainer = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 2%;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
`
