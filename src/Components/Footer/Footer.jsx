import React, { useEffect, useState, useRef } from 'react';
import {gsap} from 'gsap';
import './Footer.css';


function Footer({windowWidth,windowHeight,color,setNodeHover}) {

  const tickerRef = useRef(gsap.timeline());
  const testRef = useRef();


  useEffect(()=>{ 
    for (let i = 0; i < 2; i++) {
      var elements = document.querySelector(".footer-content").cloneNode(true);
      document.querySelector(".Footer-container").appendChild(elements);
    }
    
    tickerRef.current.to('.footer-content', {
      x:'-50%',
      repeat:-1,
      ease:'linear', 
      duration: 15,
      });
  }, []);

  function pauseTicker(){
    tickerRef.current.pause();     
    setNodeHover(true);
  }
  function resumeTicker(){
    tickerRef.current.play();    
    setNodeHover(false); 
  }
  function slowdownTicker(){
    tickerRef.current.timeScale(0.5);     
  }
  function speedupTicker(){
    tickerRef.current.timeScale(1);      
  }

  return (
    <div ref={testRef} style={{color: color}} className='Footer-container'>
      <div className="footer-content" onMouseEnter={()=>slowdownTicker()} onMouseLeave={()=>speedupTicker()}>
        <p>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a href='https://solarisagency.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p>
          Talk to us:
          <a onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}
             href="mailto:hello@solaris.agency">
            hello@solaris.agency
          </a>
        </p> 

        <p>
          Welcome to The Solariverse – the centre for all things Solaris
        </p>
         
        <p onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}>
          <a href='https://solarisagency.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
            Submit a request.
          </a>
        </p>

        <p>
          Talk to us:
          <a onMouseEnter={()=>pauseTicker()} onMouseLeave={()=>resumeTicker()}
             href="mailto:hello@solaris.agency">
            hello@solaris.agency
          </a>
        </p>       
      </div>
    </div>
  )
}

export default Footer