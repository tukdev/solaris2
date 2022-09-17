import React from 'react';
import './Navbar.css';


function Navbar({color, modalState, activePage, setActivePage, setModalState}) {

    function setNavColor(current) {
        if (modalState === false) {
            return 'black'
        } else {
            if (activePage === current) {
                return color;
            } else {
                return 'gray';
            }
        }
    }

    return (
        <div className='Navbar-container'>
            <div className='navbar'>
                <div className='navbar-link p' onClick={() => {
                    setActivePage('1');
                    setModalState(true)
                }}
                     style={{color: setNavColor('1')}}>
                    <label> 1 </label>

                </div>

                <div className='navbar-link p' onClick={() => {
                    setActivePage('2');
                    setModalState(true)
                }}
                     style={{color: setNavColor('2')}}>
                    <label> 2</label>
                </div>

                <div className='navbar-link p' onClick={() => {
                    setActivePage('3');
                    setModalState(true)
                }}
                     style={{color: setNavColor('3')}}>
                    <label> 3</label>
                </div>

                <div className='navbar-link p' onClick={() => {
                    setActivePage('4');
                    setModalState(true)
                }}
                     style={{color: setNavColor('4')}}>
                    <label> 4</label>
                </div>


            </div>
        </div>
    )
}

export default Navbar