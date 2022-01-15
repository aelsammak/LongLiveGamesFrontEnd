import React from "react";
import styled from "styled-components";
import img from "../../images/checkmark.png";
import img2 from "../../images/cancel.png";

export const ModalDiv = styled.div`
    background: #7A63FF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`

export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 27%;
    height: 25%;
    border-radius: 30px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    text-align: center;
    padding: 2% 2%;
`

export const Message = styled.h3`
    padding: 3%;
`

export const Checkmark = styled.img`
    height: 75px;
    width: 75px;
`
export const CloseButton = styled.input`
    height: 30px;
    width: 30px;
    place-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

function SubmitModal(props) {
    const firstName = props.contactData.firstName.charAt(0).toUpperCase() + props.contactData.firstName.substring(1).toLowerCase();
    const lastName = props.contactData.lastName.charAt(0).toUpperCase() + props.contactData.lastName.substring(1).toLowerCase();

    const closeModal = () => {
        props.setShowModal(false);
        props.setContactData({firstName: "", lastName: "", email: "", message: ""});
    }

    return (
        <ModalDiv>
            <ModalWindow>
                <CloseButton type="image" src={img2} onClick={closeModal} />
                <Checkmark src={img} alt=""></Checkmark>
                <h1>Thank you, {firstName} {lastName}</h1>
                <Message>We will get back to you ASAP!</Message>
            </ModalWindow>
        </ModalDiv>
    );
}

export default SubmitModal;