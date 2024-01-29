import BtnOutLarge from '@/components/Buttons/BtnOutLarge'
import Foooter from '@/components/Landing/Foooter'
import Head from '@/components/Landing/Head'
import React from 'react'
import router from 'next/navigation'

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='relative top-0 '>
        <Head/>
        </div>
        

        <div className='relative top-40 flex w-screen '>

        <div className='left w-1/2 '>
            <div className='flex flex-col ml-24'>

            <div className='text-6xl '>
                Small efforts make           
            </div> 

            <div className='text-6xl mt-3'>
                big <span className='text-primary'>Change</span>
            </div>
            <div className='mt-5 text-lg font-sans'>
                Reach minds, Touch hearts, Move souls, Change Lives.
                We seek out world-changers and difference-makers
                around the globe, and their unique purposes.
            </div>

            <div className='flex mt-3 gap-3  '>
            <BtnOutLarge text="Donate"/>
            <BtnOutLarge text="Volunteer"/>



            </div>                                                                                

            </div>
           


        </div>
        
        <div className='right w-1/2'>

        {/* <img src="pic4.svg" alt="" /> */}

        </div>
        



        </div>

      
       
        
       
        

    </div>
    
    
  )
}

export default Landing