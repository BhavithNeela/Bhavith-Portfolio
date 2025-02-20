import React from "react";
import styles from "./contact.module.css"
export const Contact = () =>{
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/assets/contact/emailIcon.png"/>
                    <a href = "mailto:neelabhavith87@gmail.com">neelabhavith87@gmail.com</a>

                </li>
                <li className={styles.link}>
                    <img src="/assets/contact/linkedinIcon.png"/>
                    <a href = "https://www.linkedin.com/in/neelabhavith">LinkedIn</a>
                    
                </li>
                <li className={styles.link}>
                    <img src="/assets/contact/githubIcon.png"/>
                    <a href = "https://github.com/BhavithNeela">Github</a>
                    
                </li>
            </ul>
        </footer>
    )
}