import React from "react";
import styles from "./hero.module.css";
import  {getImageUrl}  from "../../utils"
 
export  const  Hero = () =>{
return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Bhavith Neela</h1>
        <p className={styles.description}> As a passionate and dedicated Java Full Stack Developer, I am eager to apply my skills in real-world projects. Although I am a fresher with no professional experience, I am committed to continuous learning and growth 
        Please feel free to reach out if you're looking for a motivated developer ready to contribute and grow.
        </p>
        <a href = "mailto:neelabhavith87@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/heroImage.png" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
)
}