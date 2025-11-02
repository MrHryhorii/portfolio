import React from 'react'
import styles from '../css/Navbar.module.css';

import logo from '../assets/tsubaki_lite.svg'

const Navbar = ({scrollToId}) => {

  return (
    <nav className={`${styles.nav}`}>
        <div className={`${styles.navDiv}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }}><img className={`${styles.logoImg}`} src={logo} alt="me" /></a>
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