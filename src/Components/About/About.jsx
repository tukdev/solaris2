import React from 'react';
import './About.css';


function About({windowWidth,windowHeight}) {
  return (
    <div className='About-container' style={{width: windowWidth, height: windowHeight*0.95}}>
      <div className='about-content'>
         <label> 
         Solaris is a premium events agency dedicated to delivering elevated experiences for the Web3 community and beyond. We are a tight knit team of professionals with backgrounds in Web3, Social Advocacy and the Creative industries. We believe in community, collaboration, innovation and thinking outside of the box. If you are looking for a diverse agency who will work hard to meticulously bring your unique vision and goals to life, then reach out to us at hello@solaris.agency - we look forward to working with you! 💜
          </label>
      </div>
    </div>
  )
}

export default About