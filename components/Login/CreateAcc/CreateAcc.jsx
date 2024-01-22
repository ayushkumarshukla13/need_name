import React from 'react'
import SocialBtn from '../Misc/socialBtn'
import TextField from '../Misc/TextField'
import BtnRed from '../Signin/BtnRed'

const CreateAcc = () => {
  return (
    <div>

<div className="flex flex-col justify-between items-center">

<div className='text-5xl mb-3 text-center font-bold'>
    Create Account
</div>

<div className='mb-2 '>
<SocialBtn/>
</div>

<div className='text-sm mt-2 pd-0'>
    or use your email for registration
</div>

<div>
    <div className="flex flex-col justify-around mt-0 gap-2">
        
        <TextField placeholder="Name" types="text"/>

        <TextField placeholder="Email" types="text"/>

        <TextField placeholder="Password" types="password"/>



    </div>
</div>



<div className='mt-3'>
<BtnRed texts="Sign Up"/>     
</div>

</div>
            

    </div>
  )
}

export default CreateAcc