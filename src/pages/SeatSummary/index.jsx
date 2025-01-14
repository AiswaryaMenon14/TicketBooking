import React from "react";
import useStore from "../../store";

function SeatSummary() {
  const selectedSeats = useStore((state) => state.selectedSeats);

  // Price of the seats
  const totalPrice = selectedSeats.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  return (
    <div>
      <h3 className="font-bold text-md md:text-2xl underline pb-1 md:pb-3">Summary</h3>
      <span >Selected Seats :</span>{" "}
      {selectedSeats.map((seat,index) => (
        <span className="font-bold"key={seat.id}>{seat.id}{index===selectedSeats.length-1?'':', '}</span>
      ))}
      <br />
      Total Price : <span className="font-bold">Rs. {totalPrice}</span>
    </div>
  );
}

export default SeatSummary;
