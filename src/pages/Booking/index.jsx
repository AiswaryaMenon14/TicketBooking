import React from "react";
import Button from "../../components/Button";
import useStore from "../../store";
import toast, { Toaster } from "react-hot-toast";
import Rows from "../SeatRows"
import Summary from "../Summary"
function Booking() {
  const selectedSeats = useStore((state) => state.selectedSeats);

  const handleConfirmation = () => {
    toast("Ticket Confirmed");
  };
  return (
    <div className="md:max-w-screen-md m-auto  py-3">
      <h1 className="md:text-3xl xs:text-base font-bold text-center">
        Seat booking
      </h1>
      <h1 className="sm:text-sm md:text-lg font-bold mb-4 ml-4 md:ml-9">Seats</h1>

      <div className="px-4 sm:px-6 sm:overflow-auto md:overflow-visible">
        <Rows/>
      </div>
      {selectedSeats.length > 0 ? (
        <div className="flex px-6 mt-5">
          <Summary />
          <div className="ml-auto">
            <Button handleConfirmation={handleConfirmation} />
            <Toaster />
          </div>
        </div>
      ):<h3 className="font-bold px-6">Select your preferred seats (You can choose up to 8 seats).</h3>}
    </div>
  );
}

export default Booking;
