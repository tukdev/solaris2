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
    tickerRef.current.timeScale(0);     
  }
  function slowdownTicker(){
    tickerRef.current.timeScale(0.5);     
  }
  function resumeTicker(){
    tickerRef.current.timeScale(1);      
  }
  return (
    <div className='Footer-container'>
      <div className="footer-content" style= {{color: color}}>
        <p onMouseEnter={()=>slowdownTicker()} onMouseLeave={()=>resumeTicker()}>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          Talk to us:
          <a style={{all:'unset',color:color, textDecoration: 'underline'}}href="mailto:hello@solaris.agency">
            hello@solaris.agency
          </a>
        </p> 

        <p onMouseEnter={()=>slowdownTicker()} onMouseLeave={()=>resumeTicker()}>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
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