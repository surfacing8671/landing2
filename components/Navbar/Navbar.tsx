
import Image from "next/image";
import { Link } from 'react-scroll';
import  Sidebar  from "../Sidebar";
import styles from "./Navbar.module.css";


import { Button, Row } from "@nextui-org/react";


/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  //const { address, isConnecting, isDisconnected } = useAccount()
 
  return (
    
    <div className={styles.navContainer}>
     
      <nav className={styles.nav}>
      
        <div className={styles.navConnect1}> </div>

          <div className={styles.navMiddle}>
          <div className={styles.navConnect}>
            <Row><Link to="section1" smooth={true} duration={500} className={styles.link}>
            section1
            </Link>
            <Link to="buy" smooth={true} duration={500} className={styles.link}>
            section2
            </Link>
            <Link to="section3" smooth={true} duration={500} className={styles.link}>
            section3
            </Link>
            <Link to="section3" smooth={true} duration={500} className={styles.link}>
            <Button className={styles.button}>
                 Buy Here     
                 </Button>
            </Link>
            </Row>
        
            
        
               
   </div>
          
        </div>
    

        
      </nav>
      </div>
   
  );
}
