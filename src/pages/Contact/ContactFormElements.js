import styled from "styled-components";

export const RightContainer = styled.form`
    text-align: center;
    width: 50%;
    height: 100%;
    padding: 3.5rem 3.5rem;
    background-color: #1f2229;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    float: right;
`
export const ContactTitle = styled.h2`
    padding-bottom: 5%;
    color: white;
    font-weight: 500;
`

export const ClientInfoInput = styled.input`
	border: none;
	padding: 12px 15px;
	margin: 10px 0;
	width: 100%;
    font-size: 0.8rem;
    
    &:focus {
        outline: 2px solid #7A63FF;
    }
`

export const MsgInput = styled.textarea`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 10px 0;
	width: 100%;
    font-size: 0.8rem; 

    &:focus {
        outline: 2px solid #7A63FF;
    }
`
export const SubmitBtn = styled.button`
    margin-top: 10px;
    font-size: 18px;
    border-radius: 4px;
    background: #7A63FF;
    padding: 12px 24px;
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