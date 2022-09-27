import React,{useState,useRef,useEffect} from 'react';
import './Solaris.css';



import Modal from '../Modal/Modal';
import SolarisLogo from '../SVGs/SolarisLogo';
import ASPCsvg from './ASPCsvg';
import SolarisPreLoader from '../SVGs/SolarisPreLoader';

import {motion,AnimatePresence} from 'framer-motion';


import {gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);



function Solaris({windowWidth,windowHeight,viewBox,setNodeHover,color,modalState, setModalState, activePage,setActivePage}) {

    const logoRef = useRef();

    function fadeNode(node){
        gsap.fromTo(node,{
            opacity: 0
        },{
            duration: 1,
            opacity: 1,
            ease: 'linear'
        })
    };
    

    const aboutCircleTL = useRef(gsap.timeline());
    const aboutTextTL = useRef(gsap.timeline());
    const [aboutStart,setAboutStart] = useState(Math.floor(Math.random() * 4 + 1));

    const servicesCircleTL = useRef(gsap.timeline());
    const servicesTextTL = useRef(gsap.timeline());
    const [servicesStart, setServicesStart] = useState(Math.floor(Math.random() * 3 + 1));

    const partnersCircleTL = useRef(gsap.timeline());
    const partnersTextTL = useRef(gsap.timeline());
    const [partnersStart, setPartnersStart] = useState(Math.floor(Math.random() * 3 + 7));

    const contactCircleTL = useRef(gsap.timeline());
    const contactTextTL = useRef(gsap.timeline());
    const [contactStart, setContactStart] = useState(Math.floor(Math.random() * 5 + 6));

    


    /*ABOUT ANIMATION HELPER FUNCTIONS*/
   
    function aboutAnimation(){
        MotionPathPlugin.convertToPath('#aboutPath');
        aboutCircleTL.current.to('#aboutCircle', {
        duration: 13,
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
        duration: 13,
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


    function handleAboutMouseEnter(){
        setNodeHover(true);
        if(activePage === ''){
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            
        }
        else if(activePage === '1'){
            aboutTextTL.current.pause();
            aboutCircleTL.current.pause();
            console.log('mouse enter');
        }
    }
    
    function handleAboutMouseLeave(){
        setNodeHover(false);
        aboutTextTL.current.play();
        aboutCircleTL.current.play();
        console.log('mouse leave');
    }

    function handleAboutMouseClick(e){
        e.stopPropagation();
        fadeNode('#aboutText');
        setActivePage('1');
        setModalState(true);
    }

    function handleAboutSlowDown(){
        aboutCircleTL.current.timeScale(0.2);
        aboutTextTL.current.timeScale(0.2);
    }
    function handleAboutSpeedUp(){
        aboutCircleTL.current.timeScale(1);
        aboutTextTL.current.timeScale(1);
    }


    /*SERVICES ANIMATION HELPER FUNCTIONS*/
    function servicesAnimation(){
        MotionPathPlugin.convertToPath('#servicesPath');
        servicesCircleTL.current.to('#servicesCircle', {
            duration: 12,
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
            duration: 12,
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
        setNodeHover(true);
        if(activePage === ''){
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
        }
        else if(activePage === '2'){
            servicesTextTL.current.pause();
            servicesCircleTL.current.pause();
            console.log('mouse enter');
        }
     }
    function handleServicesMouseLeave(){
        setNodeHover(false);
        servicesTextTL.current.play();
        servicesCircleTL.current.play();
    }
    function handleServicesMouseClick(e){
        e.stopPropagation();
        fadeNode('#servicesText');
        setActivePage('2');
        setModalState(true);
    }
    function handleServicesSlowDown(){
        servicesCircleTL.current.timeScale(0.2);
        servicesTextTL.current.timeScale(0.2);
    }
    function handleServicesSpeedUp(){
        servicesCircleTL.current.timeScale(1);
        servicesTextTL.current.timeScale(1);
    }


    /*PARTNERS ANIMATION HELPER FUNCTIONS*/
    function partnersAnimation(){
        MotionPathPlugin.convertToPath('#partnersPath');
        partnersCircleTL.current.to('#partnersCircle', {
            duration: 12,
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
            duration: 12,
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
        setNodeHover(true);
        if(activePage === ''){
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
        }
        else if(activePage === '3'){
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
        }
    }

    function handlePartnersMouseLeave(){
         setNodeHover(false);
         partnersTextTL.current.play();
         partnersCircleTL.current.play();
    }

    function handlePartnersMouseClick(e){
        e.stopPropagation();
        fadeNode('#partnersText');
        setActivePage('3');
        setModalState(true);
    }

    function handlePartnersSlowDown(){
        partnersCircleTL.current.timeScale(0.2);
        partnersTextTL.current.timeScale(0.2);
    }
    function handlePartnersSpeedUp(){
        partnersCircleTL.current.timeScale(1);
        partnersTextTL.current.timeScale(1);
    }


    /*CONTACT ANIMATION HELPER FUNCTIONS*/
    function contactAnimation(){
        MotionPathPlugin.convertToPath('#contactPath');
        contactCircleTL.current.to('#contactCircle', {
            duration: 13,
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
            duration: 13,
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
        setNodeHover(true);
        if(activePage === ''){
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
        }
        else if(activePage === '4'){
            contactTextTL.current.pause();
            contactCircleTL.current.pause();
        }
        
    }
    function handleContactMouseLeave(){
         setNodeHover(false);
         contactTextTL.current.play();
         contactCircleTL.current.play();
    }

    function handleContactMouseClick(e){
        e.stopPropagation();
        fadeNode('#contactText');
        setActivePage('4');
        setModalState(true);
    }

    function handleContactSlowDown(){
        contactCircleTL.current.timeScale(0.2);
        contactTextTL.current.timeScale(0.2);
    }
    function handleContactSpeedUp(){
        contactCircleTL.current.timeScale(1);
        contactTextTL.current.timeScale(1);
    }


    /*****useEFFECT CALLS ANIMATIONS WITH AN EMPTY DEPENDENCY ARRAY*******/
    useEffect(()=>{
        aboutAnimation();
        servicesAnimation();
        partnersAnimation();
        contactAnimation();
    },[]);


  return (
    <div className='Solaris-container' onClick={()=>setModalState(false)}>

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
        

        <div className='solaris-circles'>
            <div className='solaris-circles-all'>
                <div className='solaris-circles-all-container' onClick={()=>{setActivePage('');
                                                                             setModalState(false)}}>
                    <ASPCsvg handleAboutMouseEnter={handleAboutMouseEnter}
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
                             activePage={activePage}
                             handleAboutMouseClick={handleAboutMouseClick}
                             handleServicesMouseClick={handleServicesMouseClick}
                             handlePartnersMouseClick={handlePartnersMouseClick}
                             handleContactMouseClick={handleContactMouseClick}
                             viewBox={viewBox}/>
                             
                </div>
            </div>    
        </div>


        {modalState &&
        <div onClick={()=>{setActivePage('');
                           setModalState(false);}} className="solaris-modal-close"
                           style={{color: color}}>
            Close
        </div>
        }

    </div>
  )
}

export default Solaris