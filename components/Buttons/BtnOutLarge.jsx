import React from 'react'

const BtnOutLarge = (props) => {
  return (
    <div>
      <button className='btn btn-lg btn-primary border-2 
      btn-outline w-48 h-18
      text-2xl
      '>{props.text}</button>
    </div>
  )
}

export default BtnOutLarge