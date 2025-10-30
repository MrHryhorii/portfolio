import React from 'react'
import styles from '../css/Hero.module.css';
import BigSlide from './BigSlide'
import arrow from '../assets/arrow_down.svg'

const Hero = () => {
  return (
    <section className={`${styles.hero}`} id='hero'>

      <div className={`${styles.heroText}`}>
        <p>Hi, my name is</p>
        <h1>Jack Parsons.</h1>
        <p>I like to code.</p>
        <div className={`${styles.heroHl}`}></div>
        <p>Computer Science</p>
        <p>Student</p>
      </div>

      <div className={`${styles.heroScrollbox}`}>
        <BigSlide dir="down" distance={650} duration={3000} cascade damping={0.14} triggerOnce>
          {/*<div className={`${styles.heroScroll}`}></div>*/}
          <img src={arrow} alt="" />
        </BigSlide>
      </div>

      <div className={`${styles.heroSide}`}>
        <BigSlide dir="down" distance={750} duration={3000} cascade damping={0.14} triggerOnce>
          <div className={`${styles.heroIcon1}`}></div>
        </BigSlide>
        <BigSlide dir="down" distance={350} duration={3000} cascade damping={0.14} triggerOnce>
          <div className={`${styles.heroIcon2}`}></div>
        </BigSlide>

        <div className={`${styles.vl}`}></div>
      </div>

    </section>
  )
}

export default Hero