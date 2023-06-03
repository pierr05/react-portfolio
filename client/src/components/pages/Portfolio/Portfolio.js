import react from 'react'
import mockup from './screenshot00.jpg'
import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <div className='project-1'>
                <img src={mockup} alt='project 1 mock up' width={350} height={250} className='mockup-1'/>
                <div className='project-infos'>
                    <p><b>Name:</b> Gambling Manifesto</p>
                    <p><b>GitHub Repo: </b><a href='https://github.com/Stickkman/gamblingManifesto-Proj01'>gamblingManifesto</a></p>
                    <p><b>Deployed Link: </b><a href='https://stickkman.github.io/gamblingManifesto-Proj01/'>Gambling Manifesto</a></p>
                    <p><b>Role: </b>QA/Testing/Support</p>
                    <p><b>Summary: </b>One Stop shop to help you bet in a rush.</p>
                    <p><b>Tools/Langues: </b>HTML, CSS, jQuery, JavaScript, RapidAPI, Google Fonts, Bulma</p>
                </div>
            </div>
        </>
    )
}; 

export default Portfolio