import React from 'react'

function Seats({rowName,seat,handleClick}) {



  return (
    <button
                key={`${rowName.row_name}${seat}`}
                className="border border-gray-300 p-2 rounded text-center"
                onClick={()=>handleClick(seat,rowName.row_name,rowName.row_type)}
              >
                {rowName.row_name}
                {seat}
              </button>
  )
}

export default Seats