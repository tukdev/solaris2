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
               aboutRef.current.style = 'filter: url(#noblur)';
               servicesRef.current.style = 'filter: url(#noblur)';
               partnersRef.current.style = 'filter: url(#noblur)';
               contactRef.current.style = 'filter: url(#noblur)';
            }
            if(activePage === '1'){
               aboutRef.current.style = 'filter: url(#noblur)';
               servicesRef.current.style = 'filter: url(#blur2)';
               partnersRef.current.style = 'filter: url(#blur2)';
               contactRef.current.style = 'filter: url(#blur2)';
            }
            if(activePage === '2'){
               aboutRef.current.style = 'filter: url(#blur2);';
               servicesRef.current.style = 'filter: url(#noblur)';
               partnersRef.current.style = 'filter: url(#blur2)';
               contactRef.current.style = 'filter: url(#blur2)';
            }
            if(activePage === '3'){
               aboutRef.current.style = 'filter: url(#blur2)';
               servicesRef.current.style = 'filter: url(#blur2)';
               partnersRef.current.style = 'filter: url(#noblur)';
               contactRef.current.style = 'filter: url(#blur2)';
            }   
            if(activePage === '4'){
               aboutRef.current.style = 'filter: url(#blur2)';
               servicesRef.current.style = 'filter: url(#blur2)';
               partnersRef.current.style = 'filter: url(#blur2)';
               contactRef.current.style = 'filter: url(#noblur)';
            }
      },[activePage]);

      
   return (
        <svg width="100%" height="100%" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid meet">
            <defs>
                <filter id="noblur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0"></feGaussianBlur>
                </filter>
                <filter id="blur2">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
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
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'}</text>         

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