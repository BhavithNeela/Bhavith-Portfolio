import React from "react";
import styles from "./about.module.css";



export const About=()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src="/assets/about/aboutImage.png"
                className={styles.aboutImg}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/cursorIcon.png"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with buliding responces</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/serverIcon.png"/>
                    <div className={styles.aboutItemText}>
                        <h3>BackEnd Developer</h3>
                        <p>I'm a BackEnd developer with buliding responces</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/uiIcon.png"/>
                    <div className={styles.aboutItemText}>
                        <h3>BTech</h3>
                        <p>Computer Science And Engineering</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}
