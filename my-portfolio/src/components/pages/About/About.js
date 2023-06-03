import react from 'react';
import './About.css'
import { FaUserCircle } from 'react-icons/fa'

function About(props) {
    return (
        <section className='about' id='about-me'>
            <h1>About Me</h1>
            <p>
                <a href='#about-me'><FaUserCircle className='react-icon-user'/></a>
            </p>
            <p className='first-letter'>
            Hi, my name is Achlet Pierre. I am a front end developer with a background in customer service. Trained at University of Central Florida coding boot camp and certificated in full-stack web development. Creative problem-solver passionate about developing apps; focused on mobile-first design and development. Strengths in creativity, communication, teamwork, and building projects from start to finish.
            </p>
        </section>
    ); 
}

export default About; 