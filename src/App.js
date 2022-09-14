import './App.css';
import {useState,useEffect,useRef} from 'react';


///Importing Components///

import Footer from './Components/Footer/Footer';

import Solaris from './Components/Solaris/Solaris';
import SolarisMobile from './Components/Solaris/SolarisMobile';

import Navbar from './Components/Navbar/Navbar';
import Modal from './Components/Modal/Modal';

import {IoMdClose} from 'react-icons/io';
import { animateVisualElement } from 'framer-motion';


import {gsap} from 'gsap';



function App() {

  const [activePage, setActivePage] = useState('');
  const [modalState, setModalState] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize',handleNewWindowWidth);
    function handleNewWindowWidth(){
        setWindowWidth(window.innerWidth);
    }

  const [color, setColor] = useState('black');
  useEffect(()=>{
    if(activePage === ''){
      setColor('black');
    }
    if(activePage === '1'){
      setColor('#68ee95'); 
    }
    if(activePage === '2'){
      setColor('#f65139');
    }
    if(activePage === '3'){
      setColor('#2338df'); 
    }
    if(activePage === '4'){
      setColor('#f350f8'); 
    }

  },[activePage])  

  const navRef = useRef();
  useEffect(()=>{
    gsap.to(navRef.current,{
     duration: 2,
     opacity: 1,
     ease: "linear"
    })
 });


  return (
      <div className={modalState ? "App-cursor" : "App"}>
        <div className='app-main-section'>
          {window.innerWidth > 500 ?
            <Solaris color={color} modalState={modalState} setModalState={setModalState} activePage={activePage} setActivePage={setActivePage}/>
            :
            <SolarisMobile color={color} modalState={modalState} setModalState={setModalState} activePage={activePage} setActivePage={setActivePage}/>
          } 
        </div>
        <div ref={navRef} className='app-navbar'>
          <Navbar color={color} modalState={modalState} activePage={activePage} setActivePage={setActivePage} setModalState={setModalState}/>
        </div>
        <div className='app-footer-section'>
          <Footer color={color} activePage={activePage}/>
        </div> 
      </div>
  );
}

export default App;
