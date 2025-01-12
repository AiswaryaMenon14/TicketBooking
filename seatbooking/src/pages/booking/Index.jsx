import React from 'react'
import Rows from "../rows/Index"
import Button from '../../components/Button'
import Summary from '../summary/Index'
import useStore from "../../store";
import toast, { Toaster } from 'react-hot-toast';
function Booking() {
  const selectedSeats = useStore((state) => state.selectedSeats);

  const handleConfirmation=()=>{
  toast('Ticket Confirmed')
  }
  return (
    <div className='md:max-w-screen-md m-auto  py-3'>
    <h1 className='md:text-3xl xs:text-base font-bold text-center'>Seat booking</h1>
    <div className="px-4 sm:px-6 md: overflow-auto ">
<Rows/>

    </div>
    {selectedSeats.length>0&& <div className='flex px-6 mt-5'>
    <Summary/>
    <div className='ml-auto'>
    <Button handleConfirmation={handleConfirmation}/>
    <Toaster />
    </div>
    </div>}
   
</div>
  )
}

export default Booking