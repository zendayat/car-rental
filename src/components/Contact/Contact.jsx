import React from 'react'
import {SiGmail} from 'react-icons/si'
import {RiTwitterFill, RiInstagramLine, RiFacebookBoxFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='contact flex flex-col md:flex-row justify-between mx-20 h-fit md:h-[100vh] mt-20 pb-10' id="contact">
        <div className=' flex flex-col gap-5'>
            <div className=' text-left w-[45vw]'>
                <h1 className=' text-4xl'>CONTACT US</h1>
                <h6 className=' text-inherit mt-4'> We understand that every event is unique, and we strive to accomodate your individual needs.</h6>
            </div>
            <div className=' flex flex-col gap-5 w-[95%] md:w-[70%]'>
                <div className=' flex flex-col gap-3 px-4 py-3 text-center align-middle justify-center bg-[var(--color-button)] hover:text-white hover:duration-300 hover:border-2 rounded-lg hover:border-[var(--color-primary)] hover:bg-transparent w-[60vw] md:w-auto'>
                    <div className=' w-fit mx-auto'><SiGmail className=' text-2xl text-pink-800'/></div>
                    <span>greatlimos@gmail.com</span>
                </div>
                <div className=' flex flex-col gap-3 px-4 py-3 text-center align-middle justify-center bg-sky-600 hover:text-white hover:duration-300 hover:border-2 rounded-lg hover:border-[var(--color-primary)] hover:bg-transparent w-[60vw] md:w-auto'>
                    <div className=' w-fit mx-auto'><RiTwitterFill className=' text-2xl'/></div>
                    <span>CraizeeLimo</span>
                </div>
                <div className=' flex flex-col gap-3 px-4 py-3 text-center align-middle justify-center bg-pink-600 hover:text-white hover:duration-300 hover:border-2 rounded-lg hover:border-[var(--color-primary)] hover:bg-transparent w-[60vw] md:w-auto'>
                    <div className=' w-fit mx-auto'><RiInstagramLine className=' text-2xl'/></div>
                    <span>Craizee_Limos</span>
                </div>
                <div className=' flex flex-col gap-3 px-4 py-3 text-center align-middle justify-center bg-blue-950 hover:text-white hover:duration-300 hover:border-2 rounded-lg hover:border-[var(--color-primary)] hover:bg-transparent w-[60vw] md:w-auto'>
                    <div className=' w-fit mx-auto'><RiFacebookBoxFill className=' text-2xl'/></div>
                    <span>Craizee_Limos</span>
                </div>
            </div>
        </div>
        <div className='form pt-20'>
        <div class="flex justify-center items-center text-black">
    <div class="h-auto w-96  md:w-80 bg-white p-3 rounded-lg">
        <p class="text-xl font-semibold">Payment Details</p>
        <div class="input_text mt-6 relative"> <input type="email" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="Enter Your Email" /> <span class="absolute left-0 text-sm -top-4">Cardholder Email</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
        <div class="input_text mt-6 relative"> <input type="tel" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="Enter Your Phone Number" /> <span class="absolute left-0 text-sm -top-4">Cardholder Number</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
        <div class="input_text mt-8 relative"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span class="absolute left-0 text-sm -top-4">Card Number</span> <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
        <div class="mt-8 flex gap-5 ">
            <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span class="absolute left-0 text-sm -top-4">Expiry</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
            <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span class="absolute left-0 text-sm -top-4">CVV</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
        </div>
        <p class="text-lg text-center mt-4 text-gray-600 font-semibold">Advance amount:$12.98</p>
        <div class="flex justify-center mt-4"> <button class="outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all">Pay</button> </div>
    </div>
</div>

        </div>
    </div>
  )
}

export default Contact
