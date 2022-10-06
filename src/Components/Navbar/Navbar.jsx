import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';


function Navbar({setNodeHover,color,modalState,activePage, setActivePage, setModalState}) {
  
  function setNavColor(current){
    if(modalState === false){
      return 'black'
    }
    else{
      if(activePage === current){
        return color;
      }
      else{
        return '#ededed';
      }
    }
  }

  return (
    <div className='Navbar-container'>
        <div className='navbar' onMouseEnter={()=>setNodeHover(true)} onMouseLeave={()=>setNodeHover(false)}>
          <div className='navbar-link' onClick={()=>{setActivePage('1');
                                                     setModalState(true)}} 
                                                     style={{color: setNavColor('1'), paddingRight:10,paddingLeft:5}}>
            <label > 1 </label>
                   
          </div>

          <div className='navbar-link' onClick={()=>{setActivePage('2');
                                                     setModalState(true)}}
                                                     style={{color: setNavColor('2'), paddingRight:5}}>
            <label> 2</label>
          </div>

          <div className='navbar-link'  onClick={()=>{setActivePage('3');
                                                      setModalState(true)}} 
                                                      style={{color: setNavColor('3'), paddingRight:5}}>
            <label> 3</label>
          </div>

          <div className='navbar-link'  onClick={()=>{setActivePage('4');
                                                      setModalState(true)}}
                                                      style={{color: setNavColor('4'), paddingRight:5}}>
            <label> 4</label>
          </div>

          
        </div>
    </div>
  )
}

export default Navbar