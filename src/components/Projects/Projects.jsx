import React from "react";
import styles from"./project.module.css";
import projects from "../../data/projects.json";
import { ProjectCart } from "./ProjectCard";

export const Projects =()=>{
    return (
       <section id ="project" className={styles.container}>
        <h2 className={styles.title} >
            Projects
            
        </h2>
        <div className={styles.projects} >
            {projects.map((project,id)=>
            {
              return(
                <ProjectCart key={id} project={project}/>
              )
            })
            
            
            }

        </div>
    
       </section>
    )
}