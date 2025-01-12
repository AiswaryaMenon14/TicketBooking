import React from "react";
import useStore from "../../store";

function Index() {
  const selectedSeats = useStore((state) => state.selectedSeats);

  // Price of the seats
  const totalPrice = selectedSeats.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  return (
    <div>
      <h3 className="font-bold text-2xl underline pb-3">Summary</h3>
      <span className="font-bold">Selected Seats :</span>{" "}
      {selectedSeats.map((seats) => (
        <span className="px-2"key={seats.id}>{seats.id}</span>
      ))}
      <br />
      <span className="font-bold">Total Price :</span> {totalPrice}
    </div>
  );
}

export default Index;
