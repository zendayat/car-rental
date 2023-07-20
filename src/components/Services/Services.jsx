import React from 'react'
import './Services.css'
import street from '../../Assets/street.jpeg'
import airport from '../../Assets/airport transfer.jpeg'
import business from '../../Assets/business.jpeg'
import security from '../../Assets/security.jpeg'

const Services = () => {
  return (
    <div className='services text-white md:mx-16 gap-6 grid grid-cols-1 md:grid-cols-3 pt-8' id="services">
        <div className='services1 w-[90vw] md:w-[29vw] grid-rows-2 pt-10'>
            <div className='services_head pt-10 text-left'>
                <h1 className=' text-2xl md:text-4xl'>OUR SERVICES</h1>
                <h6 className=' text-inherit mt-8'> We understand that every event is unique, and we strive to accomodate your individual needs.</h6>
            </div>
            <div className=' pt-12'>
                <img src={street} className=' object-cover w-[90%] rounded-3xl z-0' alt=''/>
                <div className=' px-3 py-2 relative rounded-xl bg-white font-semibold w-fit ml-auto mr-14 -mt-14 z-40 text-black'>Intercity trips</div>
            </div>
        </div>
        <div  className='riz w-[90%] md:w-[27vw] pt-12 '>
            <img src={airport} className=' object-cover h-[90%] w-[90%] rounded-3xl -z-10' alt=''/>
            <div className=' px-3 py-2 relative rounded-xl bg-white font-semibold text-black ml-auto mr-14 w-fit -mt-14 z-40'>Airport Transfer</div>
        </div>
        <div className=' w-[90%] md:w-[29vw] grid-rows-2 pt-10'>
            <div className=' text-left w-[100%] md:w-auto'>
                <img src={business} className='rimg object-cover h-[40vh] rounded-3xl md:ml-0 lg:ml-20 z-10' alt=''/>
                <div className=' px-3 py-2 relative rounded-xl bg-white font-semibold text-black ml-auto md:mr-auto lg:mr-20 mr-20 w-fit -mt-14 z-40'>Business Meetings</div>
            </div>
            <div className=' pt-5 w-[100%] md:w-auto'>
                <img src={security} className='rimg object-cover h-[40vh] rounded-3xl z-0' alt=''/>
                <div className=' px-3 py-2 relative rounded-xl bg-white font-semibold w-fit ml-auto mr-14 -mt-14 z-40 text-black'>Security Services</div>
            </div>
        </div>
    </div>
  )
}

export default Services