import styles from "./Navbar.module.css";
import nav_logo from "/VFilmsLogo.png";
import nav_cross from "/Vector.png";
import nav_list from "/Menu.png"
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["nav-logo"]}>
        <a href="#home"><img src={nav_logo} alt="Logo" /></a>
        
      </div>

      <div className={styles["nav-items"]}>
        { menuOpen &&
          <div className={styles["nav-services"]}>
            <ul className={styles["nav-list"]}>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#their-stories">Their Stories</a>
              </li>
              <li>
                <a href="#our-story">Our Story</a>
              </li>
              <li>
                <a href="#portfolio">Varnan</a>
              </li>
            </ul>
            <a href="#contact" className={styles["nav-list"]}>
              <button className={styles["nav-btn"]}>
              Let's Talk <img src="/mail.png" alt="" />
            </button>
            </a>
            
          </div> }
        <div className={styles["nav-cross"]}>
          <button onClick={toggleMenu}>
            <img src={menuOpen ? nav_cross : nav_list} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
