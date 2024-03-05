import React from 'react';
import styles from "./contactHeader.module.css";
import ContactForm from "../contactForm/contactForm"
import Button from '../button/button';
export default function ContactHeader(){
    return (
        <div className={`${styles.contact_section} container`}>
            <h1>Contact us</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div className={`${styles.header_body} container`}>
            <ContactForm/>
            <img src="/images/service.svg" alt="" />
        </div>
        </div>
    );
};