import React from 'react'
import LoginBtn from '../Buttons/LoginBtn'
import SignBtn from '../Buttons/SignBtn'
import BtnTextGhost from '../Buttons/BtnTextGhost'
import Link from 'next/link'

const Head = () => {
  return (
    <div className='w-full flex '>
      
      <div className='w-2/6 flex justify-center items-center'>
          LOGO OR 
      </div>

      <div className='w-3/6 flex items-center '>

        <BtnTextGhost text="ABOUT US"/>
        <BtnTextGhost text="OUR PRESENCE"/>
        <BtnTextGhost text="BLOGS"/>
        <BtnTextGhost text="COMMUNITY"/>

        

      </div>

      <div className='w-2/6 flex justify-center items-center gap-4 '>

        <div className='mt-3'>
        <LoginBtn />
        </div>
       

        <div className='SignUP mt-3'>
          <Link href='/SignUp'>
          <SignBtn/>
          </Link>
        
        </div>

      </div>

    </div>
  )
}

export default Head