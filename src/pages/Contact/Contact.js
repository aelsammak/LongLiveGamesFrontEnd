import React, {useState}from "react";
import {RoundedContactDiv, LeftContainer} from "./ContactElements.js"
import ContactForm from "./ContactForm"
import SubmitModal from "./SubmitModal"
import {Line, BackgroundImg} from "../Home/HomeElements.js";
import {Title} from "../Games/GameElements.js";
import img from "../../images/purplegradient.png";
import img2 from "../../images/aboutsection.png";

function Contact() {

    const [showModal, setShowModal] = useState(false);
    const [contactData, setContactData] = useState({firstName: "", lastName: "", email: "", message: ""});

    const submitContactFormHandler = (enteredContactData) => {
        setShowModal(true);
        setContactData(enteredContactData);
    }

    return (
        <BackgroundImg img={img} style={{position: "relative"}}>
            <Title>CONTACT</Title>
            <Line style={{position: "relative", top: "8vh"}} width={"23%"}/>
            <RoundedContactDiv>
                <LeftContainer img={img2} />
                <ContactForm onSubmitContactForm={submitContactFormHandler} />
            </RoundedContactDiv>
            {showModal && <SubmitModal setShowModal={setShowModal} setContactData={setContactData} contactData={contactData}/> }
        </BackgroundImg>
    );
}

export default Contact
