import React from 'react'

const BtnOver = (props) => {

 

  return (
    <div>
   

      <button className='btn bg-[#FF4B2B] border border-[#FFFFFF]
       pl-10 pr-10
      font-bold
      uppercase
      text-white
      hover:bg-[#FF4B2B]
      '
      onClick={props.handleclick}
      >{props.texts}</button>

    </div>
  )
}

export default BtnOver