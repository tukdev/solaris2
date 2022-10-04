import React, { useEffect,useState,useRef } from 'react';
import './Footer.css';

import Marquee from 'react-fast-marquee';


function Footer({windowWidth,windowHeight,color}) {

  const footerRef=useRef();

  const [intervalID, setIntervalID] = useState(0);
  const [position, setPosition] = useState(0);
  let tickerPos=0;

  useEffect(()=>{ 
    let myIntervalID = setInterval(() => {
      tickerPos+=1;
      footerRef.current.style.transform="translateX(-"+tickerPos+"px)";
      tickerPos=tickerPos>footerRef.current.offsetWidth/2?0:tickerPos;   
      setPosition(tickerPos);
    }, 10)
    setIntervalID(myIntervalID);
    return () => clearInterval(myIntervalID)
  },[]);
  const pauseTicker = ()=> {
    clearInterval(intervalID);
  }
  const resumeTicker = ()=> {
    tickerPos=position;
    let myIntervalID = setInterval(() => {      
      tickerPos+=1;
      footerRef.current.style.transform="translateX(-"+tickerPos+"px)";
      tickerPos=tickerPos>footerRef.current.offsetWidth/2?0:tickerPos;  
      setPosition(tickerPos);  
    }, 10)
    setIntervalID(myIntervalID);
    return () => clearInterval(myIntervalID)
  }
  return (
    <div className='Footer-container' onMouseEnter={pauseTicker} onMouseLeave={resumeTicker}>
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