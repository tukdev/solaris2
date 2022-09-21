import React, {useEffect, useRef, useState} from 'react';
import './Footer.css';

import {gsap} from 'gsap';

import Marquee from 'react-fast-marquee';

function Footer({color, activePage}) {

    const footerRef = useRef();
    useEffect(() => {
        gsap.to(footerRef.current, {
            duration: 2,
            opacity: 1,
        })
    })
    const [speed, setSpeed] = useState(400)
    const [pauseOnHover, setPauseOnHover] = useState(false)

    function handleSlowDown(){
        setSpeed(100)
    }
    function handleSpeedUp(){
        setSpeed(400)
    }
    function handlePause(){
        setPauseOnHover(true)
    }
    function handlePlay(){
        setPauseOnHover(false)
    }
    return (
        <div className='Footer-container' onMouseEnter={handleSlowDown} onMouseLeave={handleSpeedUp} >
            <div ref={footerRef} className="footer-content">
                <Marquee style={{color: color}} pauseOnHover={pauseOnHover} speed={speed} gradient={false} pauseOnClick={true}>
                    <p>
                        Welcome to The Solariverse – the centre for all things Solaris                        
                        <a onMouseEnter={handlePause} onMouseLeave={handlePlay}
                           style={{all: 'unset', color: color, textDecoration: 'underline', paddingLeft: '100px'}}
                           href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                            Submit a request
                        </a>
                        <span style={{paddingLeft: '100px'}}>
                            Talk to us: hello@solaris.agency
                        </span>
                    </p>
                    <p>
                        Welcome to The Solariverse – the centre for all things Solaris                        
                        <a onMouseEnter={handlePause} onMouseLeave={handlePlay}
                            style={{all: 'unset', color: color, textDecoration: 'underline', paddingLeft: '100px'}}                            
                            href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                            Submit a request
                        </a>
                        <span style={{paddingLeft: '100px'}}>
                            Talk to us: hello@solaris.agency
                        </span>
                    </p>
                </Marquee>
            </div>
        </div>
    )
}

export default Footer