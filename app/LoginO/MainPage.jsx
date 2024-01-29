'use client'
import React, { useState } from 'react';
import OverLeft from './OverLeft';
import OverRight from './OverRight';
import CreateAcc from '@/components/Login/CreateAcc/CreateAcc';
import SignIn from '@/components/Login/Signin/SignIn';
import BtnOver from './BtnOver';


export default function MainPage(props) {
  



  const [overlayPosition, setOverlayPosition] = useState(0); // State to track the position of the overlay
  const [isHiddenLeft, setIsHiddenLeft] = useState(false); 
  const [isHiddenRight, setIsHiddenRight] = useState(true); 
  const [overlayPositionF, setOverlayPositionF] = useState(50); // State to track the position of the overlay
  const [isHiddenLeftF, setIsHiddenLeftF] = useState(false); 
  const [isHiddenRightF, setIsHiddenRightF] = useState(true);
  const [btnText, setBtnText] = useState("Login")

  // Function to move the overlay div
    const moveDiv = () => {
    setOverlayPosition(prevPosition => prevPosition === 0 ? 50 : 0); // Toggle the position
    setIsHiddenLeft(hidden => !hidden); // Toggle the visibility of the left div!isHidden) // Toggle the visibility of the left div
    setIsHiddenRight(hidden =>!hidden);
    setOverlayPositionF(prevPosition => prevPosition === 50 ? 0 : 50); // Toggle the position
    setIsHiddenLeftF(hidden => !hidden); // Toggle the visibility of the left div!isHidden) // Toggle the visibility of the left div
    setIsHiddenRightF(hidden =>!hidden);  // Toggle the visibility of the right div!isHidden) // Toggle the visibility of the right div
    setBtnText(text =>text === "Login" ? "Sign in" : "Login" ); 
};
  //control gradient effects and transition timing here
  const overlayStyle =    
  {
    left: `${overlayPosition}%`,
    transition: 'all 0.7s ease-in-out',
    /// make change here:
    background: isHiddenLeftF ? 'linear-gradient(to right, #FF4B2B, #FF416C)' : 'linear-gradient(to right, #FF4B2B, #FF416C)'
  }

  const overLeftStyle =
  {
    transform: `translateX(${isHiddenLeft ? '-100%' : '0%'})`,
    transition: 'transform 0.5s ease-in-out'

  }

  const overRightStyle =
  {
    transform: `translateX(${isHiddenRight ? '100%' : '0%'})`, 
    transition: 'transform 0.5s ease-in-out'


  }

  const creaAccStyle = 
  { 
    
     opacity: isHiddenLeftF ? 0 : 1 ,
     transform: `translateX(${isHiddenLeftF ? '-100%' : '0%'})`, 
     transition: 'all 0.5s ease-in-out' ,



  }
  const signInStyle =
  {
    opacity: isHiddenRightF ? 0 : 1 , 
    transform: `translateX(${isHiddenRightF ? '100%' : '0%'})`,
     transition: 'all 0.5s ease-in-out',
    
  }


  return (
    <div>
    
          <div id='overlay' className=' h-full flex flex-col  justify-center items-center overflow-hidden absolute z-50 w-1/2 '
           style={overlayStyle} >

            <div className='relative'>

            <div id="left" className='absolute z-10'  style={overLeftStyle}>
              <OverLeft/>
            </div>

            <div id="right" className='absoulute z-20'  style={overRightStyle}>
              <OverRight/>
            </div>

            </div>

            <div>
          <BtnOver texts={btnText} handleclick={moveDiv}/>
            </div>
            

          </div>


          <div id='form' className=' h-full flex flex-col  justify-center items-center overflow-hidden absolute z-40 w-1/2'
           style={{ left: `${overlayPositionF}%`, transition: 'left 0.7s ease-in-out' }} >

            <div className='relative'>

            <div id="left" className='absolute z-10'  style={creaAccStyle}>
                
             <CreateAcc/>
             
            </div>

            <div id="right" className='absoulute z-20 left-5'  style={signInStyle}>
            <SignIn/>
            </div>

            </div>
    
          </div>
          
          
        </div>
     
  );
}
