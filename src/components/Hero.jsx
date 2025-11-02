import React from 'react'
import styles from '../css/Hero.module.css';
import BigSlide from './BigSlide'
import arrow from '../assets/arrow_down.svg'
import github from '../assets/github-mark.svg'
import codecamp from '../assets/free-code-camp.svg'

const Hero = () => {

  const handleGithubClick = () => {
    window.open('https://github.com/MrHryhorii', '_blank', 'noopener,noreferrer');
  };
  const handleCodecampClick = () => {
    window.open('https://www.freecodecamp.org/fccf6ecc9fc-4324-4001-95e1-499a0a94df58', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`${styles.hero}`} id='hero'>

      <div className={`${styles.heroText}`}>
        <p>Hi, my name is</p>
        <h1>Hryhorii Chupryna.</h1>
        <p>I build robust, unique software solutions.</p>
        <div className={`${styles.heroHl}`}></div>
        <p>Software Engineer</p>
        <p>Full-Stack Development</p>
    </div>

      <div className={`${styles.heroScrollbox}`}>
        <BigSlide dir="down" distance={650} duration={3000} cascade damping={0.14} triggerOnce>
          <img src={arrow} alt="arrow" />
        </BigSlide>
      </div>

      <div className={`${styles.heroSide}`}>
        <BigSlide dir="down" distance={750} duration={3000} cascade damping={0.14} triggerOnce>
          <img src={github} alt="github" className={`${styles.icon}`} onClick={handleGithubClick}/>
        </BigSlide>
        <BigSlide dir="down" distance={350} duration={3000} cascade damping={0.14} triggerOnce>
          <img src={codecamp} alt="freecodecamp" className={`${styles.icon}`} onClick={handleCodecampClick}/>
        </BigSlide>

        <div className={`${styles.vl}`}></div>
      </div>

    </section>
  )
}

export default Hero