import React from 'react'
import SocialBtn from '../Misc/socialBtn'
import TextField from '../Misc/TextField'
import BtnRed from './BtnRed'

const LogIn = () => {
    return (

        <div className="  flex flex-col items-center">

            <div className='text-6xl mt-6'>
                Login
            </div>

            <div className=" shrink-0 ">
                <div className=" card-body ">

                    <div className="form-control">

                        <label htmlFor='username' className="label ">
                            username
                        </label>

                        <input id='username'

                            type="text" placeholder="Hi there"
                            className="input input-bordered" required />
                        </div>


                    <div className="form-control">

                        <label className="label">
                            password


                        </label>



                        <input id='password'
                            type="password"
                            placeholder="shhhhhhhhh"
                            className="input input-bordered"
                            // onFocus={showInfoBtn}
                            required />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                    </div>




                </div>
            </div>
            </div>
            )
}

            export default LogIn