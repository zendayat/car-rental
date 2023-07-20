import React from 'react'
import './NavService.css'
import {BiSolidCarMechanic} from 'react-icons/bi'
import {GiMoneyStack} from 'react-icons/gi'
import {RiBusFill} from 'react-icons/ri'
import {GiAustralia} from 'react-icons/gi'

const NavService = () => {
  return (
    <div className='Navservice mt-20 md:mt-10 bg-[var(--color-secondary)] h-fit md:h-[30vh] mx-8 px-12 rounded-2xl md:grid md:grid-cols-4'>
        <div className='w-[50vw] md:w-[20vw] flex flex-row md:flex-col  gap-3 mt-5 md:my-auto'>
            <div className=' flex flex-col md:flex-row gap-5 text-left px-2'>
                <BiSolidCarMechanic className=' text-6xl'/>
                <div className=' mt-1 md:my-auto font-semibold'>Safety First</div>
            </div>
            <div className=' text-inherit text-left'>We only hire the most experienced staff and licensed chaffeurs. All for your safety</div>
        </div>
        <div className='w-[50vw] md:w-[20vw] flex flex-row md:flex-col  gap-3 mt-5 md:my-auto'>
            <div className='  flex flex-col md:flex-row gap-5 text-left px-2'>
                <GiMoneyStack className=' text-6xl'/>
                <div className=' mt-1 md:my-auto font-semibold text-inherit'>Reasonable Prices</div>
            </div>
            <div className=' text-inherit text-left'>We only hire the most experienced staff and licensed chaffeurs. All for your safety</div>
        </div>
        <div className='w-[50vw] md:w-[20vw] flex flex-row md:flex-col  gap-3 mt-5 md:my-auto'>
            <div className=' flex flex-col md:flex-row gap-5 text-left px-2'>
                <RiBusFill className=' text-6xl'/>
                <div className=' mt-1 md:my-auto font-semibold'>Best in Town</div>
            </div>
            <div className=' text-inherit text-left'>We only hire the most experienced staff and licensed chaffeurs. All for your safety</div>
        </div>
        <div className='w-[50vw] md:w-[20vw] flex flex-row md:flex-col  gap-3 mt-5 md:mymt-5 md:-auto'>
            <div className='  flex flex-col md:flex-row gap-5 text-left px-2'>
                <GiAustralia className=' text-6xl'/>
                <div className=' mt-1 md:my-auto font-semibold'>Nationwide</div>
            </div>
            <div className=' text-inherit text-left'>We only hire the most experienced staff and licensed chaffeurs. All for your safety</div>
        </div>
    </div>
  )
}

export default NavService