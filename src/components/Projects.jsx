import React from 'react'
import styles from '../css/Projects.module.css';
import BigSlide from './BigSlide'

import arimg from '../assets/2.png'
import renpyimg from '../assets/renpy.avif'
import esp32img from '../assets/esp32s3.jpg'

const Projects = () => {
  return (
    <div className={`${styles.projectList}`} id="projects">
    <section className={`${styles.projects}`}>
      <h2>Projects</h2>
      <div className={`${styles.projectsFlex}`}>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}>
            <img 
              src={arimg}
              alt="AR Scene Interposition Engine"
              className={`${styles.projectImage}`} 
            />
          </div>
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
              <h3>SOWRL: Non-Linear Narrative Framework for Ren'Py</h3>
              <p>A powerful <b><i>Python extension</i></b> that transforms the Ren'Py engine into a <b><i>semi-open world</i></b> platform. 
                Instead of strictly linear paths, SOWRL provides a robust <b><i>MVC architecture</i></b> that separates narrative data 
                from game logic, allowing players to freely explore locations and choose the order in which they pursue 
                storylines. This approach dramatically simplifies development, enabling designers to focus on content. 
                The project demonstrates advanced skills in <b><i>architecture design</i></b>, <b><i>Python tool creation</i></b>, and engineering 
                a complex, <b><i>reusable framework</i></b> for large-scale content management.
              </p>
              <div className={`${styles.tags}`}>
                <span>Python</span>
                <span className={`${styles.renpy}`}>Ren'Py Engine</span>
                <span>MVC Architecture</span>
                <span>Framework Design</span>
              </div>
              <a 
                  className={`${styles.projectLink}`}
                  href="https://github.com/MrHryhorii/SOWRL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <p>Source Code</p>
              </a>
            </article>
          </BigSlide>
        </div>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}>
            <img 
              src={renpyimg}
              alt="SOWRL"
              className={`${styles.projectImage}`} 
            />
          </div>
        </div>
      </div> 

    </section>

    <section className={`${styles.project3}`}>
      <div className={`${styles.projectsFlex}`}>
        <div className={`${styles.flexNoGrow}`}>
          <div className={`${styles.aabb2}`}>
            <img 
              src={esp32img}
              alt="Esp32-S3"
              className={`${styles.projectImage}`} 
            />
          </div>
        </div>
        <div className={`${styles.flexGrow}`}>
          <BigSlide dir="right" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
            <article className={`${styles.card}`}>
              <h3>Sketch Phototrap: Automated IoT Camera System</h3>
              <p>A full <b><i>Internet of Things (IoT) project</i></b> developed on the <b><i>Arduino platform</i></b> using <b><i>C++</i></b>. 
                The system functions as an automated camera trap, utilizing <b><i>Computer Vision techniques</i></b> to 
                detect movement. Instead of a simple hardware sensor, motion is identified by 
                <b><i>analyzing and comparing sequential camera frames</i></b>, looking for significant pixel changes. 
                This algorithmic approach required sophisticated <b><i>C++ programming</i></b> to manage limited hardware 
                resources and achieve <b><i>low-latency detection</i></b>. The project demonstrates unique expertise in 
                <b><i>embedded C++ programming</i></b>, <b><i>low-level image processing</i></b>, and the ability to combine software 
                logic with custom electronics design.
              </p>
              <div className={`${styles.tags}`}>
                <span>Arduino / Microcontrollers</span>
                <span className={`${styles.cpp}`}>C++</span>
                <span>Image Processing / Vision</span>
                <span>IoT / Embedded Programming</span>
              </div>
              <a 
                  className={`${styles.projectLink}`}
                  href="https://github.com/MrHryhorii/sketch_phototrap" 
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
    </div>
  )
}

export default Projects