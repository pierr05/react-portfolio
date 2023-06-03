import react from 'react';
import { GoMarkGithub } from "react-icons/go"
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './FooterC.css'

export default function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='footer'>
            <ul className='react-icons'>
                <li>
                <a href='https://github.com/pierr05'><GoMarkGithub /></a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/achlet-pierre-37ba95268/'><AiFillLinkedin /></a>
                </li>
                <li>
                <a href='https://twitter.com/ashondabeat'><AiFillTwitterCircle /></a>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
};