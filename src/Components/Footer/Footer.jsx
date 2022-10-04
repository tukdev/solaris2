import React, { useEffect,useState,useRef } from 'react';
import './Footer.css';

import Marquee from 'react-fast-marquee';


function Footer({windowWidth,windowHeight,setNodeHover,color,activePage}) {

  const footerRef=useRef();

  const [footerSpeed, setFooterSpeed] = useState(1);
  let tickerPos=0;

  useEffect(()=>{ 
    const intervalId = setInterval(() => {         
      tickerPos+=footerSpeed;
      footerRef.current.style.transform="translateX(-"+tickerPos+"px)";
      tickerPos=tickerPos>windowWidth?0:tickerPos;      
    }, 10)
    return () => clearInterval(intervalId)
  },[]);


  return (
    <div className='Footer-container'>
        <div ref={footerRef} className="footer-content" style= {{color: color}} >
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
        </div>
    </div>
  )
}

export default Footer