'use client'
import React from 'react'
import axios from 'axios'
import Link from 'next/navigation'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Incomplete = () => {

  const router = useRouter();

  
  // const router = useRouter();
  const  onLogout = async () => {

    try {

        await axios.get('/api/users/logout')
        // toast.success(response.message);
        router.push('/Landing');

      
    } catch (error) {
        console.log(error.message);
        toast.error(error.message);
        
      
    }
  }

  const getUserdata = async () => {
     
      try {
        const response  = await axios.get('/api/users/userData');
        console.log(response.data);
        toast.success(response.data.data.email);
        
      } catch (error) {

        console.log(error.message);
        toast.error(error.message);
        
      }

  }

  
  return (
    <div className='w-screen h-screen  flex justify-center items-center'>


        <div className=' flex justify-center items-center '>

            <div className='text-6xl'>
                <span >Site</span> under <span className='text-primary'>Construction</span>
            </div>

            <button onClick={onLogout} className='btn btn-primary btn-lg'>LOGOUT</button>
            <button onClick={getUserdata} className='btn btn-primary btn-lg'>GetUserdata</button>

        </div>


    </div>
  )
}

export default Incomplete