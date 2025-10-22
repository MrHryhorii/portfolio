import React from 'react'
import BigSlide from './BigSlide'

const Hero = () => {
  return (
    <section className='hero'>

      <div className='hero-text'>
        <p>Hi, my name is</p>
        <p>Jack Parsons.</p>
        <p>I like to code.</p>
        <div className='hero-hl'></div>
        <p>Computer Science</p>
        <p>Student</p>
      </div>

      <div className='hero-scrollbox'>
        <BigSlide dir="down" distance={650} duration={3000} cascade damping={0.14} triggerOnce>
          <div className='hero-scroll'></div>
        </BigSlide>
      </div>

      <div className='hero-side'>
        <BigSlide dir="down" distance={750} duration={3000} cascade damping={0.14} triggerOnce>
          <div className='hero-icon-1'></div>
        </BigSlide>
        <BigSlide dir="down" distance={350} duration={3000} cascade damping={0.14} triggerOnce>
          <div className='hero-icon-2'></div>
        </BigSlide>

        <div className='vl'></div>
      </div>

    </section>
  )
}

export default Hero