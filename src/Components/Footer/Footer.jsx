import React, { useEffect,useState,useRef } from 'react';
import './Footer.css';

import Marquee from 'react-fast-marquee';


function Footer({windowWidth,color,activePage}) {

  const footerRef=useRef();

  const [footerSpeed,setFooterSpeed] = useState(150);
  const [footerPlay,setFooterPlay] = useState(true);

  useEffect(()=>{
    if(windowWidth < 500){
      setFooterSpeed(100);
    }    
  },[]);


  return (
    <div className='Footer-container'>
        <div ref={footerRef} className="footer-content" 
              onMouseEnter={()=>setFooterSpeed(50)} onMouseLeave={()=>setFooterSpeed(150)}>

          <Marquee className="footerMarquee" 
                   style= {{color: color}} 
                   gradient={false} 
                   speed={footerSpeed} 
                   play={footerPlay}
                   > 
            <p>
              Welcome to The Solariverse – the centre for all things Solaris
            </p>
             
            <p>
              <a onMouseEnter={()=>setFooterPlay(false)} onMouseLeave={()=>setFooterPlay(true)}
                style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request.
              </a>
            </p>

            <p>
              Talk to us:
              <a onMouseEnter={()=>setFooterPlay(false)} onMouseLeave={()=>setFooterPlay(true)}
                style={{all:'unset',color:color, textDecoration: 'underline'}}href="mailto:hello@solaris.agency">
                 hello@solaris.agency
              </a>
            </p> 
    
            <p>
              Welcome to The Solariverse – the centre for all things Solaris
            </p>
             
            <p>
              <a onMouseEnter={()=>setFooterPlay(false)} onMouseLeave={()=>setFooterPlay(true)}
                style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request.
              </a>
            </p>

            <p>
              Talk to us:
              <a onMouseEnter={()=>setFooterPlay(false)} onMouseLeave={()=>setFooterPlay(true)}
                style={{all:'unset',color:color, textDecoration: 'underline'}} href="mailto:hello@solaris.agency">
                 hello@solaris.agency
              </a>
            </p> 
          </Marquee>
      
        </div>
    </div>
  )
}

export default Footer