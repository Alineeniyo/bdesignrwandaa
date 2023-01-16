import React from 'react'
import {Wedoboxes} from '../../typing'
type Props = {
    wdob:Wedoboxes[]
}

const wedoBox = ({wdob}:Props) => {
  return (
    <>
        <div className="flex flex-col gap-0  h-90 rounded bg-slate-200 p-4 cursor-pointer">
             <img src="" alt="" className='h-[20rem] md:h-full object-cover'/>
            <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white text-center'>""</h4>
        </div>
    </>
  )
}

export default wedoBox