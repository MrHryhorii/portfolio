import React from 'react'
import styles from '../css/Footer.module.css';

import github from '../assets/github-mark.svg'
import codecamp from '../assets/free-code-camp.svg'

const Footer = () => {

    const handleGithubClick = () => {
        window.open('https://github.com/MrHryhorii', '_blank', 'noopener,noreferrer');
    };
    const handleCodecampClick = () => {
        window.open('https://www.freecodecamp.org/fccf6ecc9fc-4324-4001-95e1-499a0a94df58', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.footerRow}`}>
                <div className={`${styles.footerLeft}`}>
                    <div className={`${styles.footerLine}`}></div>
                </div>
                <div className={`${styles.footerCenter}`}>
                    <img src={github} alt="github" className={`${styles.icon}`} onClick={handleGithubClick}/>
                    <img src={codecamp} alt="freecodecamp" className={`${styles.icon}`} onClick={handleCodecampClick}/>
                </div>
                <div className={`${styles.footerRight}`}>
                    <div className={`${styles.footerLine}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer