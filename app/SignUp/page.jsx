'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useRouter } from 'next/navigation'
const Page = () => {
    // const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })


    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);

            // router.push("/login");

        } catch (error) {
            console.log("Signup failed", error.message);

            // toast.error(error.message);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
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

                                <label htmlFor='username' className="label">
                                    <span className="label-text">username</span>
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
                                    <span className="label-text tooltip" data-tip="Min 8 Chars, 1 special Char">Password</span>
                                </label>
                                <input id='password' value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}

                                    type="password" placeholder="keep it secret!!!" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={onSignup}
                                    className="btn btn-primary" disabled={buttonDisabled}>{buttonDisabled ? "Fill the form" : "SignUp"}</button>
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