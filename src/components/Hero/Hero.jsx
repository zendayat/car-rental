import React from 'react'
import './Hero.css'
import {BsFillCalendar2MinusFill} from 'react-icons/bs'
import hCar from '../../Assets/limo3.webp'
// import { motion } from 'framer-motion'

const Hero = () => {
  // const transition = {type: 'spring', duration: 3}
  return (
    <div className='Hero overflow-hidden h-[85vh] md:h-fit lg:h-[84vh] mx-8 mt-7 md:mt-3 rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[#774f3c]/25' id='hero'>
      <div className="flex space-between mx-3 md:mx-1 lg:mx-10">
        <div
        className='Hero-l text-3xl md:text-5xl lg:text-6xl md:text-left absolute mt-8 text-center ml-auto mr-auto md:ml-7'>
          CRAIZEE <br/><span className=' text-[var(--color-button)]'> VIP </span>TRANSFERS

        </div>
        <div
        className="md:absolute mt-[40vh] md:mt-8 ml-auto mr-auto md:ml-[65%]">
          <div className='w-72 md:w-[25vw] lg:w-72 inline-block text-left'>
            Welcome to our limousine rental website.We
            offer luxury transportation services.But I must explain to you how all this mistaken idea of denouncing pleasure.
          </div>
          <a href='#hero'>
            <div className=' flex justify-center align-middle items-center bg-[var(--color-button)] w-fit h-fit md:h-[85%] my-2 py-3 px-6 rounded-lg text-black ml-auto mr-auto md:ml-2 mt-14 md:mt-4'>
              <span>Book Now</span>
            </div>
          </a>
        </div>
        <img src={hCar} className='img absolute w-[70vw] md:w-[58vw]  mt-[138px] md:mt-[60%] lg:mt-[138px] rotate-3 object-cover z-20 lg:z-20 md:z-10 md:ml-32' alt=''/>
      </div>
      <div className=' hidden md:flex relative mt-[59vh] h-44 md:h-fit lg:h-44 bg-[#b28066]/50 rounded-t-3xl items-center justify-center align-middle z-10'>
        <form className=' md:h-fit lg:h-[55%] mx-8  bg-[#bb8e77]/50 rounded-2xl flex justify-between pr-2 pl-8 py-3 w-fit'>
          <div className=' flex md:grid md:grid-cols-2 lg:flex gap-6'>
            <div className=' flex flex-col text-left pr-6 border-r-2 border-white/50 w-fit'>
            <label for="pickup" className=' text-gray-800/75'>Pick up location:</label>
              <select name="pickup" id="pickup" className=' bg-yellow-900/10 text-black w-48' required>
                <option value="airport">Airport</option>
                <option value="hotel">Hotel</option>
                <option value="home">Home</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
              <input type=' text' placeholder=' Enter Location Name' required className=' bg-transparent border border-transparent border-b-black'/>
            </div>
            <div className=' flex flex-col text-left pr-6  border-r-2 border-white/50 w-fit'>
            <label for="pickup" className=' text-gray-800/75'>Drop Off Location:</label>
              <select name="pickup" id="pickup" className=' bg-yellow-900/10 text-black w-48' required>
                <option value="airport">Airport</option>
                <option value="hotel">Hotel</option>
                <option value="home">Home</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
              <input type=' text' placeholder=' Enter Location Name' required className=' bg-transparent border border-transparent border-b-black'/>
            </div>
            <div className=' flex flex-col gap-6 text-left pr-6 border-r-2 border-white/50 w-fit'>
              <span className=' text-gray-800/75'>Pick Up Date:</span>
              <input type='date' required className=' bg-transparent border border-transparent border-b-black'/>
            </div>
            <div className=' flex flex-col gap-6 text-left pr-6 border-r-2 border-white/50 w-fit'>
              <span className=' text-gray-800/75'>Pick Up Time:</span>
              <input type='time' required className=' bg-transparent border border-transparent border-b-black'/>
            </div>
          </div>
          <button type='submit'>
            <div className=' flex flex-col justify-center align-middle items-center bg-[var(--color-button)] w-fit h-[85%] my-2 py-3 px-6 rounded-lg text-black'>
              <BsFillCalendar2MinusFill/>
              <span>Book Now</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero