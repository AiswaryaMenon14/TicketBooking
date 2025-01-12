import React from "react";
import useStore from "../store";

function Seats({ rowName, seat, handleClick }) {
  const selectedSeats = useStore((state) => state.selectedSeats);

  return (
    <div className="group relative ">
      <div className="m-5 flex justify-center">
        <button
          key={`${rowName.row_name}${seat}`}
          className={`border border-gray-300 p-4 rounded text-center rounded cursor-pointer ${
            selectedSeats.some(
              (selected) => selected.id === `${rowName.row_name}${seat}`
            )
              ? "bg-red-500"
              : "bg-gray-200 text-black"
          }`}
          onClick={() =>
            handleClick(
              `${rowName.row_name}${seat}`,
              rowName.row_name,
              rowName.row_type,
              rowName.price
            )
          }
        >
          {rowName.row_name}
          {seat}
        </button>
        <span className="absolute top-20 scale-0 transition-all rounded bg-sky-950 p-2 text-xs text-white group-hover:scale-100">
          Seat : {`${rowName.row_name}${seat}`}
          <br />
          Price : {rowName.price}
        </span>
      </div>
    </div>
  );
}

export default Seats;
