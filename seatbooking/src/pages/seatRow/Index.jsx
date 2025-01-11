import React from 'react'
import Seats from '../../components/Seats'

function Index({row,seats,handleClick}) {
  return (
   <>
      <h2 className="font-bold text-indigo-700 mb-2">
            Row {row.row_name} ({row.row_type})
          </h2>
          <div className="flex justify-around">
            {seats.map((seat) => (
             
             <Seats rowName={row}seat={seat} handleClick={handleClick}/>
            ))}
          </div>
      </>
    
  )
}

export default Index