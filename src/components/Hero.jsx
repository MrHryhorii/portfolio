import React from 'react'
import BigSlide from './BigSlide'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-text'>
            <p>Hi, my name is</p>
            <p>Jack Parsons.</p>
            <p>I like to code.</p>
            <hr />
            <p>Computer Science</p>
            <p>Student</p>
        </div>

        <div className='hero-scrollbox'>
            <BigSlide dir="down" distance={500} duration={3000} cascade damping={0.14} triggerOnce>
                <div className='hero-scroll'></div>
            </BigSlide>
        </div>

        <div className='icons'></div>
        <div className='vl'></div>
    </section>
  )
}

export default Hero