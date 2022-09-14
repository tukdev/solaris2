import React, { useEffect,useState,useRef } from 'react';
import './Footer.css';

import {gsap} from 'gsap';

import Marquee from 'react-fast-marquee';

function Footer({color,activePage}) {

  const footerRef=useRef();
  useEffect(()=>{
    gsap.to(footerRef.current,{
      duration: 2,
      opacity: 1,
    })
  })

  const footerP = useRef();
  const footerTL = useRef(gsap.timeline());
  function marqueeAnimation(){
    footerTL.current.to(footerP.current,{
      duration: 10,
      x: '-'+2000,
      repeat: -1,
      ease: 'linear'
    })
  }

  const testRef = useRef(gsap.timeline());

  {/*
  useEffect(()=>{

    gsap.set(".footercontenttext", {
      x: (i) => i * 50
    });
    testRef.current.to('.footercontenttext',{
      duration: 5,
      ease: 'none',
      x: "-=500",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    })
    console.log(testRef.current.time());
  },[])
*/}

  
  
  return (
    <div className='Footer-container'>
        <div ref={footerRef} className="footer-content">
          {/*
          <span ref={footerP} style={{color: color}} className='footer-content-text'>
              Welcome to The Solariverse – the centre for all things
              Solaris <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request 
              </a> 
              Sign-up to our Newsletter Talk to us: hello@solaris.agency
          </span>
          <span ref={footerP} style={{color: color}} className='footer-content-text'>
              Welcome to The Solariverse – the centre for all things
              Solaris <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request 
              </a> 
              Sign-up to our Newsletter Talk to us: hello@solaris.agency
          </span>
          */}


          <Marquee style= {{color: color}}gradient={false} speed={200} pauseOnHover={true} pauseOnClick={true}> 
             <p>Welcome to The Solariverse – the centre for all things
              Solaris <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request
              </a>
              .&nbsp;&nbsp;Sign-up to our Newsletter Talk to us: hello@solaris.agency
              </p>
              <div className='marqueeSpace'>
                &nbsp;
              </div>
              <p >Welcome to The Solariverse – the centre for all things
              Solaris <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request   
              </a> 
              .&nbsp;&nbsp;Sign-up to our Newsletter Talk to us: hello@solaris.agency
              </p>
          </Marquee>
      

          {/*
          <p ref={footerP} style={{color: color}} className='footercontenttext'>
              Welcome to The Solariverse – the centre for all things
              Solaris <a style={{all:'unset',color:color, textDecoration: 'underline'}} href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
              Submit a request 
              </a> 
              Sign-up to our Newsletter Talk to us: hello@solaris.agency
          </p>
      */}
        </div>
    </div>
  )
}

export default Footer