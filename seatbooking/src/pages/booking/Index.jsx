import React from 'react'
import Rows from "../rows/Index"
import Button from '../../components/Button'
import Summary from '../summary/Index'
function Index() {
  const handleConfirmation=()=>{
   alert('Confirm the ticket')
  }
  return (
    <>
    <h1 className='text-3xl font-bold text-center'>Seat booking</h1>
    <div className='px-9'>
<Rows/>

    </div>
    <div className='flex px-9 mt-5'>
    <Summary/>
    <div className='ml-auto'>
    <Button handleConfirmation={handleConfirmation}/>
    </div>
    </div>
</>
  )
}

export default Index