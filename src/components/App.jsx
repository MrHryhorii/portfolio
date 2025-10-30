//import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToId={scrollToId}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )

}

export default App
