import React, {useState, useRef, useEffect} from 'react';
import './Solaris.css';


import Modal from '../Modal/Modal';
import SolarisLogo from '../SVGs/SolarisLogo';
import ASPCmob from './ASPCmob';


import {IoMdClose} from 'react-icons/io';


import {gsap} from 'gsap';
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


function SolarisMobile({color, modalState, setModalState, activePage, setActivePage}) {

    const logoRef = useRef();
    useEffect(() => {
        gsap.to(logoRef.current, {
            duration: 2,
            opacity: 1,
            ease: "linear"
        })
    });


    const aboutCircleTL = useRef(gsap.timeline());
    const aboutTextTL = useRef(gsap.timeline());

    const servicesCircleTL = useRef(gsap.timeline());
    const servicesTextTL = useRef(gsap.timeline());

    const partnersCircleTL = useRef(gsap.timeline());
    const partnersTextTL = useRef(gsap.timeline());

    const contactCircleTL = useRef(gsap.timeline());
    const contactTextTL = useRef(gsap.timeline());


    /*ABOUT ANIMATION HELPER FUNCTIONS*/

    function aboutAnimation() {
        MotionPathPlugin.convertToPath('#aboutPath');
        aboutCircleTL.current.to('#aboutCircle', {
            duration: 10,
            motionPath: {
                path: '#aboutPath',
                align: '#aboutPath',
                alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            repeat: -1,
        })
            .play(5)

        MotionPathPlugin.convertToPath('#aboutPath');
        aboutTextTL.current.to('#aboutText', {
            duration: 10,
            motionPath: {
                path: '#aboutPath',
                align: '#aboutPath',
                alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            repeat: -1,
        })
            .play(5)
    }

    function handleAboutMouseEnter() {
        if (activePage === '') {
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            setActivePage('1');
            setModalState(true);
        } else if (activePage === '1') {
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            console.log('mouse enter');
        }
    }

    function handleAboutMouseLeave() {
        aboutTextTL.current.play();
        aboutCircleTL.current.play();
        console.log('mouse leave');
    }


    /*SERVICES ANIMATION HELPER FUNCTIONS*/
    function servicesAnimation() {
        MotionPathPlugin.convertToPath('#servicesPath');
        servicesCircleTL.current.to('#servicesCircle', {
            duration: 10,
            motionPath: {
                path: '#servicesPath',
                align: '#servicesPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(2)

        servicesTextTL.current.to("#servicesText", {
            duration: 10,
            motionPath: {
                path: '#servicesPath',
                align: '#servicesPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(2)
    }

    function handleServicesMouseEnter() {
        if (activePage === '') {
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
            setActivePage('2');
            setModalState(true);
        } else if (activePage === '2') {
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
            console.log('mouse enter');
        }
    }

    function handleServicesMouseLeave() {
        servicesTextTL.current.play();
        servicesCircleTL.current.play();
        console.log('mouse leave');
    }


    /*PARTNERS ANIMATION HELPER FUNCTIONS*/
    function partnersAnimation() {
        MotionPathPlugin.convertToPath('#partnersPath');
        partnersCircleTL.current.to('#partnersCircle', {
            duration: 10,
            motionPath: {
                path: '#partnersPath',
                align: '#partnersPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(7)

        partnersTextTL.current.to("#partnersText", {
            duration: 10,
            motionPath: {
                path: '#partnersPath',
                align: '#partnersPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(7)
    }

    function handlePartnersMouseEnter() {
        if (activePage === '') {
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
            setActivePage('3');
            setModalState(true);
        } else if (activePage === '3') {
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
            console.log('mouse enter');
        }
    }

    function handlePartnersMouseLeave() {
        partnersTextTL.current.play();
        partnersCircleTL.current.play();
        console.log('mouse leave');
    }


    /*CONTACT ANIMATION HELPER FUNCTIONS*/
    function contactAnimation() {
        MotionPathPlugin.convertToPath('#contactPath');
        contactCircleTL.current.to('#contactCircle', {
            duration: 10,
            motionPath: {
                path: '#contactPath',
                align: '#contactPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(4)

        contactTextTL.current.to("#contactText", {
            duration: 10,
            motionPath: {
                path: '#contactPath',
                align: '#contactPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(4)
    }

    function handleContactMouseEnter() {
        if (activePage === '') {
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
            setActivePage('4');
            setModalState(true);
        } else if (activePage === '4') {
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
            console.log('mouse enter');
        }
    }

    function handleContactMouseLeave() {
        contactTextTL.current.play();
        contactCircleTL.current.play();
        console.log('mouse leave');
    }


    /*****useEFFECT CALLS ANIMATIONS WITH AN EMPTY DEPENDENCY ARRAY*******/
    useEffect(() => {
        aboutAnimation();
        servicesAnimation();
        partnersAnimation();
        contactAnimation();
    }, []);


    /**********ADD BLUR FILTER FOR INACTIVE NODES **********/


    return (
        <div className='Solaris-container'>

            <div ref={logoRef} className="solaris-logo">
                <SolarisLogo/>
            </div>


            <div className={modalState ? 'solaris-modal' : 'solaris-modal-inactive'}>
                <Modal activePage={activePage} setActivePage={setActivePage}/>
            </div>


            <div className='solaris-circles'>
                <div className='solaris-circles-all'>
                    <div className='solaris-circles-all-container'>
                        <ASPCmob handleAboutMouseEnter={handleAboutMouseEnter}
                                 handleAboutMouseLeave={handleAboutMouseLeave}
                                 handleServicesMouseEnter={handleServicesMouseEnter}
                                 handleServicesMouseLeave={handleServicesMouseLeave}
                                 handlePartnersMouseEnter={handlePartnersMouseEnter}
                                 handlePartnersMouseLeave={handlePartnersMouseLeave}
                                 handleContactMouseEnter={handleContactMouseEnter}
                                 handleContactMouseLeave={handleContactMouseLeave}
                                 activePage={activePage}/>
                    </div>
                </div>
            </div>


            {modalState &&
                <div onClick={() => {
                    setActivePage('');
                    setModalState(false);
                }}
                     style={{color: color}} className="solaris-modal-close">
                    Close
                </div>
            }

        </div>
    )
}

export default SolarisMobile