import React from 'react'
import Rows from "../rows/Index"
import Button from '../../components/Button'
import Summary from '../summary/Index'
import useStore from "../../store";
import toast, { Toaster } from 'react-hot-toast';
function Index() {
  const selectedSeats = useStore((state) => state.selectedSeats);

  const handleConfirmation=()=>{
  //  alert('Confirm the ticket')
  toast('Ticket Confirmed')
  }
  return (
    <>
    <h1 className='text-3xl font-bold text-center'>Seat booking</h1>
    <div className='px-9'>
<Rows/>

    </div>
    {selectedSeats.length>0&& <div className='flex px-9 mt-5'>
    <Summary/>
    <div className='ml-auto'>
    <Button handleConfirmation={handleConfirmation}/>
    <Toaster />
    </div>
    </div>}
   
</>
  )
}

export default Index