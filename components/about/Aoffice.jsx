import React from 'react'
import Slideri from '../../components/custcurious'
const Aoffice = () => {
  return (
    <div className='container mx-auto mb-28 m'>
      <h1 className='text-2xl  text-center font-bold text-rose-400 mb-8'>Office</h1>
      <div className="grid grid-cols-2">
         {/* image office view */}
           <div>
            <Slideri/>
           </div>
         {/* description */}
         <div className='w-9/12 my-auto'>
           <h1 className='font-bold text-2xl mb-4'>Bridge Design Office</h1>
           <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim commodi doloremque recusandae quos, assumenda ad fugit voluptatibus tenetur reiciendis voluptates adipisci non maxime odio, maiores cupiditate velit nisi ipsam provident?</p>
         </div>
      </div>
     
    </div>
  )
}

export default Aoffice