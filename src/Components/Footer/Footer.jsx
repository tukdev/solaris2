import React, { useEffect, useState, useRef } from 'react';
import {gsap} from 'gsap';
import './Footer.css';


function Footer({windowWidth,windowHeight,color}) {

  const tickerRef = useRef(gsap.timeline());

  useEffect(()=>{ 
    let mp = document.querySelector(".footer-content");
    tickerRef.current.to(mp,{
      duration:15,
      repeat:-1,
      x:'-50%',
      ease:'linear'
    }) 
  }, []);

  function pauseTicker(){
    tickerRef.current.pause();     
  }
  function resumeTicker(){
    tickerRef.current.play();     
  }
  function slowdownTicker(){
    tickerRef.current.timeScale(0.5);     
  }
  function speedupTicker(){
    tickerRef.current.timeScale(1);      
  }
  return (
    <div className='Footer-container'>
      <div className="footer-content" style= {{color: color}} onMouseEnter={()=>slowdownTicker()} onMouseLeave={()=>speedupTicker()}>
        <p>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p>
          Talk to us:
          <a onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}
            style={{all:'unset',color:color, textDecoration: 'underline'}}href="mailto:hello@solaris.agency">
            hello@solaris.agency
          </a>
        </p> 

        <p>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p>
          Talk to us:
          <a onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}
            style={{all:'unset',color:color, textDecoration: 'underline'}} href="mailto:hello@solaris.agency">
            hello@solaris.agency
          </a>
        </p>       
      </div>
    </div>
  )
}

export default Footer