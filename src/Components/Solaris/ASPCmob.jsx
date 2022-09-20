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
        <svg viewBox="0 0 1200 2400" fill="none" width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">

            <ellipse id="aboutPath" cx="600" cy="1200" rx="400" ry="220"/>
            <circle id="aboutCircle" cx="87.4" cy="228.9" r="30" fill="lighbtlue"/>
            <text onMouseEnter={() => {
                handleAboutMouseEnter()
            }}
                  onMouseLeave={() => handleAboutMouseLeave()}
                  id="aboutText"
                  ref={aboutRef}>{activePage === '1' ? 'About' : 'A'}</text>

            <ellipse id="servicesPath" cx="600" cy="1200" rx="450" ry="900"/>
            <circle id="servicesCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handleServicesMouseEnter()}
                  onMouseLeave={() => handleServicesMouseLeave()}
                  id="servicesText"
                  ref={servicesRef}>{activePage === '2' ? 'Services' : 'S'}</text>


            <ellipse id="partnersPath" cx="600" cy="1200" rx="430" ry="750"/>
            <circle id="partnersCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handlePartnersMouseEnter()}
                  onMouseLeave={() => handlePartnersMouseLeave()}
                  id="partnersText"
                  ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P'}</text>


            <ellipse id="contactPath" cx="600" cy="1200" rx="420" ry="550"/>
            <circle id="contactCircle" cx="87.4" cy="228.9" r="15" />
            <text onMouseEnter={() => handleContactMouseEnter()}
                  onMouseLeave={() => handleContactMouseLeave()}
                  id="contactText"
                  ref={contactRef}>{activePage === '4' ? 'Contact' : 'C'}</text>

        </svg>

    )
}

export default ASPCmob