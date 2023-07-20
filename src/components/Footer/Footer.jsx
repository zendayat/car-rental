import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {SiInstagram, SiGmail, SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <div>
        <div className='hidden md:flex pt-16 flex-col md:flex-row gap-3 md:justify-between px-20 pb-6 border-t-orange-500/60 border-t-2 bg-[var(--color-secondary)]'>
        <div className='contacts flex flex-col gap-1'>
        <h6 className=' font-semibold text-2xl text-white pb-3 md:pb-7'>Contact Us</h6>
        <div className='text-black font-semibold flex gap-1 align-middle text-center w-fit'>
            <BsFillTelephoneFill/>
            <span>+1 2992334884</span>
        </div>
        <div className='text-black font-semibold flex gap-1 align-middle text-center w-fit'>
            <BsFillTelephoneFill/>
            <span>+1 2992334884</span>
        </div>
        <div className='text-black font-semibold flex gap-1 align-middle text-center w-fit'>
            <BsFillTelephoneFill/>
            <span>+1 2992334884</span>
        </div>
        <div className='text-black font-semibold flex gap-1 align-middle text-center w-fit'>
            <BsFillTelephoneFill/>
            <span>+1 2992334884</span>
        </div>
      </div>
      <div className='room flex flex-col gap-1'>
        <h6 className=' font-semibold text-2xl text-white pb-3 md:pb-7'>Our Showroom</h6>
        <div className='flex gap-1 align-middle text-center w-fit'>
            <span className="text-black font-semibold">27th Adelaide, Yegah</span>
        </div>
        <div className='flex gap-1 align-middle text-center w-fit'>
            <span className="text-black font-semibold">27th Adelaide, Yegah</span>
        </div>
        <div className='flex gap-1 align-middle text-center w-fit'>
            <span className="text-black font-semibold">27th Adelaide, Yegah</span>
        </div>
        <div className='flex gap-1 align-middle text-center w-fit'>
            <span className="text-black font-semibold">27th Adelaide, Yegah</span>
        </div>
      </div>
        </div>
        <div className=' mt-5 bg-black md:bg-transparent pb-3 w-[100vw] md:w-fit mx-auto pt-3 md:pt-0 border-t-white border-t-2'>
            <span className='mx-auto'>Reserved Copyright &copy; zencraizee</span>
            <div className=' w-fit mx-auto'><ul className=' flex gap-5'>
                <li><div className=' w-fit p-1 rounded-full bg-black border border-white'><a href='#hero'><SiInstagram/></a></div></li>
                <li><div className=' w-fit p-1 rounded-full bg-black border border-white'><a href='#hero'><SiGmail/></a></div></li>
                <li><div className=' w-fit p-1 rounded-full bg-black border border-white'><a href='#hero'><SiFacebook/></a></div></li>
            </ul></div>
        </div>
    </div>
  )
}

export default Footer
