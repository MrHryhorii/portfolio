import React from 'react'
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        <div className={`${styles.footerRow}`}>
            <div className={`${styles.footerLeft}`}>
                <div className={`${styles.footerLine}`}></div>
            </div>
            <div className={`${styles.footerCenter}`}>
                <div className={`${styles.heroIcon1}`}></div>
                <div className={`${styles.heroIcon2}`}></div>
            </div>
            <div className={`${styles.footerRight}`}>
                <div className={`${styles.footerLine}`}></div>
            </div>
        </div>
    </div>
  )
}

export default Footer