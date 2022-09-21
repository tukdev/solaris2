import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className='Contact-container'>
            <div className='contact-content-wrapper'>
                <div className='contact-content-module p'>
                    <label>Carolyn Lee</label>
                    <label>Co-Director</label>
                </div>
                <div className='contact-content-module row p'>
                    <label>Polly Chan</label>
                    <label>Co-Director</label>
                </div>
                <div className='contact-content-module contact-content-module-mail column p'>
                    <label>Contact us at</label>
                    <label>hello@solaris.agency</label>
                </div>
            </div>
        </div>
    )
}

export default Contact