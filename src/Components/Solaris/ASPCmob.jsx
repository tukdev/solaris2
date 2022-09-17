import React, {useEffect, useRef} from 'react';


function ASPCmob({
                     handleAboutMouseEnter,
                     handleAboutMouseLeave,
                     handleServicesMouseEnter,
                     handleServicesMouseLeave,
                     handlePartnersMouseEnter,
                     handlePartnersMouseLeave,
                     handleContactMouseEnter,
                     handleContactMouseLeave,
                     activePage,
                     viewBox
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
            servicesRef.current.style = 'filter: blur(20px)';
            partnersRef.current.style = 'filter: blur(20px)';
            contactRef.current.style = 'filter: blur(20px)';
        }
        if (activePage === '2') {
            aboutRef.current.style = 'filter: blur(20px)';
            servicesRef.current.style = 'filter: blur(0px)';
            partnersRef.current.style = 'filter: blur(20px)';
            contactRef.current.style = 'filter: blur(20px)';
        }
        if (activePage === '3') {
            aboutRef.current.style = 'filter: blur(20px)';
            servicesRef.current.style = 'filter: blur(20px)';
            partnersRef.current.style = 'filter: blur(0px)';
            contactRef.current.style = 'filter: blur(20px)';
        }
        if (activePage === '4') {
            aboutRef.current.style = 'filter: blur(20px)';
            servicesRef.current.style = 'filter: blur(20px)';
            partnersRef.current.style = 'filter: blur(20px)';
            contactRef.current.style = 'filter: blur(0px)';
        }
    }, [activePage]);


    return (
        <svg width='100%' height='100%' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} fill="none"  xmlns="http://www.w3.org/2000/svg">

            <ellipse id="aboutPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3}`} ry={`${viewBox.height/10.9}`}/>
            <circle id="aboutCircle" cx="87.4" cy="228.9" r="30" fill="lighbtlue"/>
            <text onMouseEnter={() => handleAboutMouseEnter()}
                  onMouseLeave={() => handleAboutMouseLeave()}
                  id="aboutText"
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'}</text>

            <ellipse id="servicesPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.66}`} ry={`${viewBox.height/2.66}`}/>
            <circle id="servicesCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handleServicesMouseEnter()}
                  onMouseLeave={() => handleServicesMouseLeave()}
                  id="servicesText"
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}</text>
            <ellipse id="partnersPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.79}`} ry={`${viewBox.height/3.2}`}/>
            <circle id="partnersCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handlePartnersMouseEnter()}
                  onMouseLeave={() => handlePartnersMouseLeave()}
                  id="partnersText"
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>
            <ellipse id="contactPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.85}`} ry={`${viewBox.height/4.36}`}/>
            <circle id="contactCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handleContactMouseEnter()}
                  onMouseLeave={() => handleContactMouseLeave()}
                  id="contactText"
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text>
        </svg>

    )
}

export default ASPCmob