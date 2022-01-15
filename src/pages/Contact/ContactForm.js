import React, { useState } from "react";
import {RightContainer, ContactTitle, ClientInfoInput, MsgInput, SubmitBtn} from "./ContactFormElements.js"

function ContactForm(props) {

    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const firstNameHandler = (event) => {
        setEnteredFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setEnteredLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const messageHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const contactData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            message: enteredMessage
        }

        props.onSubmitContactForm(contactData);
        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredEmail("");
        setEnteredMessage("");
    }

    return (
        <RightContainer onSubmit={submitHandler} >
            <ContactTitle>GET IN TOUCH!</ContactTitle>
            <p style={{fontSize: "0.9rem", color: "#fff", textAlign: "left"}}>* Required</p>
            <ClientInfoInput type="text" placeholder="First Name *" value={enteredFirstName} onChange={firstNameHandler} />
            <ClientInfoInput type="text" placeholder="Last Name *" value={enteredLastName} onChange={lastNameHandler} />
            <ClientInfoInput type="email" placeholder="Email *" value={enteredEmail} onChange={emailHandler} />
            <MsgInput rows="4" placeholder="Message" value={enteredMessage} onChange={messageHandler} />
            <SubmitBtn type="submit">SUBMIT</SubmitBtn>
        </RightContainer>
    );
}

export default ContactForm;