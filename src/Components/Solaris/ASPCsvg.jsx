import React, { useEffect,useRef } from 'react';
import gsap from 'gsap';


function ASPCsvg({handleAboutMouseEnter,handleAboutMouseLeave,handleServicesMouseEnter,handleServicesMouseLeave,
                  handlePartnersMouseEnter,handlePartnersMouseLeave,handleContactMouseEnter, handleContactMouseLeave,
                  handleAboutSlowDown, 
                  handleAboutSpeedUp, 
                  handleServicesSlowDown,
                  handleServicesSpeedUp,
                  handlePartnersSlowDown,
                  handlePartnersSpeedUp,
                  handleContactSlowDown,
                  handleContactSpeedUp, 
                  activePage,
                  handleAboutMouseClick,
                  handleServicesMouseClick,
                  handlePartnersMouseClick,
                  handleContactMouseClick,
                  viewBox}) {
   

      const aboutRef = useRef();
      const servicesRef = useRef();
      const partnersRef = useRef();
      const contactRef = useRef();

      /*
      useEffect(()=>{
            if(activePage === ''){
               aboutRef.current.style = 'opacity:1';
               servicesRef.current.style = 'opacity:1';
               partnersRef.current.style = 'opacity:1';
               contactRef.current.style = 'opacity:1';
            }
            if(activePage === '1'){
               aboutRef.current.style = 'opacity:1';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
            }
            if(activePage === '2'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:1';
               partnersRef.current.style = 'opacity:1;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:1;text-shadow: 0 0 11px #000;';
            }
            if(activePage === '3'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:1';
               contactRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
            }   
            if(activePage === '4'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:1';
            }
      },[activePage]);
      */

   
      
   return (
        <svg width="100%" height="100%" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid meet">
            <defs>
                <filter id="aboutTextFilter" width="50px" height="50px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='1' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>   
                <filter id="servicesTextFilter" width="50px" height="50px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='2' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>  
                <filter id="partnersTextFilter" width="50px" height="50px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='3' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter> 
                <filter id="contactTextFilter" width="50px" height="50px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='4' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>             
            </defs>
            <ellipse id="aboutPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.66}`} ry={`${viewBox.height/2.4}`} />
            <circle 
                    onMouseEnter={()=>handleAboutSlowDown()}
                    onMouseLeave={()=>handleAboutSpeedUp()} id="aboutCircle" cx="87.4" cy="228.9" r="70"/>
            <text onClick={(e)=>handleAboutMouseClick(e)}
                  onMouseEnter={()=>handleAboutMouseEnter()}
                  onMouseLeave={()=>handleAboutMouseLeave()} 
                  id="aboutText"
                  filter='url(#aboutTextFilter)'
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'}</text>         

            <ellipse id="servicesPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3.65}`} ry={`${viewBox.height/2.75}`}/>
            <circle  onMouseEnter={()=>handleServicesSlowDown()}
                    onMouseLeave={()=>handleServicesSpeedUp()} id="servicesCircle" cx="81.4" cy="228.9" r="70" fill="lightblue"/>      
            <text onClick={(e)=>handleServicesMouseClick(e)}
                  onMouseEnter={()=>handleServicesMouseEnter()} 
                  onMouseLeave={()=>handleServicesMouseLeave()} 
                  id="servicesText"
                  filter='url(#servicesTextFilter)'
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}</text>

            <ellipse id="partnersPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3.10}`} ry={`${viewBox.height/2.14}`} />
            <circle onMouseEnter={()=>handlePartnersSlowDown()}
                    onMouseLeave={()=>handlePartnersSpeedUp()} id="partnersCircle" cx="87.4" cy="228.9" r="70" fill="lightblue"/>             
            <text onClick={(e)=>handlePartnersMouseClick(e)}
                  onMouseEnter={()=>handlePartnersMouseEnter()} 
                  onMouseLeave={()=>handlePartnersMouseLeave()} 
                  id="partnersText"
                  filter='url(#partnersTextFilter)'
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>

            <ellipse id="contactPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.4}`} ry={`${viewBox.height/3}`}  />
            <circle onMouseEnter={()=>handleContactSlowDown()}
                    onMouseLeave={()=>handleContactSpeedUp()} id="contactCircle" cx="87.4" cy="228.9" r="70" fill="lightblue"/>        
            <text onClick={(e)=>handleContactMouseClick(e)}
                  onMouseEnter={()=>handleContactMouseEnter()} 
                  onMouseLeave={()=>handleContactMouseLeave()} 
                  id="contactText"
                  filter='url(#contactTextFilter)'
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text> 

        </svg>        
       
  )
}

export default ASPCsvg