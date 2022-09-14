import React,{useState,useRef,useEffect} from 'react';
import './Solaris.css';



import Modal from '../Modal/Modal';
import SolarisLogo from '../SVGs/SolarisLogo';
import ASPCsvg from './ASPCsvg';


import {motion,AnimatePresence} from 'framer-motion';


import {gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);



function Solaris({color,modalState, setModalState, activePage,setActivePage}) {

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
    const [aboutStart,setAboutStart] = useState(Math.floor(Math.random() * (30 - 1) + 1));
    console.log(aboutStart);

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
   
    function aboutAnimation(){
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


    function handleAboutMouseEnter(){
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
        aboutTextTL.current.play();
        aboutCircleTL.current.play();
        console.log('mouse leave');
    }

    function handleAboutMouseClick(e){
        e.stopPropagation();
        setActivePage('1');
        setModalState(true);
    }

    function handleAboutSlowDown(){
        aboutCircleTL.current.timeScale(0.5);
        aboutTextTL.current.timeScale(0.5);
    }
    function handleAboutSpeedUp(){
        aboutCircleTL.current.timeScale(1);
        aboutTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
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
    function handleServicesSlowDown(){
        servicesCircleTL.current.timeScale(0.5);
        servicesTextTL.current.timeScale(0.5);
    }
    function handleServicesSpeedUp(){
        servicesCircleTL.current.timeScale(1);
        servicesTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*PARTNERS ANIMATION HELPER FUNCTIONS*/
    function partnersAnimation(){
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


    function handlePartnersMouseEnter(){
        if(activePage === ''){
            partnersTextTL.current.pause();
            partnersCircleTL.current.pause();
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

    function handlePartnersSlowDown(){
        partnersCircleTL.current.timeScale(0.5);
        partnersTextTL.current.timeScale(0.5);
    }
    function handlePartnersSpeedUp(){
        partnersCircleTL.current.timeScale(1);
        partnersTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
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

    function handleContactSlowDown(){
        contactCircleTL.current.timeScale(0.5);
        contactTextTL.current.timeScale(0.5);
    }
    function handleContactSpeedUp(){
        contactCircleTL.current.timeScale(1);
        contactTextTL.current.timeScale(1);
        console.log('mouse leave speed up');
    }


    /*****useEFFECT CALLS ANIMATIONS WITH AN EMPTY DEPENDENCY ARRAY*******/
    useEffect(()=>{
        aboutAnimation();
        servicesAnimation();
        partnersAnimation();
        contactAnimation();
    },[]);


    /*****MODAL TRANSITION******/
    

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
                <Modal activePage={activePage} setActivePage={setActivePage}/>
            </motion.div>
        }
        </AnimatePresence>
        

        <div className='solaris-circles'>
            <div className='solaris-circles-all'>
                <div className='solaris-circles-all-container' onClick={()=>{setActivePage('');
                                                                             setModalState(false)}}>
                    {/*<ASPCsvg handleAboutMouseEnter={handleAboutMouseEnter}
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
                             />*/}
                    <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                        <path id="aboutPath" d="M900,300 C900,421.50264 765.68542,520 600,520 434.31458,520 300,421.50264 300,300 300,178.49736 434.31458,80 600,80 765.68542,80 900,178.49736 900,300 z"></path>
                        <circle cx="0" cy="0" r="30" fill="none">
                            <animateMotion begin="0s" dur="10s" repeatCount="indefinite">
                                <mpath href="#aboutPath"/>
                            </animateMotion>
                        </circle>
                        <text fill="green">A
                            <animateMotion begin="0s" dur="10s" repeatCount="indefinite">
                                <mpath href="#aboutPath"/>
                            </animateMotion>
                        </text>
                    </svg>         
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