import React from "react";
import Seats from "../../components/Seats";

function SeatRow({ row, seats, handleClick }) {
  return (
    <>
     
      <div className="flex justify-start md:justify-center">
        {seats.map((seat) => (
          <Seats
            rowName={row}
            seat={seat}
            handleClick={handleClick}
            key={`${row.row_name}${seat}`}
          />
        ))}
      </div>
    </>
  );
}

export default SeatRow;
