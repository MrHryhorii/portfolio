import React from 'react'
import BigSlide from './BigSlide'

const Projects = () => {
  return (
    <section className='projects'>
      <h1>Projects</h1>
      <div className='projects-flex'>
        <div className='projects-img'>
          <div className='aabb-2'></div>
        </div>
        <div className='projects-text'>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article>
              <h2>Health Fusion</h2>
              <p>A mobile app built to help manage life.
                Allows users to manage all of their medications,
                with an enjoyable calendar view is available for all users so they can view
                their medication historyfrom the past or look to the future and see what they need to take.
                Finally, users are also given a map view so that they have no problem finding any nearby pharmacies
                or hostiptals if needed.</p>
            </article>
          </BigSlide>
        </div>
      </div> 

    </section>
  )
}

export default Projects