import React from 'react'

function Button({handleConfirmation}) {

  
  return (
    <button className='rounded border-2 bg-green-600 text-white p-3 fixed bottom-0 left-0 w-full md:static'onClick={handleConfirmation}>Book Now</button>
  )
}

export default Button