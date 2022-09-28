import React, { useEffect,useRef } from 'react';



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

      useEffect(()=>{
            if(activePage === ''){
               aboutRef.current.style = 'filter: blur(0px)';
               servicesRef.current.style = 'filter: blur(0px)';
               partnersRef.current.style = 'filter: blur(0px)';
               contactRef.current.style = 'filter: blur(0px)';
            }
            if(activePage === '1'){
               aboutRef.current.style = 'filter: blur(0px)';
               servicesRef.current.style = 'filter: url(#blur)';
               partnersRef.current.style = 'filter: url(#blur)';
               contactRef.current.style = 'filter: url(#blur)';
            }
            if(activePage === '2'){
               aboutRef.current.style = 'filter: url(#blur);';
               servicesRef.current.style = 'filter: blur(0px)';
               partnersRef.current.style = 'filter: url(#blur)';
               contactRef.current.style = 'filter: url(#blur)';
            }
            if(activePage === '3'){
               aboutRef.current.style = 'filter: url(#blur)';
               servicesRef.current.style = 'filter: url(#blur)';
               partnersRef.current.style = 'filter: blur(0px)';
               contactRef.current.style = 'filter: url(#blur)';
            }   
            if(activePage === '4'){
               aboutRef.current.style = 'filter: url(#blur)';
               servicesRef.current.style = 'filter: url(#blur)';
               partnersRef.current.style = 'filter: url(#blur)';
               contactRef.current.style = 'filter: blur(0px)';
            }
      },[activePage]);

      
   return (
        <svg width="100%" height="100%" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid meet">
            <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2,2"></feGaussianBlur>
            </filter>
            <ellipse id="aboutPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.66}`} ry={`${viewBox.height/2.4}`} />
            <circle 
                    onMouseEnter={()=>handleAboutSlowDown()}
                    onMouseLeave={()=>handleAboutSpeedUp()} id="aboutCircle" cx="87.4" cy="228.9" r="70"/>
            <text 
                  onClick={(e)=>handleAboutMouseClick(e)}
                  onMouseEnter={()=>handleAboutMouseEnter()}
                  onMouseLeave={()=>handleAboutMouseLeave()} 
                  id="aboutText"
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'} </text>   
                 

            <ellipse id="servicesPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3.65}`} ry={`${viewBox.height/2.75}`}/>
            <circle  onMouseEnter={()=>handleServicesSlowDown()}
                    onMouseLeave={()=>handleServicesSpeedUp()} id="servicesCircle" cx="81.4" cy="228.9" r="70" fill="lightblue"/>      
            <text onClick={(e)=>handleServicesMouseClick(e)}
                  onMouseEnter={()=>handleServicesMouseEnter()} 
                  onMouseLeave={()=>handleServicesMouseLeave()} 
                  id="servicesText"
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}</text> 
                    


            <ellipse id="partnersPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3.10}`} ry={`${viewBox.height/2.14}`} />
            <circle onMouseEnter={()=>handlePartnersSlowDown()}
                    onMouseLeave={()=>handlePartnersSpeedUp()} id="partnersCircle" cx="87.4" cy="228.9" r="70" fill="lightblue"/>             
            <text onClick={(e)=>handlePartnersMouseClick(e)}
                  onMouseEnter={()=>handlePartnersMouseEnter()} 
                  onMouseLeave={()=>handlePartnersMouseLeave()} 
                  id="partnersText"
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>


            <ellipse id="contactPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.4}`} ry={`${viewBox.height/3}`}  />
            <circle onMouseEnter={()=>handleContactSlowDown()}
                    onMouseLeave={()=>handleContactSpeedUp()} id="contactCircle" cx="87.4" cy="228.9" r="70" fill="lightblue"/>        
            <text onClick={(e)=>handleContactMouseClick(e)}
                  onMouseEnter={()=>handleContactMouseEnter()} 
                  onMouseLeave={()=>handleContactMouseLeave()} 
                  id="contactText"
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text> 

        </svg>        
       
  )
}

export default ASPCsvg