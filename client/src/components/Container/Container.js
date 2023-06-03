import React, { useState } from "react";

import Navigation from '../Navigation/Navigation'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact';
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About'); 

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        
        return <Portfolio/>
    }; 

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Navigation currentPage = {currentPage} handlePageChange = {handlePageChange}/>
            {renderPage()}
        </div>
    )
}