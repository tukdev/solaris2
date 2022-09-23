import React from 'react';
import './Modal.css';


import {IoMdClose} from 'react-icons/io';
import { Link } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';

import {motion,AnimatePresence} from 'framer-motion';

function Modal({windowWidth, windowHeight, activePage,setActivePage}) {
  
  return (
    <div onClick={()=>setActivePage('')} className='Modal-container'>
        <div className='modal-content'>
            <div className='modal-content-main'>
              {activePage === '1' && 
                <About windowWidth={windowWidth} windowHeight={windowHeight}/>
              }
              {activePage === '2' && 
                <Services windowWidth={windowWidth} windowHeight={windowHeight}/>
              }
              {activePage === '3' && 
                <Partners windowWidth={windowWidth} windowHeight={windowHeight}/>
              }
              {activePage === '4' && 
                <Contact windowWidth={windowWidth} windowHeight={windowHeight}/>
              }
            </div>
        </div>
    </div>
  )
}

export default Modal