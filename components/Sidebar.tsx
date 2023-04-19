import { Navbar, Button,  Text } from "@nextui-org/react";
import styles from "./Sidebar.module.css";
import { Link } from "react-scroll";


export default function App() {
  const collapseItems = [
    "section1",
    "buy",
    "section3",
 
  ];

  return (
    <div className={styles.navContainer}>
     
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
      <Navbar>
       
          <Navbar.Toggle aria-label="toggle navigation" />
         
   
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
            
              to={item}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
      </div>
      </nav>
      </div>
   
  )
}
