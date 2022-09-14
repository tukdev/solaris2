import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className='Contact-container'>
      <div className='contact-content-wrapper'>
        <div className='contact-content-module'>
          <label>Carolyn Lee</label>
          <label>Co-Director</label>  
        </div>
        <div className='contact-content-module'>
          <label>Polly Chan</label>
          <label>Co-Director</label>
        </div>
        <div className='contact-content-module'>
          <label>Contact us at</label>
          <label>hello@solaris</label>
        </div>
      </div>
    </div>
  )
}

export default Contact