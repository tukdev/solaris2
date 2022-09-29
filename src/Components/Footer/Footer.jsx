import React, { useEffect,useState,useRef } from 'react';
import './Footer.css';

import Marquee from 'react-fast-marquee';


function Footer({windowWidth,windowHeight,setNodeHover,color,activePage}) {

  const footerRef=useRef();

  const [footerSpeed,setFooterSpeed] = useState(50);  

  useEffect(()=>{
    if(windowWidth > windowHeight){
      setFooterSpeed(100);
    }    
  },[]);


  return (
    <div className='Footer-container'>
        <div ref={footerRef} className="footer-content" onMouseEnter={()=>setNodeHover(true)} onMouseLeave={()=>setNodeHover(false)}>

          <Marquee className="footerMarquee" 
                   style= {{color: color}} 
                   gradient={false} 
                   speed={footerSpeed}                    
                   pauseOnHover={true}
                   > 
            <p>
              Welcome to The Solariverse – the centre for all things Solaris
            </p>
             
            <p>
              <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                Submit a request.
              </a>
            </p>

            <p>
              Talk to us:
              <a style={{all:'unset',color:color, textDecoration: 'underline'}}href="mailto:hello@solaris.agency">
                hello@solaris.agency
              </a>
            </p> 
    
            <p>
              Welcome to The Solariverse – the centre for all things Solaris
            </p>
             
            <p>
              <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                Submit a request.
              </a>
            </p>

            <p>
              Talk to us:
              <a style={{all:'unset',color:color, textDecoration: 'underline'}} href="mailto:hello@solaris.agency">
                hello@solaris.agency
              </a>
            </p> 
          </Marquee>
      
        </div>
    </div>
  )
}

export default Footer