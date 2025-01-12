import React from "react";
import useStore from "../store";

function Seats({ rowName, seat, handleClick }) {
  const selectedSeats = useStore((state) => state.selectedSeats);

  return (
    <div className="group relative ">
      <div className="m-2 md:m-3 flex justify-center items-center flex-col">
        <button
          key={`${rowName.row_name}${seat}`}
          className={`border border-gray-300 p-1 md:p-4 md:w-12 w-8 text-xs rounded text-center rounded cursor-pointer ${
            selectedSeats.some(
              (selected) => selected.id === `${rowName.row_name}${seat}`
            )
              ? "bg-green-500 text-white"
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
        <span className="absolute top-9 z-10 w-32 md:w-20 md:top-20 scale-0 transition-all rounded bg-sky-950 p-2 text-xs text-white group-hover:scale-100">
          Price : {rowName.price}
        </span>
      </div>
    </div>
  );
}

export default Seats;
