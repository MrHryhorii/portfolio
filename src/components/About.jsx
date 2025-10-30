import React from 'react'
import styles from '../css/About.module.css';
import BigSlide from './BigSlide'

const About = () => {
  return (
    <section className={`${styles.about}`} id='about'>

      <div>
        <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
        <article className={`${styles.content}`}>
          <h2>About Me</h2>
          <div>
            <p>👋 Hello My name is Jack Parsons and I am a fourth-year Computer Science Student attending the University of Alberta.</p>
            <p>🏢 I have previously interned at Okta this past summer, and at Psystem the previous summer. With roles as a Software Engineer and a Fullstack Developer respectively.</p>
            <p>🏎️ This year I am co-leading the University of Alberta Formula Racing club's new Autonomous Driving Subsystem from the ground up.</p>
            <p>💥Currently, I am very interested in, and learning about compilers, autonomous driving, and deep learning.</p>
            <p>You can reach out to me on my contact page</p>
          </div>
        </article>
        </BigSlide>
      </div>
      <div>
        <div className={`${styles.aabb1}`}></div>
      </div>

    </section>
  )
}

export default About