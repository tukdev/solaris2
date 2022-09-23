import React from 'react';
import './Services.css';



function Services({windowWidth, windowHeight}) {
  return (
    <div className='Services-container' style={{width: windowWidth, height: windowHeight*0.95}}>
      <div className='services-content-module'>
        <label>Conferences + Summits</label>
      </div>
      <div className='services-content-module'>
        <label>Team Offsites and Retreats</label>
      </div>
      <div className='services-content-module'>
        <label>Social Events</label>
      </div>
      <div className='services-content-module'>
        <label>Virtual and Hybrid Events</label>
      </div>
      <div className='services-content-module'>
        <label>Custom Events</label>
      </div>
      <div className='services-content-module'>
        <label>Brand + Product Showcases</label>
      </div>
    </div>
  )
}

export default Services