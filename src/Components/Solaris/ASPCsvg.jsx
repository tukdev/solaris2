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
                     handleContactMouseClick,
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
            <svg width='100%' height='100%' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMid meet'>
                <ellipse id="aboutPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/4}`} ry={`${viewBox.height/2.75}`}/>

                <circle
                    onMouseEnter={() => handleAboutSlowDown(0.8)}
                    onMouseLeave={() => handleAboutSpeedUp()} className="aboutCircle" cx="87.4" cy="228.9" r="100"/>
                <circle
                    onMouseEnter={() => handleAboutSlowDown(0.5)}
                    onMouseLeave={() => handleAboutSpeedUp()} className="aboutCircle" cx="87.4" cy="228.9" r="80"/>
                <circle
                    onMouseEnter={() => handleAboutSlowDown(0.2)}
                    onMouseLeave={() => handleAboutSpeedUp()} 
                    className="aboutCircle" cx="87.4" cy="228.9" r="40"/>
                <ellipse id="servicesPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.4}`} ry={`${viewBox.height/3}`}/>
                <circle
                    onMouseEnter={() => handleServicesSlowDown(0.8)}
                    onMouseLeave={() => handleServicesSpeedUp()} className="servicesCircle" cx="87.4" cy="228.9" r="100"/>
                <circle
                    onMouseEnter={() => handleServicesSlowDown(0.5)}
                    onMouseLeave={() => handleServicesSpeedUp()} className="servicesCircle" cx="87.4" cy="228.9" r="80"/>
                <circle
                    onMouseEnter={() => handleServicesSlowDown(0.2)}
                    onMouseLeave={() => handleServicesSpeedUp()} 
                    className="servicesCircle" cx="87.4" cy="228.9" r="40"/>
                <ellipse id="partnersPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.66}`} ry={`${viewBox.height/2.4}`}/>
                <circle
                    onMouseEnter={() => handlePartnersSlowDown(0.8)}
                    onMouseLeave={() => handlePartnersSpeedUp()} className="partnersCircle" cx="87.4" cy="228.9" r="100"/>
                <circle
                    onMouseEnter={() => handlePartnersSlowDown(0.5)}
                    onMouseLeave={() => handlePartnersSpeedUp()} className="partnersCircle" cx="87.4" cy="228.9" r="80"/>
                <circle
                    onMouseEnter={() => handlePartnersSlowDown(0.2)}
                    onMouseLeave={() => handlePartnersSpeedUp()} className="partnersCircle" cx="87.4" cy="228.9" r="40"/>
                <ellipse id="contactPath" cx={`${viewBox.width/2}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/3.33}`} ry={`${viewBox.height/2.14}`}/>
                <circle
                    onMouseEnter={() => handleContactSlowDown(0.8)}
                    onMouseLeave={() => handleContactSpeedUp()} className="contactCircle" cx="87.4" cy="228.9" r="100"/>
                <circle
                    onMouseEnter={() => handleContactSlowDown(0.5)}
                    onMouseLeave={() => handleContactSpeedUp()} className="contactCircle" cx="87.4" cy="228.9" r="80"/>
                <circle
                    onMouseEnter={() => handleContactSlowDown(0.2)}
                    onMouseLeave={() => handleContactSpeedUp()} className="contactCircle" cx="87.4" cy="228.9" r="40"/>
            </svg>
            <div className='absolute'>
                <p className='p' id='contactText'
                   onClick={(e) => handleContactMouseClick(e)}
                   onMouseEnter={() => handleContactMouseEnter()}
                   onMouseLeave={() => handleContactMouseLeave()}
                   ref={contactRef}>
                    {activePage === '4' ? 'Contact' : 'C'}
                </p>
                <p className='p' id='partnersText'
                   onClick={(e) => handlePartnersMouseClick(e)}
                   onMouseEnter={() => handlePartnersMouseEnter()}
                   onMouseLeave={() => handlePartnersMouseLeave()}
                   ref={partnersRef}>
                    {activePage === '3' ? 'Partners' : 'P'}
                </p>
                <p className='p' id='servicesText'
                   onClick={(e) => handleServicesMouseClick(e)}
                   onMouseEnter={() => handleServicesMouseEnter()}
                   onMouseLeave={() => handleServicesMouseLeave()}
                   ref={servicesRef}>
                    {activePage === '2' ? 'Services' : 'S'}</p>
                <p className='p' id='aboutText'
                   onClick={(e) => handleAboutMouseClick(e)}
                   onMouseEnter={() => handleAboutMouseEnter()}
                   onMouseLeave={() => handleAboutMouseLeave()}
                   ref={aboutRef}>
                    {activePage === '1' ? 'About' : 'A'}
                </p>
            </div>
        </>
    )
}

export default ASPCsvg