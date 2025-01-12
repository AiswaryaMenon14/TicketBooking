import React from 'react'

function Button({handleConfirmation}) {

  
  return (
    <button className='rounded border-2 border-indigo-600 p-3'onClick={handleConfirmation}>Book Now</button>
  )
}

export default Button