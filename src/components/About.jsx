import React from 'react'
import BigSlide from './BigSlide'

const About = () => {
  return (
    <section className='about'>

      <div className='about-text'>
        <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false}>
        <article>
          <h1>About Me</h1>
          <p>👋 Hello My name is Jack Parsons and I am a fourth-year Computer Science Student attending the University of Alberta.</p>
          <p>🏢 I have previously interned at Okta this past summer, and at Psystem the previous summer. With roles as a Software Engineer and a Fullstack Developer respectively.</p>
          <p>🏎️ This year I am co-leading the University of Alberta Formula Racing club's new Autonomous Driving Subsystem from the ground up.</p>
          <p>💥Currently, I am very interested in, and learning about compilers, autonomous driving, and deep learning.</p>
          <p>You can reach out to me on my contact page</p>
        </article>
        </BigSlide>
      </div>
      <div className='about-img'>
        <div className='aabb-1'></div>
      </div>

    </section>
  )
}

export default About