import React from 'react'
import Home from './Home';
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function Content() {
    return (
        <div className='snap-y snap-mandatory w-screen h-screen overflow-scroll'>
            <Home />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </div>
    )
}

export default Content