import React, {useEffect, useRef} from 'react';


function ASPCsvg({
                     handleAboutMouseEnter,
                     handleAboutMouseLeave,
                     handleServicesMouseEnter,
                     handleServicesMouseLeave,
                     handlePartnersMouseEnter,
                     handlePartnersMouseLeave,
                     handleContactMouseEnter,
                     handleContactMouseLeave,
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
                     handleContactMouseClick
                 }) {


    const aboutRef = useRef();
    const servicesRef = useRef();
    const partnersRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        if (activePage === '') {
            aboutRef.current.style = 'filter: blur(0px)';
            servicesRef.current.style = 'filter: blur(0px)';
            partnersRef.current.style = 'filter: blur(0px)';
            contactRef.current.style = 'filter: blur(0px)';
        }
        if (activePage === '1') {
            aboutRef.current.style = 'filter: blur(0px)';
            servicesRef.current.style = 'filter: blur(8px)';
            partnersRef.current.style = 'filter: blur(8px)';
            contactRef.current.style = 'filter: blur(8px)';
        }
        if (activePage === '2') {
            aboutRef.current.style = 'filter: blur(8px)';
            servicesRef.current.style = 'filter: blur(0px)';
            partnersRef.current.style = 'filter: blur(8px)';
            contactRef.current.style = 'filter: blur(8px)';
        }
        if (activePage === '3') {
            aboutRef.current.style = 'filter: blur(8px)';
            servicesRef.current.style = 'filter: blur(8px)';
            partnersRef.current.style = 'filter: blur(0px)';
            contactRef.current.style = 'filter: blur(8px)';
        }
        if (activePage === '4') {
            aboutRef.current.style = 'filter: blur(8px)';
            servicesRef.current.style = 'filter: blur(8px)';
            partnersRef.current.style = 'filter: blur(8px)';
            contactRef.current.style = 'filter: blur(0px)';
        }
    }, [activePage]);

    return (
        <>
            <svg viewBox="0 0 1200 600" width='100%' height='100%' fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse id="aboutPath" cx="600" cy="300" rx="300" ry="220" />
                <circle 
                        onMouseEnter={()=>handleAboutSlowDown()}
                        onMouseLeave={()=>handleAboutSpeedUp()} id="aboutCircle" cx="87.4" cy="228.9" r="40"/>
                <text 
                      onClick={(e)=>handleAboutMouseClick(e)}
                      onMouseEnter={()=>handleAboutMouseEnter()}
                      onMouseLeave={()=>handleAboutMouseLeave()} 
                      id="aboutText"
                      ref={aboutRef}>{activePage === '1' ? 'About' : 'A' }
                      </text> 

                <ellipse id="servicesPath" cx="600" cy="300" rx="500" ry="200"/>
                <circle  onMouseEnter={()=>handleServicesSlowDown()}
                        onMouseLeave={()=>handleServicesSpeedUp()} id="servicesCircle" cx="81.4" cy="228.9" r="40"/>                
                <text onClick={(e)=>handleServicesMouseClick(e)}
                      onMouseEnter={()=>handleServicesMouseEnter()} 
                      onMouseLeave={()=>handleServicesMouseLeave()} 
                      id="servicesText"
                      ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}
                      </text>

                <ellipse id="partnersPath" cx="600" cy="300" rx="450" ry="250" />
                <circle onMouseEnter={()=>handlePartnersSlowDown()}
                        onMouseLeave={()=>handlePartnersSpeedUp()} id="partnersCircle" cx="87.4" cy="228.9" r="40"/>             
                <text onClick={(e)=>handlePartnersMouseClick(e)}
                      onMouseEnter={()=>handlePartnersMouseEnter()} 
                      onMouseLeave={()=>handlePartnersMouseLeave()} 
                      id="partnersText"
                      ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>

                <ellipse id="contactPath" cx="600" cy="300" rx="360" ry="280" />
                <circle onMouseEnter={()=>handleContactSlowDown()}
                        onMouseLeave={()=>handleContactSpeedUp()} id="contactCircle" cx="87.4" cy="228.9" r="40"/>        
                <text onClick={(e)=>handleContactMouseClick(e)}
                      onMouseEnter={()=>handleContactMouseEnter()} 
                      onMouseLeave={()=>handleContactMouseLeave()} 
                      id="contactText"
                      ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text> 
            </svg>            
        </>
    )
}

export default ASPCsvg