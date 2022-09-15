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
                  handleContactMouseClick}) {
   

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
               servicesRef.current.style = 'filter: blur(8px)';
               partnersRef.current.style = 'filter: blur(8px)';
               contactRef.current.style = 'filter: blur(8px)';
            }
            if(activePage === '2'){
               aboutRef.current.style = 'filter: blur(8px)';
               servicesRef.current.style = 'filter: blur(0px)';
               partnersRef.current.style = 'filter: blur(8px)';
               contactRef.current.style = 'filter: blur(8px)';
            }
            if(activePage === '3'){
               aboutRef.current.style = 'filter: blur(8px)';
               servicesRef.current.style = 'filter: blur(8px)';
               partnersRef.current.style = 'filter: blur(0px)';
               contactRef.current.style = 'filter: blur(8px)';
            }   
            if(activePage === '4'){
               aboutRef.current.style = 'filter: blur(8px)';
               servicesRef.current.style = 'filter: blur(8px)';
               partnersRef.current.style = 'filter: blur(8px)';
               contactRef.current.style = 'filter: blur(0px)';
            }
      },[activePage]);


      let width = window.innerWidth;
      let height = window.innerHeight;

   return (
        <div>
            <div onMouseEnter={()=>handleAboutSlowDown()}
                 onMouseLeave={()=>handleAboutSpeedUp()} id="aboutCircle"></div>            
            <div 
                  onClick={(e)=>handleAboutMouseClick(e)}
                  onMouseEnter={()=>handleAboutMouseEnter()}
                  onMouseLeave={()=>handleAboutMouseLeave()} 
                  id="aboutText"
                  ref={aboutRef}>
                  {activePage === '1' ? 'About' : 'A\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0' }
            </div>
                  
            <div onMouseEnter={()=>handleServicesSlowDown()}
                 onMouseLeave={()=>handleServicesSpeedUp()} id="servicesCircle"></div>        
            <div  onClick={(e)=>handleServicesMouseClick(e)}
                  onMouseEnter={()=>handleServicesMouseEnter()} 
                  onMouseLeave={()=>handleServicesMouseLeave()} 
                  id="servicesText"
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}
            </div>

            <div onMouseEnter={()=>handlePartnersSlowDown()}
                 onMouseLeave={()=>handlePartnersSpeedUp()} id="partnersCircle"></div>
            <div onClick={(e)=>handlePartnersMouseClick(e)}
                  onMouseEnter={()=>handlePartnersMouseEnter()} 
                  onMouseLeave={()=>handlePartnersMouseLeave()} 
                  id="partnersText"
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}
            </div>

            <div onMouseEnter={()=>handleContactSlowDown()}
                 onMouseLeave={()=>handleContactSpeedUp()} id="contactCircle"></div>
            <div onClick={(e)=>handleContactMouseClick(e)}
                  onMouseEnter={()=>handleContactMouseEnter()} 
                  onMouseLeave={()=>handleContactMouseLeave()} 
                  id="contactText"
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}</div>
        </div>       
  )
}

export default ASPCsvg