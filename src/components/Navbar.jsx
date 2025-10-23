import React from 'react'
import styles from '../css/Navbar.module.css';

const Navbar = () => {

  return (
    <nav className={`${styles.nav}`}>
        <div className={`${styles.navDiv}`}>
            <p>Logo</p>
        </div>
        <div className={`${styles.navDiv} ${styles.navDivLast}`}>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
            <p>Resume</p>
        </div>
    </nav>
  )
}

export default Navbar