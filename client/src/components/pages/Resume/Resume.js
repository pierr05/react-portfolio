import react from 'react'
import './Resume.css'

export default function Resume() {
    return (
        <>
    <section className='resume-page'>
            <div>
            <ul className='download-resume'>
                <li><a href='/'>Download My Resume</a></li>
            </ul>
        </div>
        <div>
            <h1>Front -End Proficiencies</h1>
            <ul className='front-end'>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>JQuery</li>
            </ul>
        </div>
        <div>
            <h1>Back -End Proficiencies</h1>
            <ul className='back-end'>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
    </section>
        </>
    )
}; 