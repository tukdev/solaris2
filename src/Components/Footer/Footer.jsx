import React, {useEffect, useRef} from 'react';
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
    return (
        <div className='Footer-container'>
            <div ref={footerRef} className="footer-content">
                <Marquee style={{color: color}} gradient={false} speed={400} pauseOnHover={true} pauseOnClick={true}>
                    <p className='p'>Welcome to The Solariverse – the centre for all things Solaris
                        <a className='p'
                           style={{all: 'unset', color: color, textDecoration: 'underline', paddingLeft: 8}}
                           href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                            Submit a request
                        </a>
                        <span style={{paddingLeft: '100px'}} className='p'>
                            Talk to us: hello@solaris.agency
                  </span>
                    </p>
                    <p className='p'>Welcome to The Solariverse – the centre for all things Solaris
                        <a
                            style={{all: 'unset', color: color, textDecoration: 'underline', paddingLeft: 8}}
                            className='p'
                            href='https://solarisevents.typeform.com/to/NQ5UTUb6?typeform-source=www.google.com'>
                            Submit a request
                        </a>
                        <span className='p' style={{paddingLeft: '100px'}}>
                            Talk to us: hello@solaris.agency
                  </span>
                    </p>
                </Marquee>
            </div>
        </div>
    )
}

export default Footer