import React, { useEffect,useRef } from 'react';



function ASPCmob({handleAboutMouseEnter,handleAboutMouseLeave,handleServicesMouseEnter,handleServicesMouseLeave,
                  handlePartnersMouseEnter,handlePartnersMouseLeave,handleContactMouseEnter, handleContactMouseLeave,
                  activePage,
                  handleAboutMouseClick,
                  handleServicesMouseClick,
                  handlePartnersMouseClick,
                  handleContactMouseClick,
                  viewBox}) {
   

      const aboutRef = useRef();
      const servicesRef = useRef();
      const partnersRef = useRef();
      const contactRef = useRef();

      /*
      useEffect(()=>{
            if(activePage === ''){
               aboutRef.current.style = 'opacity:1';
               servicesRef.current.style = 'opacity:1';
               partnersRef.current.style = 'opacity:1';
               contactRef.current.style = 'opacity:1';
            }
            if(activePage === '1'){
               aboutRef.current.style = 'opacity:1';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
            }
            if(activePage === '2'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:1';
               partnersRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
            }
            
            
            if(activePage === '3'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:1';
               contactRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
            }   
            if(activePage === '4'){
               aboutRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               servicesRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               partnersRef.current.style = 'opacity:0.2;text-shadow: 0 0 11px #000;';
               contactRef.current.style = 'opacity:1';
            }
      },[activePage]);

      useEffect(()=>{
         aboutRef.current.filter=`${activePage === '1' || activePage==='' ? 'url(#noblur)' : 'url(#blur2)'}`
      },[activePage]);
      */

   return (
        <svg width="100%" height="100%" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="aboutTextFilter" width="20px" height="20px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='1' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>   
                <filter id="servicesTextFilter"  width="20px" height="20px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='2' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>  
                <filter id="partnersTextFilter"  width="20px" height="20px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='3' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter> 
                <filter id="contactTextFilter"  width="20px" height="20px" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={activePage==='4' || activePage==='' ? "0" : "5"}></feGaussianBlur>
                </filter>                 
            </defs>
                <ellipse id="aboutPath" cx={`${viewBox.width/1.8}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.79}`} ry={`${viewBox.height/3.2}`}  />
                <circle onClick={(e)=>handleAboutMouseClick(e)} id="aboutCircle" cx="87.4" cy="228.9" r="30" fill="lighbtlue" />
                <text  
                      onClick={(e)=>handleAboutMouseClick(e)}
                      id="aboutText"
                      filter='url(#aboutTextFilter)'
                      ref={aboutRef}>{activePage === '1' ? 'About' : 'A\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}
                      </text>      


                <ellipse id="servicesPath" cx={`${viewBox.width/1.75}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.7}`} ry={`${viewBox.height/10.9}`}/>
                <circle  onClick={(e)=>handleServicesMouseClick(e)} id="servicesCircle" cx="87.4" cy="228.9" r="30" fill="lightblue"/>      
                <text 
                      onClick={(e)=>handleServicesMouseClick(e)} 
                      id="servicesText"
                      filter='url(#servicesTextFilter)'
                      ref={servicesRef}>{activePage === '2' ? 'Services' : 'S\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}</text>


                <ellipse id="partnersPath" cx={`${viewBox.width/1.8}`} cy={`${viewBox.height/2}`}  rx={`${viewBox.width/2.85}`} ry={`${viewBox.height/4.36}`} />
                <circle  onClick={(e)=>handlePartnersMouseClick(e)}  id="partnersCircle" cx="87.4" cy="228.9" r="30" fill="lightblue"/>             
                <text 
                      onClick={(e)=>handlePartnersMouseClick(e)} 
                      id="partnersText"
                      filter='url(#partnersTextFilter)'
                      ref={partnersRef}>{activePage === '3' ? 'Partners' : 'P\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}</text>


                <ellipse id="contactPath" cx={`${viewBox.width/1.8}`} cy={`${viewBox.height/2}`} rx={`${viewBox.width/2.66}`} ry={`${viewBox.height/2.9}`}  />
                <circle  onClick={(e)=>handleContactMouseClick(e)} id="contactCircle" cx="87.4" cy="228.9" r="30" fill="lightblue"/>        
                <text 
                      onClick={(e)=>handleContactMouseClick(e)} 
                      id="contactText"
                      filter='url(#contactTextFilter)'
                      ref={contactRef}>{activePage === '4' ? 'Contact' : 'C\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}</text> 

        </svg>        
       
  )
}

export default ASPCmob