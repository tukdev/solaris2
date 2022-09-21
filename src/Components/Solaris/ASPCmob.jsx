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
                     activePage
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
        <svg viewBox="0 0 600 1200" fill="none" width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">

            <ellipse id="aboutPath" cx="300" cy="600" rx="220" ry="300"/>
            <circle id="aboutCircle" cx="87.4" cy="228.9" r="40"/>
            <text onMouseEnter={() => {handleAboutMouseEnter()}}
                  onMouseLeave={() => handleAboutMouseLeave()}
                  id="aboutText"
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'}</text>

            <ellipse id="servicesPath" cx="300" cy="600" rx="200" ry="500"/>
            <circle id="servicesCircle" cx="81.4" cy="228.9" r="40" />
            <text onMouseEnter={() => handleServicesMouseEnter()}
                  onMouseLeave={() => handleServicesMouseLeave()}
                  id="servicesText"
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}</text>

            <ellipse id="partnersPath" cx="300" cy="600" rx="250" ry="450"/>
            <circle id="partnersCircle" cx="87.4" cy="228.9" r="40" />
            <text onMouseEnter={() => handlePartnersMouseEnter()}
                  onMouseLeave={() => handlePartnersMouseLeave()}
                  id="partnersText"
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>

            <ellipse id="contactPath" cx="300" cy="600" rx="260" ry="360"/>
            <circle id="contactCircle" cx="87.4" cy="228.9" r="40" />
            <text onMouseEnter={() => handleContactMouseEnter()}
                  onMouseLeave={() => handleContactMouseLeave()}
                  id="contactText"
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text>
        </svg>

    )
}

export default ASPCmob