import react from 'react';
import './contact.css';
import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault();
        setEmail("");
        setName("");
        setMessage(""); 
    }

    return (
        <>
            <h1 className='contact'>Contact</h1>

            <form className='contact-form' onSubmit={handleFormSubmit}>
                <div className='form-row'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' required value={name} onChange={e => setName(e.target.value)}></input>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' required value={email} onChange={e => setEmail(e.target.value)}></input>
                <label>Message:</label>
                <textarea cols={45} rows={15} placeholder='Write a message' className='text-area' required value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </>
    )
}