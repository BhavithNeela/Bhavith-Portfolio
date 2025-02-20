import React,{useState} from "react";
import styles from "./Navbar.module.css";
//import { getImageUrl } from '../util';
// import menuIcon from "../assets/nav/menuIcon.png";
// import closeIcon from"../assets/nav/close.png";
// import menuImg from './assets/menuIcon'

 //import  {getImageUrl}  from "../../utils";
// console.log(getImageUrl("/nav/menuIcon.png"));

export const Navbar= ()=>{
    const [menuOpen,setMenuOpen] = useState(false);
    return(

       <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn}
          src={menuOpen ?"/assets/nav/closeIcon.png"
            :"/assets/nav/menuIcon.png"}
            onClick={()=>{
                setMenuOpen(!menuOpen)
            }}
          />
        
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        
                  onClick={()=>setMenuOpen(false)}
                >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#project">Projects</a>

                </li>
                <li>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
       </nav>
    )
}