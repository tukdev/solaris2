import './App.css';
import {useState,useEffect,useRef} from 'react';
import {gsap} from 'gsap';

///Importing Components///

import Footer from './Components/Footer/Footer';

import Solaris from './Components/Solaris/Solaris';
import SolarisMobile from './Components/Solaris/SolarisMobile';

import Navbar from './Components/Navbar/Navbar';

import SolarisPreLoader from './Components/SVGs/SolarisPreLoader';


function App() {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    gsap.to(".solarisPreLoader",{duration:2, opacity:0, delay:4});
    setTimeout(()=>setLoading(false),6100);
  },[]);


  const [activePage, setActivePage] = useState('');
  const [modalState, setModalState] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth-1);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight-1);


  const [viewBox,setViewBox] = useState({
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight
  });


  useEffect(()=>{
    function handleNewWindowSize(){
      setWindowWidth(window.innerWidth-1);
      setWindowHeight(window.innerHeight-1);
      setViewBox(`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
      
      window.location.reload();
    }
    window.addEventListener('resize',handleNewWindowSize);    
  },[]);
  
  
  

  const [color, setColor] = useState('black');
  useEffect(()=>{
    if(activePage === ''){
      setColor('black');
    }
    if(activePage === '1'){
      setColor('#68ee95'); 
    }
    if(activePage === '2'){
      setColor('#f6b43b');
    }
    if(activePage === '3'){
      setColor('#5a39df'); 
    }
    if(activePage === '4'){
      setColor('#f350f8'); 
    }

  },[activePage])  


  const navRef = useRef();
  /*
  
  useEffect(()=>{
    gsap.to(navRef.current,{
     duration: 2,
     opacity: 1,
     ease: "linear"
    })
 });
 */




 const [nodeHover, setNodeHover] = useState(false);

  return (
      <div className={modalState || nodeHover ? "App-cursor" : "App"} style={{height:windowHeight}}>
        {loading ?
          <div className='solarisPreLoader'>
            <SolarisPreLoader viewBox={viewBox}/>
          </div>            
        :<></>
        }
        <div className='app-main-section'>
          {window.innerWidth > windowHeight ?
            <Solaris windowWidth={windowWidth} windowHeight={windowHeight} viewBox={viewBox} setNodeHover={setNodeHover} color={color} modalState={modalState} setModalState={setModalState} activePage={activePage} setActivePage={setActivePage}/>
            :
            <SolarisMobile windowWidth={windowWidth} windowHeight={windowHeight} viewBox={viewBox} color={color} modalState={modalState} setModalState={setModalState} activePage={activePage} setActivePage={setActivePage}/>
          } 
          
        </div>
        
        <div ref={navRef} className='app-navbar'>
          <Navbar setNodeHover={setNodeHover} color={color} modalState={modalState} activePage={activePage} setActivePage={setActivePage} setModalState={setModalState}/>
        </div>

        <div className='app-footer-section'>
          <Footer windowWidth={windowWidth} color={color} activePage={activePage}/>
        </div>       
      </div>
  );
}

export default App;
