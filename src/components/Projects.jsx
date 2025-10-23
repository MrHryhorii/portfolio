import React from 'react'
import styles from '../css/Projects.module.css';
import BigSlide from './BigSlide'

const Projects = () => {
  return (
    <>
    <section className={`${styles.projects}`}>
      <h1>Projects</h1>
      <div className={`${styles.projectsFlex}`}>
        <div>
          <div className={`${styles.aabb2}`}></div>
        </div>
        <div>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article>
              <h2>Health Fusion</h2>
              <p>A mobile app built to help manage life.
                Allows users to manage all of their medications,
                with an enjoyable calendar view is available for all users so they can view
                their medication historyfrom the past or look to the future and see what they need to take.
                Finally, users are also given a map view so that they have no problem finding any nearby pharmacies
                or hostiptals if needed.</p>
              <p>`</p>
              <p>Python · Discord API · Johns Hopkins API</p>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
      </div> 

    </section>

    <section className={`${styles.project2}`}>
      <div className={`${styles.projectsFlex}`}>
        <div>
          <BigSlide dir="left" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article>
              <h2>Covid-19 Discord Bot</h2>
              <p>A hackathon project for HackED 2021. Using a variety of commands you can retrieve different
                Covid-19 data including cases, test, and vaccines.</p>
              <p>`</p>
              <p>Python · Discord API · Johns Hopkins API</p>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
        <div>
          <div className={`${styles.aabb2}`}></div>
        </div>
      </div> 

    </section>

    <section className={`${styles.project3}`}>
      <div className={`${styles.projectsFlex}`}>
        <div>
          <div className={`${styles.aabb2}`}></div>
        </div>
        <div>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article>
              <h2>Flavour Flow</h2>
              <p>A hackathon project for Hack The North 2021.
                Allows users to enter ingredients and get recipes.
                The recipe generator maximizes given ingredients and minimizes any missing ingredients,
                using the Spoonacular API.
              </p>
              <p>`</p>
              <p>Python · Discord API · Johns Hopkins API</p>
              <p>Source Code</p>
            </article>
          </BigSlide>
        </div>
      </div> 

    </section>
    </>
  )
}

export default Projects