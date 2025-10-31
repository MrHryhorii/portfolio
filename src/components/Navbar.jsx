import React from 'react'
import styles from '../css/Navbar.module.css';

const Navbar = ({scrollToId}) => {

  return (
    <nav className={`${styles.nav}`}>
        <div className={`${styles.navDiv}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }}><p>Logo</p></a>
        </div>
        <div className={`${styles.navDiv} ${styles.navDivLast}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToId('about'); }}><p>About</p></a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }}><p>Projects</p></a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}><p>Contact</p></a>
        </div>
    </nav>
  )
}

export default Navbar