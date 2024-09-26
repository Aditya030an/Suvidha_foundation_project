import React from 'react'
import QR_img from "../../image/HelpQR img.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
const HelpNow = () => {
  return (
    <div className=' flex flex-col items-center justify-center mt-[30px] overflow-hidden lg:mx-20 mb-10 scrollbar-hide' data-aos="fade-up" >
      <div className=' text-center my-2'>
        <h1 className='text-3xl md:text-5xl font-semibold text-gray-700'>ACCOUNT DETAILS</h1>
      </div>
      <div className=' w-full lg:w-[900px] p-4 flex flex-wrap items-center justify-center gap-4 bg-slate-200 rounded-lg lg:rounded-2xl'>
        <div className='flex flex-col gap-5 w-[400px]'>
            <h1 className='text-3xl font-medium'>For Indian Donars</h1>
            <p className='text-xl font-medium'>Bank Of Baroda</p>
            <p className='text-xl font-medium'>City: Nagpur</p>
            <p className='text-xl font-medium'>Contact No: +8010996763</p>
            <p className='text-xl font-medium'>Account Name: Suvidha Mahila Mandal</p>
            <p className='text-xl font-medium'>Suvidha Account No: 97840100027609</p>
            <p className='text-xl font-medium'>IFSC Code: BARB0DBKPAR</p>
        </div>
        <div className=' w-[400px]'>
        <h1 className=' text-center text-3xl font-medium'>QR Code</h1>
        <img src={QR_img} alt='QR photo' className='w-full h-full'/>
        </div>
      </div>
    </div>
  )
}

export default HelpNow