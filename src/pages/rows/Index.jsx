import React from "react";
import useStore from "../../store";
import toast, { Toaster } from 'react-hot-toast';
import SeatRow from "../SeatRow"
function Rows() {
  const { count, addSeat, selectedSeats } = useStore();

  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rows = [
    { id: 1, row_name: "A", row_type: "Silver", price: 100 },
    { id: 2, row_name: "B", row_type: "Silver", price: 100 },
    { id: 3, row_name: "C", row_type: "Gold", price: 150 },
    { id: 4, row_name: "D", row_type: "Gold", price: 150 },
    { id: 5, row_name: "E", row_type: "Platinum", price: 200 },
    { id: 6, row_name: "F", row_type: "Platinum", price: 200 },
  ];
  const handleClick = (id, name, type, price) => {
    const seatExists = selectedSeats.some((seat) => seat.id === id);

    if (seatExists) {
      const updatedSeats = selectedSeats.filter((seat) => seat.id !== id);
      useStore.setState({
        selectedSeats: updatedSeats,
        count: updatedSeats.length,
      });
    } else if (selectedSeats.length < 8) {
      addSeat({ id, name, type, price });
    } else {
  toast('You can only select up to 8 seats')

    }
  };

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id} className="mb-4 ">
          <SeatRow row={row} seats={seats} handleClick={handleClick} />
        </div>
      ))}
    <Toaster />

    </div>
  );
}

export default Rows;
