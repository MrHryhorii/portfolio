import React from 'react'
import BigSlide from './BigSlide'

const Contact = () => {
  return (
    <section className='contact'>
      <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
      <article>
        <h1>Contact Me</h1>
        <p>jparsons@ualberta.ca</p>
        <p>jack-parsonss</p>
      </article>
      </BigSlide>
    </section>
  )
}

export default Contact