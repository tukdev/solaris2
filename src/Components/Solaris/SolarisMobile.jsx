import React,{useState,useRef,useEffect} from 'react';
import './Solaris.css';


import Modal from '../Modal/Modal';
import SolarisLogo from '../SVGs/SolarisLogo';
import ASPCmob from './ASPCmob';



import {motion,AnimatePresence} from 'framer-motion';


import {gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);



function SolarisMobile({windowWidth,windowHeight,viewBox,color,modalState, setModalState, activePage,setActivePage}) {

    const logoRef = useRef();
    useEffect(()=>{
       gsap.to(logoRef.current,{
        duration: 2,
        opacity: 1,
        ease: "linear"
       })
    });

    

    const aboutCircleTL = useRef(gsap.timeline());
    const aboutTextTL = useRef(gsap.timeline());
    const [aboutStart,setAboutStart] = useState(Math.floor(Math.random() * (8 - 1) + 1));
    
    const servicesCircleTL = useRef(gsap.timeline());
    const servicesTextTL = useRef(gsap.timeline());
    const [servicesStart, setServicesStart] = useState(Math.floor(Math.random() * (10 - 1) + 1));

    const partnersCircleTL = useRef(gsap.timeline());
    const partnersTextTL = useRef(gsap.timeline());
    const [partnersStart, setPartnersStart] = useState(Math.floor(Math.random() * (9 - 1) + 1));

    const contactCircleTL = useRef(gsap.timeline());
    const contactTextTL = useRef(gsap.timeline());
    const [contactStart, setContactStart] = useState(Math.floor(Math.random() * (10 - 1) + 1));

    


    /*ABOUT ANIMATION HELPER FUNCTIONS*/
   
    function aboutAnimation(){
        MotionPathPlugin.convertToPath('#aboutPath');
        aboutCircleTL.current.to('#aboutCircle', {
        duration: 8,
        motionPath: {
            path: '#aboutPath',
            align: '#aboutPath',
            alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        repeat: -1,
        })
        .play(aboutStart)

        MotionPathPlugin.convertToPath('#aboutPath');
        aboutTextTL.current.to('#aboutText', {
        duration: 8,
        motionPath: {
            path: '#aboutPath',
            align: '#aboutPath',
            alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        repeat: -1,
        })
        .play(aboutStart)
    }

    function handleAboutMouseEnter(){
        if(activePage === ''){
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            setActivePage('1');
            setModalState(true);
        }
        else if(activePage === '1'){
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            console.log('mouse enter');
        }
    }
    function handleAboutMouseLeave(){
        aboutTextTL.current.play();
        aboutCircleTL.current.play();
        console.log('mouse leave');
    }

    function handleAboutMouseClick(e){
        e.stopPropagation();
        setActivePage('1');
        setModalState(true);
    }


    /*SERVICES ANIMATION HELPER FUNCTIONS*/
    function servicesAnimation(){
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
    function handleServicesMouseEnter(){
        if(activePage === ''){
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
            setActivePage('2');
            setModalState(true);
        }
        else if(activePage === '2'){
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
            console.log('mouse enter');
        }
     }
    function handleServicesMouseLeave(){
        servicesTextTL.current.play();
        servicesCircleTL.current.play();
        console.log('mouse leave');
    }
    function handleServicesMouseClick(e){
        e.stopPropagation();
        setActivePage('2');
        setModalState(true);
    }


    /*PARTNERS ANIMATION HELPER FUNCTIONS*/
    function partnersAnimation(){
        MotionPathPlugin.convertToPath('#partnersPath');
        partnersCircleTL.current.to('#partnersCircle', {
            duration: 9,
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
            duration: 9,
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
    function handlePartnersMouseEnter(){
        if(activePage === ''){
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
            setActivePage('3');
            setModalState(true);
        }
        else if(activePage === '3'){
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
            console.log('mouse enter');
        }
    }
    function handlePartnersMouseLeave(){
         partnersTextTL.current.play();
         partnersCircleTL.current.play();
         console.log('mouse leave');
    }
    function handlePartnersMouseClick(e){
        e.stopPropagation();
        setActivePage('3');
        setModalState(true);
    }


    /*CONTACT ANIMATION HELPER FUNCTIONS*/
    function contactAnimation(){
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
    function handleContactMouseEnter(){
        if(activePage === ''){ 
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
            setActivePage('4');
            setModalState(true);
        }
        else if(activePage === '4'){
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
            console.log('mouse enter');
        }
    }
    function handleContactMouseLeave(){
         contactTextTL.current.play();
         contactCircleTL.current.play();
         console.log('mouse leave');
    }
    function handleContactMouseClick(e){
        e.stopPropagation();
        setActivePage('4');
        setModalState(true);
    }


    /*****useEFFECT CALLS ANIMATIONS WITH AN EMPTY DEPENDENCY ARRAY*******/
    useEffect(()=>{
        aboutAnimation();
        servicesAnimation();
        partnersAnimation();
        contactAnimation();
    },[]);



    

  return (
    <div className='Solaris-container'>

        <div ref={logoRef} className="solaris-logo">
            <SolarisLogo/>
        </div>


        <AnimatePresence>
        {modalState &&
            <motion.div className='solaris-modal' 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity:0}}>
                <Modal windowWidth={windowWidth} windowHeight={windowHeight} activePage={activePage} setActivePage={setActivePage}/>
            </motion.div>
        }
        </AnimatePresence>


        <div className='solaris-circles' >
            <div className='solaris-circles-all' >
                <div className='solaris-circles-all-container' onClick={()=>{setActivePage('');
                                                                             setModalState(false)}}>
                    <ASPCmob handleAboutMouseEnter={handleAboutMouseEnter}
                             handleAboutMouseLeave={handleAboutMouseLeave}
                             handleServicesMouseEnter={handleServicesMouseEnter}
                             handleServicesMouseLeave={handleServicesMouseLeave}
                             handlePartnersMouseEnter={handlePartnersMouseEnter}
                             handlePartnersMouseLeave={handlePartnersMouseLeave}
                             handleContactMouseEnter={handleContactMouseEnter}
                             handleContactMouseLeave={handleContactMouseLeave}
                             activePage={activePage}
                             handleAboutMouseClick={handleAboutMouseClick}
                             handlePartnersMouseClick={handlePartnersMouseClick}
                             handleServicesMouseClick={handleServicesMouseClick}
                             handleContactMouseClick={handleContactMouseClick}
                             viewBox={viewBox}/>
                </div>
            </div>    
        </div>


        {modalState &&
        <div onClick={()=>{setActivePage('');
                           setModalState(false);}}
                           style={{color: color}} className="solaris-modal-close">
            Close
        </div>
        }

    </div>
  )
}

export default SolarisMobile