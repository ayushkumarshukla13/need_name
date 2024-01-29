'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';
import { NextResponse } from 'next/server'


const Page = () => {
  const router = useRouter();

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [user, setUser] = useState
    ({
      email: "",
      password: "",
    });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {


    const isEmailValid = validateEmail(user.email);


    if (isEmailValid && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

  }, [user]
  )




  


  const onLogin = async () => {

    try {

      setLoading(true);
      const response = await axios.post('/api/users/login',user )
      toast.success("Login successful");
      router.push("/Incomplete");
    }
    catch (error) {
      console.log("login failed", error.response.data.error);
      toast.error(error.message);


    }

    finally {
      setLoading(false);
    }


  }


  return (
    <div className=' w-screen h-screen flex justify-center items-start'>

      <div className=' w-full md:w-[30%] h-3/4 lg:w-1/4 lg:h-3/4 flex flex-col items-center   relative top-[10%] lg:top-[15%] rounded-2xl shadow-2xl bg-[#F1FAFF]'>

        <div className='text-6xl mt-6'>
          Login
        </div>

        <div className=" shrink-0 w-full h-full">
          <div className=" card-body ">

            <div className="form-control">

              <label htmlFor='username' className="label ">
                email
              </label>

              <input id='email' value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}

                type="email" placeholder="welcome!!!!"
                className="input input-bordered" required />

            </div>


            <div className="form-control">

              <label className="label">
                password
              </label>



              <input id='password' value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="shhhhhhhhh"
                className="input input-bordered"
                // onFocus={showInfoBtn}
                required />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>

            </div>

            <div className="form-control mt-4">

              <button

                onClick={onLogin}
                className="btn btn-primary"
                disabled={buttonDisabled}
                
              >

                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  buttonDisabled ? "Fill the form" : "Login......"
                )}

              </button>



            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Page