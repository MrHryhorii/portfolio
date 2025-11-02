import React from 'react'
import styles from '../css/About.module.css';
import BigSlide from './BigSlide'
import { Accordian, AccordianItem } from './Accordion.jsx';

import logo from '../assets/tsubaki.svg'

import Skills from './Skills.jsx';

const About = () => {
  return (
    <section className={`${styles.about}`} id='about'>

      <div className={`${styles.aboutMe}`}>
        <div className={`${styles.flexGrow}`}>
          <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
          <article className={`${styles.content}`}>
            <h2>About Me</h2>
            <div>
                <p>
                    My journey into development began in childhood with an unusual NES clone equipped with a mouse and 
                    keyboard—a setup that instantly sparked my interest in <b><i>low-level mechanics</i></b> and <b><i>system building</i></b> 
                    using tools like Basic. This early curiosity evolved from playing games to analyzing them: 
                    I loved studying bot behavior and creating custom competitive maps, where success depended on understanding 
                    the system from the inside out.
                </p>
                <p>
                    This investigative mindset accelerated around 2012 when I gained full access to my own laptop. 
                    I quickly moved from high-level tools like Game Maker to deeply exploring <b><i>algorithms, C#, 
                    and Visual Studio</i></b>. This led me to develop my own programs, from simple custom browsers to 
                    client applications with database access, solidifying my skills in <b><i>architectural design</i></b> and 
                    <b><i>full-stack logic</i></b>.
                </p>
                <p>
                    A recurring theme in my career is <b><i>rapid adaptation</i></b>. I often dive into a subject, master 
                    the core challenges, and then move on to the next unique problem. This drive for <b><i>novelty and complexity</i></b> 
                    is demonstrated in my diverse project portfolio, ranging from <b><i>embedded C++ systems (IoT)</i></b> and 
                    <b><i>algorithmic image processing</i></b> to creating my own <b><i>frameworks (SOWRL)</i></b> and exploring 
                    <b><i>Augmented Reality (AR)</i></b>.
                </p>
                <p>
                    Having successfully completed my university degree to formalize my knowledge, 
                    I am now a versatile developer who thrives on learning and applying new technologies. 
                    I specialize in building <b><i>robust, full-stack solutions</i></b> and excel at tackling 
                    <b><i>unique technical challenges</i></b> that require out-of-the-box thinking. I am always seeking 
                    the next complex project to contribute my skills.
                </p>
                <p>
                    Let's discuss your next challenging project—reach out below!
                </p>
            </div>
          </article>
          </BigSlide>
        </div>
        <div className={`${styles.flexNoGrow}`}>
          {/*<div className={`${styles.aabb1}`}></div>*/}
          <img className={`${styles.logo}`} src={logo} alt="me" />
        </div>
      </div>

      <div className={`${styles.accordions}`}>
        <Accordian className={`${styles.accordion}`}>
          <AccordianItem value='1' trigger='I have experience with'>
            <Skills></Skills>
          </AccordianItem>
        </Accordian>
      </div>

    </section>
  )
}

export default About