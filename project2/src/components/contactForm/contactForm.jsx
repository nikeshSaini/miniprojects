import React from 'react';
import styles from "./contactForm.module.css";
import Button from '../button/button';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
export default function ContactForm(){
    return (
        <div className={`${styles.form_section}`}>
            <div className={`${styles.button_section}`}>
                <div className={`${styles.button_part1}`}>
                    <Button name ="Via Support Chat" icon ={<MdOutlineMessage/>}/>
                    <Button name ="Via Call" icon ={<IoMdCall/>}/>
                </div>
                <Button isOutline ={true} name ="Via Email Form" icon ={<MdEmail/>}/>
                <form action="">
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text ">Text</label>
                    <textarea name="text"  />
                </div>
                <Button name="Submit"/>
            </form>
            </div>
            

        </div> 
    );
};