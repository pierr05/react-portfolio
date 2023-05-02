import react from 'react';
import './nav.css';

function Navigation() {
    return (
        <section>
            <ul className='links'>
                <li><a href='../about/about.js'>About Me</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#resume'>Resume</a></li>
            </ul>
        </section>    
); 
}

export default Navigation; 