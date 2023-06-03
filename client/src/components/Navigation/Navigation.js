import react from 'react';
import './Navigation.css';

function Navigation({currentPage, handlePageChange}) {
    return (
        <section>
            <ul className='links'>
                <li><a href='#about-me' onClick={() => handlePageChange('About')} className={currentPage === 'ABout' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                <li><a href='#portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
                <li><a href='#contact' onClick={() => handlePageChange('Contact')}className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
                <li><a href='#resume' onClick={() => handlePageChange('Resume')}>Resume</a></li>
            </ul>
        </section>    
); 
}

export default Navigation; 