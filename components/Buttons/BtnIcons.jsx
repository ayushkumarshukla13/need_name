import React from 'react'

const BtnIcons = (props) => {
  return (
    <div>
      <button className='btn btn-ghost btn-sm'>
        <img src={props.source}  />
      </button>
    </div>
  )
}

export default BtnIcons