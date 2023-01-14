import React from 'react'

const Gwedo = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto gap-2 mb-16'>
        <div className="w-full">
            <img src="images/image3.jpg" alt="wedo_image" className='object-fit h-80 w-11/12 rounded-md' />
        </div>
        <div className="">
            <h2 className='font-bold text-2xl mb-8 text-rose-400'>What Gift we do</h2>
            <p className='mb-8 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, error. Quasi, labore impedit. Ipsum, iste magni reiciendis molestias magnam ex.
            </p>
            <form className='ml-2'>
                <input type="radio" id="birthday" />
                <label htmlFor="birthday" className='ml-1 font-medium '>Birthday Gifts</label>
                <br/>
                <input type="radio" id="brideShower"/>
                <label htmlFor="brideShower" className='ml-1 font-medium'>Bride Shower Gifts</label>
                <br/>
                <input type="radio" id="agenda"/>
                <label htmlFor="agenda" className='ml-1 font-medium'>Designed Agenda</label>
                <br/>
                <input type="radio" id="pens"/>
                <label htmlFor="pens" className='ml-1 font-medium'>Designed Pens</label>
                <br/>
            </form>
        </div>
    </div>
  )
}

export default Gwedo