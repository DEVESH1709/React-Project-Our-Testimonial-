import React from 'react';
import {FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'

const Card = (props) => {
    let review =props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7.5rem] z-[10] mx-auto'
        ><img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}></img></div>

     <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-8rem] z-[-0] left-[10px]'></div>
        <div className='text-center mt-7'>
            <h4 className=' tracking-wider font-bold text-2xl capitalize'>{review.name}</h4>
            <p className='text-violet-300 uppercase text-sm font-bold'>{review.job}</p>
        </div>

       

        <div className='text-violet-500 mx-auto mt-5'><FaQuoteLeft/></div>

        <div className='text-center mt-4 text-slate-500'>{review.text}</div>
           
           <div className='text-violet-500 mx-auto mt-5'><FaQuoteRight/></div>

    </div>
  )
}

export default Card