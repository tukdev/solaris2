import React, {useEffect, useRef, useState} from 'react';
import './Solaris.css';


import Modal from '../Modal/Modal';
import SolarisLogo from '../SVGs/SolarisLogo';
import ASPCsvg from './ASPCsvg';


import {AnimatePresence, motion} from 'framer-motion';


import {gsap} from 'gsap';
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


function Solaris({viewBox, color, modalState, setModalState, activePage, setActivePage}) {

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
    const [aboutStart, setAboutStart] = useState(Math.floor(Math.random() * (30 - 1) + 1));


    const servicesCircleTL = useRef(gsap.timeline());
    const servicesTextTL = useRef(gsap.timeline());
    const [servicesStart, setServicesStart] = useState(Math.floor(Math.random() * (30 - 1) + 1));

    const partnersCircleTL = useRef(gsap.timeline());
    const partnersTextTL = useRef(gsap.timeline());
    const [partnersStart, setPartnersStart] = useState(Math.floor(Math.random() * (30 - 1) + 1));

    const contactCircleTL = useRef(gsap.timeline());
    const contactTextTL = useRef(gsap.timeline());
    const [contactStart, setContactStart] = useState(Math.floor(Math.random() * (30 - 1) + 1));


    /*ABOUT ANIMATION HELPER FUNCTIONS*/

    function aboutAnimation() {
        MotionPathPlugin.convertToPath('#aboutPath');
        aboutCircleTL.current.to('.aboutCircle', {
            duration: 10,
            motionPath: {
                path: '#aboutPath',
                align: '#aboutPath',
                alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            repeat: -1,
        })
            .play(aboutStart);

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
            .play(aboutStart);
    }


    function handleAboutMouseEnter() {
        if (activePage === '') {
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();

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

    function handleAboutMouseClick(e) {
        e.stopPropagation();
        setActivePage('1');
        setModalState(true);
        gsap.fromTo("#aboutText", {opacity: 0}, {opacity: 1}).duration(2)

    }

    function handleAboutSlowDown(speed) {
        aboutCircleTL.current.timeScale(speed);
        aboutTextTL.current.timeScale(speed);
    }

    function handleAboutSpeedUp() {
        aboutCircleTL.current.timeScale(1);
        aboutTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*SERVICES ANIMATION HELPER FUNCTIONS*/
    function servicesAnimation() {
        MotionPathPlugin.convertToPath('#servicesPath');
        servicesCircleTL.current.to('.servicesCircle', {
            duration: 10,
            motionPath: {
                path: '#servicesPath',
                align: '#servicesPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(servicesStart)

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
            .play(servicesStart)
    }

    function handleServicesMouseEnter() {
        if (activePage === '') {
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
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

    function handleServicesMouseClick(e) {
        e.stopPropagation();
        setActivePage('2');
        setModalState(true);
        gsap.fromTo("#servicesText", {opacity: 0}, {opacity: 1}).duration(2)

    }

    function handleServicesSlowDown(speed) {
        servicesCircleTL.current.timeScale(speed);
        servicesTextTL.current.timeScale(speed);
    }

    function handleServicesSpeedUp() {
        servicesCircleTL.current.timeScale(1);
        servicesTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*PARTNERS ANIMATION HELPER FUNCTIONS*/
    function partnersAnimation() {
        MotionPathPlugin.convertToPath('#partnersPath');
        partnersCircleTL.current.to('.partnersCircle', {
            duration: 10,
            motionPath: {
                path: '#partnersPath',
                align: '#partnersPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(partnersStart)

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
            .play(partnersStart)
    }


    function handlePartnersMouseEnter() {
        if (activePage === '') {
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
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

    function handlePartnersMouseClick(e) {
        e.stopPropagation();
        setActivePage('3');
        setModalState(true);
        gsap.fromTo("#partnersText", {opacity: 0}, {opacity: 1}).duration(2)

    }

    function handlePartnersSlowDown(speed) {
        partnersCircleTL.current.timeScale(speed);
        partnersTextTL.current.timeScale(speed);
    }

    function handlePartnersSpeedUp() {
        partnersCircleTL.current.timeScale(1);
        partnersTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*CONTACT ANIMATION HELPER FUNCTIONS*/
    function contactAnimation() {
        MotionPathPlugin.convertToPath('#contactPath');
        contactCircleTL.current.to('.contactCircle', {
            duration: 10,
            motionPath: {
                path: '#contactPath',
                align: '#contactPath',
                alignOrigin: [0.5, 0.5]
            },
            ease: "none",
            repeat: -1
        })
            .play(contactStart)

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
            .play(contactStart)
    }

    function handleContactMouseEnter() {
        if (activePage === '') {
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
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

    function handleContactMouseClick(e) {
        e.stopPropagation();
        setActivePage('4');
        setModalState(true);
        gsap.fromTo("#contactText", {opacity: 0}, {opacity: 1}).duration(2)
    }

    function handleContactSlowDown(speed) {
        contactCircleTL.current.timeScale(speed);
        contactTextTL.current.timeScale(speed);
    }

    function handleContactSpeedUp() {
        contactCircleTL.current.timeScale(1);
        contactTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*****useEFFECT CALLS ANIMATIONS WITH AN EMPTY DEPENDENCY ARRAY*******/
    useEffect(() => {
        aboutAnimation();
        servicesAnimation();
        partnersAnimation();
        contactAnimation();
    }, []);


    /*****MODAL TRANSITION******/


    return (
        <div className='Solaris-container' onClick={() => setModalState(false)}>

            <div ref={logoRef} className="solaris-logo">
                <SolarisLogo/>
            </div>


            <AnimatePresence>
                {modalState &&
                    <motion.div className='solaris-modal'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}>
                        <Modal activePage={activePage} setActivePage={setActivePage}/>
                    </motion.div>
                }
            </AnimatePresence>


            <div className='solaris-circles'>
                <div className='solaris-circles-all'>
                    <div className='solaris-circles-all-container' onClick={() => {
                        setActivePage('');
                        setModalState(false)
                    }}>
                        <ASPCsvg
                            color={color}
                            handleAboutMouseEnter={handleAboutMouseEnter}
                            handleAboutMouseLeave={handleAboutMouseLeave}
                            handleServicesMouseEnter={handleServicesMouseEnter}
                            handleServicesMouseLeave={handleServicesMouseLeave}
                            handlePartnersMouseEnter={handlePartnersMouseEnter}
                            handlePartnersMouseLeave={handlePartnersMouseLeave}
                            handleContactMouseEnter={handleContactMouseEnter}
                            handleContactMouseLeave={handleContactMouseLeave}
                            handleAboutSlowDown={handleAboutSlowDown}
                            handleAboutSpeedUp={handleAboutSpeedUp}
                            handleServicesSlowDown={handleServicesSlowDown}
                            handleServicesSpeedUp={handleServicesSpeedUp}
                            handlePartnersSlowDown={handlePartnersSlowDown}
                            handlePartnersSpeedUp={handlePartnersSpeedUp}
                            handleContactSlowDown={handleContactSlowDown}
                            handleContactSpeedUp={handleContactSpeedUp}
                            handleAboutMouseClick={handleAboutMouseClick}
                            handleServicesMouseClick={handleServicesMouseClick}
                            handlePartnersMouseClick={handlePartnersMouseClick}
                            handleContactMouseClick={handleContactMouseClick}
                            activePage={activePage}
                            viewBox={viewBox}
                        />
                    </div>
                </div>
            </div>


            {modalState &&
                <div onClick={() => {
                    setActivePage('');
                    setModalState(false);
                }} className="solaris-modal-close p"
                     style={{color: color}}>
                    Close
                </div>
            }

        </div>
    )
}

export default Solaris