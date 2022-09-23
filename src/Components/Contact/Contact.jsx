import React from 'react';
import './Contact.css';


function Contact({windowWidth,windowHeight}) {
  return (
    <div className='Contact-container' style={{width: windowWidth, height: windowHeight*95/100}}>
      <div className='contact-content-wrapper'>
        <div className='contact-content-module'>
          <label>Carolyn Lee, Co-Director</label>  
          <label>Polly Chan, Co-Director</label>
        </div>
        <div className='contact-content-module'>
          <label>Contact us at</label>
          <label>info@solaris.co.uk</label>
        </div>
      </div>
    </div>
  )
}

export default Contact