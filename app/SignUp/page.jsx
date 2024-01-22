import React from 'react'

const page = () => {
    return (
        <div className=' flex flex-col  items-center justify-center lg:flex-row '>

            <div className=' left relative  w-full h-screen  lg:w-1/2 lg:h-screen  flex items-center justify-center '>

                <div className='   lg:w-4/5 lg:h-4/5 relative   flex flex-col items-center  rounded-2xl shadow-2xl bg-[#F1FAFF] '>

                    <div className='  mt-3   text-3xl lg:text-6xl text-[#001F3F]'>
                        Sign Up
                    </div>

                    <div class=" shrink-0 w-full h-full">
                        <form class=" card-body ">

                            <div class="form-control">

                                <label class="label">
                                    <span class="label-text">username</span>
                                </label>
                                <input type="text" placeholder="something unique" class="input input-bordered" required />
                            </div>

                            <div class="form-control">

                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="we don't spam" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="keep it secret!!!" class="input input-bordered" required />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
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

export default page