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
              <h3>AR Scene Interposition Engine: Realistic Visual Blending</h3>
              <p>A research-driven mobile application designed to achieve <b><i>unprecedented visual realism</i></b> in Augmented Reality (AR). 
                The main breakthrough is making virtual objects, like a 3D building, <b><i>look like they truly belong</i></b> in the real world. This means if a real tree or building stands in front of the virtual object, the virtual object is correctly hidden (occluded). This challenging effect is achieved by merging precise data from the device’s GPS, compass, and internal sensors with specialized graphical techniques. 
                The project showcases high proficiency in <b><i>mobile development</i></b>, <b><i>sensor integration</i></b>, and advanced <b><i>visual rendering</i></b> for a seamless user experience across iOS and Android.</p>
              <div className={`${styles.tags}`}>
                <span>Unity</span>
                <span className={`${styles.csharp}`}>C#</span>
                <span>Augmented Reality (AR)</span>
                <span>GPS / Geolocation</span>
              </div>
              <a 
                  className={`${styles.projectLink}`}
                  href="https://github.com/MrHryhorii/AR-GPS-Compass-AO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <p>Source Code</p>
              </a>
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