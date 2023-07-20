import React from 'react'
import {BsPeople} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BiSolidBriefcase} from 'react-icons/bi'
import limo from '../../Assets/airlimo.jpeg'
const Fleet = () => {
  return (
    <div className='Fleet bg-[var(--color-secondary)] h-fit md:h-[90vh] mx-8 mt-20 rounded-xl pb-4' id="fleets">
      <div className='fleet_heading flex flex-col md:flex-row md:justify-between mx-2 md:mx-20 pt-16'>
        <div className=' text-left'>
          <h1 className=' text-4xl'>OUR FLEET</h1>
          <h6 className=' text-inherit mt-4'> Browse through our carefully<br/>picked fleet.</h6>
        </div>
        <div mt-auto>
          <nav className=' flex flex-col md:flex-row gap-1 md:gap-3'>
            <div className=' hover:cursor-pointer py-2 px-2 hover:bg-[var(--color-button)] hover:rounded-xl duration-300'>All</div>
            <div className=' hover:cursor-pointer py-2 px-2 hover:bg-[var(--color-button)] hover:rounded-xl duration-300'>Luxury</div>
            <div className=' hover:cursor-pointer py-2 px-2 hover:bg-[var(--color-button)] hover:rounded-xl duration-300'>Business</div>
            <div className=' hover:cursor-pointer py-2 px-2 hover:bg-[var(--color-button)] hover:rounded-xl duration-300'>Crossover</div>
          </nav>
          <div className=' mx-auto mt-3 h-1 w-[70%] bg-[var(--color-background)]'></div>
        </div>
      </div>
      <div className='fleet_cars mx-9 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className=' hover:cursor-pointer flex flex-col border border-black/50 shadow-lg w-fit px-2 py-2 shadow-black mx-auto'>
        <img src={limo} alt='' className=' rounded-xl object-cover w-[98vw] md:w-[20vw]'/>
        <div className=' w-fit mt-2'><h6>Mercedes Revolt</h6></div>
        <div className='flex mt-4 gap-1'>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BsPeople/>
            <span>6</span>
          </div>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BiSolidBriefcase/>
            <span>6</span>
          </div>
        </div>
        </div>
        <div className=' hover:cursor-pointer flex flex-col border border-black/50 shadow-lg w-fit px-2 py-2 shadow-black mx-auto'>
        <img src={limo} alt='' className=' rounded-xl object-cover w-[98vw] md:w-[20vw]'/>
        <div className=' w-fit mt-2'><h6>Mercedes Revolt</h6></div>
        <div className='flex mt-4 gap-1'>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BsPeople/>
            <span>6</span>
          </div>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BiSolidBriefcase/>
            <span>6</span>
          </div>
        </div>
        </div>
        <div className=' hover:cursor-pointer flex flex-col border border-black/50 shadow-lg w-fit px-2 py-2 shadow-black mx-auto'>
        <img src={limo} alt='' className=' rounded-xl object-cover w-[98vw] md:w-[20vw]'/>
        <div className=' w-fit mt-2'><h6>Mercedes Revolt</h6></div>
        <div className='flex mt-4 gap-1'>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BsPeople/>
            <span>6</span>
          </div>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BiSolidBriefcase/>
            <span>6</span>
          </div>
        </div>
        </div>
        <div className=' hover:cursor-pointer flex flex-col border border-black/50 shadow-lg w-fit px-2 py-2 shadow-black mx-auto'>
        <img src={limo} alt='' className=' rounded-xl object-cover w-[98vw] md:w-[20vw]'/>
        <div className=' w-fit mt-2'><h6>Mercedes Revolt</h6></div>
        <div className='flex mt-4 gap-1'>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BsPeople/>
            <span>6</span>
          </div>
          <div className='flex p-1 bg-[var(--color-secondary)] text-center border-black border rounded-sm'>
            <BiSolidBriefcase/>
            <span>6</span>
          </div>
        </div>
        </div>
      </div>
      <div className=' relative mt-12 w-fit mx-auto'>
        <a href='#hero'>
          <div className='flex gap-1 w-fit rounded-md py-2 px-3 bg-[var(--color-button)] text-center'>
            <AiOutlineArrowDown/>
            <span>Open All Vehicles</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Fleet
