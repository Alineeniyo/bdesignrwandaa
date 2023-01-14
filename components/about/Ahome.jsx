import React from 'react'

const Ahome = () => {
    const bgimage ={
        background:"rgba(0,0,0,0.6) url(images/image4.jpg)",
        backgroundBlendMode:"darken",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
  return (
    <div className='w-full h-[40rem] mb-14' style={bgimage}> 
        <h1 className='text-white'>About us</h1>
    </div>
  )
}

export default Ahome