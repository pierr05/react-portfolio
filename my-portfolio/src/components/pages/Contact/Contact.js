import react from 'react';
import './contact.css';
export default function Contact() {
    return (
        <>
            <h1 className='contact'>Contact</h1>

            <form className='contact-form'>
                <div className='form-row'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name'></input>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email'></input>
                <label>Message:</label>
                <textarea cols={45} rows={15} placeholder='Write a message' className='text-area'></textarea>
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </>
    )
}