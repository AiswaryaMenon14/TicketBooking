import React from "react";
import Seats from "../../components/Seats";

function Index({ row, seats, handleClick }) {
  return (
    <>
      <h2 className="font-bold text-indigo-700 mb-2">
        Row {row.row_name}{" "}
        <span className=" text-slate-500">({row.row_type})</span>
      </h2>
      <div className="flex justify-around">
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

export default Index;
