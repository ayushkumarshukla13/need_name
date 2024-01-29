'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';
import { NextResponse } from 'next/server'

const Page = () => {
    const router = useRouter();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });


    const [buttonDisabled, setButtonDisabled] = useState(false);
    
    const [loading, setLoading] = useState(false);
    const [infoBtn, setInfoBtn] = useState(false);
    const [infoBtn2, setInfoBtn2] = useState(false);
    // const [success, setSuccess] = useState(false);

    const onSignup = async () => {
        
        // toast.success("Welcome");
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            toast.success("Signup Success");
            console.log("Signup success", response.data);
            // setSuccess(true);

            router.push("/Incomplete");


        } 
        catch (error) 
        {
            setUser(
                {
                    email: "",
                    password: "",
                    username: "",
                }
            )
            // Check for 409 status code
            if (error.response && error.response.status === 409) {
              const errorMessage = error.response.data.error; // Access the error message
          
              // Display the error message to the user
              toast.error(errorMessage); // Use your preferred method for displaying errors
            } else {
              // Handle other errors as needed
              console.error("Signup failed due to an unexpected error:", error);
            }
        } 
            
        

        finally
        {
            setLoading(false);
            // router.push("/Incomplete");
        }
    }
    const validateEmail = (email) => {
        // Simple email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password validation: Min 8 characters and at least 1 special character
        const passwordRegex = /^(?=.*[A-Za-z\d])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    };

    useEffect(() => {
        setInfoBtn(user.password.length > 0);
        setInfoBtn2(user.username.length > 0);

        const isEmailValid = validateEmail(user.email);
        const isPasswordValid = validatePassword(user.password);


        if (user.username.length > 5 && isEmailValid && isPasswordValid) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

    }, [user]
    )

    return (
        <div className=' flex flex-col  items-center justify-center lg:flex-row '>

            <div className=' left relative  w-full h-screen  lg:w-1/2 lg:h-screen  flex items-center justify-center '>
               
                <div className='   lg:w-4/5 lg:h-4/5 relative   flex flex-col items-center  rounded-2xl shadow-2xl bg-[#F1FAFF] '>

                    <div className='  mt-3   text-3xl lg:text-6xl text-[#001F3F]'>
                        Sign Up
                    </div>

                    <div className=" shrink-0 w-full h-full">
                        <div className=" card-body ">

                            <div className="form-control">

                                <label htmlFor='username' className="label ">
                                    <span className={`label-text flex justify-center items-center
                                    ${infoBtn2 ? "tooltip" : ""} gap-2`}
                                        data-tip="min 6 chars">username
                                        <span><img src="/info.png" className={`w-4 ${infoBtn2 ? "block" : "hidden"}`} /></span>
                                    </span>
                                </label>

                                <input id='username'
                                    value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    type="text" placeholder="something unique"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control " >

                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input id='email' value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}

                                    type="email" placeholder="we don't spam" className="input input-bordered" required />

                            </div>


                            <div className="form-control">

                                <label className="label">

                                    <span className={`label-text flex justify-center items-center gap-2 ${infoBtn ? "tooltip" : ""} `}
                                        data-tip="Min 8 Chars, 1 special Char"

                                    >Password
                                        <span><img src="/info.png" className={`w-4 ${infoBtn ? "block" : "hidden"}`} /></span>
                                    </span>

                                </label>



                                <input id='password' value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="password"
                                    placeholder="keep it secret!!!"
                                    className="input input-bordered"
                                    // onFocus={showInfoBtn}
                                    required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">

                                <button
                                    onClick={onSignup}
                                    className="btn btn-primary"
                                    disabled={buttonDisabled}>

                                    {loading ? (
                                        <span className="loading loading-spinner loading-md"></span>
                                    ) : (
                                        buttonDisabled ? "Fill the form" : "SignUp"
                                    )}
                                    
                                </button>



                            </div>
                        </div>
                    </div>













                </div>

            </div>


            <div className='right   lg:w-1/2 lg:h-full flex justify-start lg:relative '>

                <div className='lg:relative lg:top-[30%]  flex flex-col'>

                    <div className='text-6xl'>
                        A step closer to
                    </div>
                    <div className='text-6xl mt-3'>
                        <span className='text-primary'>Contributing </span> to our
                    </div>

                    <div className='text-6xl mt-3'>
                        thriving <span className='text-primary'>Community </span>
                    </div>


                </div>



            </div>






        </div>
    )
}

export default Page