import React from "react";
import skills from "../../data/skills.json"
import styles from "./Experience.module.css"
import history from "../../data/history.json"


export const Experience =()=>{
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill,id)=>{
                        return(<div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                               < img src ={skill.imageSrc} className={styles.imgStyle}/>
                               </div>
                            <p>{skill.title}</p>
                            </div>
                        );
                    })
                }
            </div>
            <ul className={styles.history}>
                  {
                    history.map((historyItem,id)=>{
                        return(
                            <li key={id} className={styles.historyItem}>
                            <img src ={historyItem.imageSrc} className={styles.imgStyle}/>  
                            <div className={styles.historyItemDetalis}>
                                <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate},${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experiences,id)=>{
                                    return(
                                        <li key={id}>{experiences}</li>
                                    )
                                })}</ul>

                            </div>
                            </li>
                        )
                    })
                  }
            </ul>
            </div>
        </section>
        

    )
}