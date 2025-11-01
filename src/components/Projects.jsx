import React from 'react'
import styles from '../css/Projects.module.css';
import BigSlide from './BigSlide'

const Projects = () => {
  return (
    <div className={`${styles.projectList}`} id="projects">
    <section className={`${styles.projects}`}>
      <h2>Projects</h2>
      <div className={`${styles.projectsFlex}`}>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}></div>
        </div>
        <div className={`${styles.flexGrow}`}>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article className={`${styles.card}`}>
              <h3>Health Fusion</h3>
              <p>A mobile app built to help manage life.
                Allows users to manage all of their medications,
                with an enjoyable calendar view is available for all users so they can view
                their medication historyfrom the past or look to the future and see what they need to take.
                Finally, users are also given a map view so that they have no problem finding any nearby pharmacies
                or hostiptals if needed.</p>
              <div className={`${styles.tags}`}><span>Python</span><span>Discord API</span><span>Johns Hopkins API</span></div>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
      </div> 

    </section>

    <section className={`${styles.project2}`}>
      <div className={`${styles.projectsFlex}`}>
        <div className={`${styles.flexGrow}`}>
          <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article className={`${styles.card}`}>
              <h3>Covid-19 Discord Bot</h3>
              <p>A hackathon project for HackED 2021. Using a variety of commands you can retrieve different
                Covid-19 data including cases, test, and vaccines.</p>
              <div className={`${styles.tags}`}><span>Python</span><span>Discord API</span><span>Johns Hopkins API</span></div>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}></div>
        </div>
      </div> 

    </section>

    <section className={`${styles.project3}`}>
      <div className={`${styles.projectsFlex}`}>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}></div>
        </div>
        <div className={`${styles.flexGrow}`}>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article className={`${styles.card}`}>
              <h3>Flavour Flow</h3>
              <p>A hackathon project for Hack The North 2021.
                Allows users to enter ingredients and get recipes.
                The recipe generator maximizes given ingredients and minimizes any missing ingredients,
                using the Spoonacular API.
              </p>
              <div className={`${styles.tags}`}><span>Python</span><span>Discord API</span><span>Johns Hopkins API</span></div>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
      </div> 

    </section>
    </div>
  )
}

export default Projects