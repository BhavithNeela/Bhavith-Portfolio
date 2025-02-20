import React from "react";
import styles from "./projectcart.module.css"

export const ProjectCart = ({
    project :{title,imageSrc,description,skills}
})=>{
    return(
        <div className={styles.container} >
                    <img src={imageSrc} className={styles.Img} />
                    <h1 className={styles.title} >{title}</h1>
                    <p className={styles.description}>{description}</p>
                    {/* <ul>
                        {
                            skills.map((skills,id)=>{
                                <li key={id}> {skills}</li>
                            })
                        }
                    </ul> */}
                    </div>
    )
}