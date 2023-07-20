import React from 'react'
import './Story.css'
import chaffeur from '../../Assets/chaffuer.jpeg'
import reception from '../../Assets/reception.jpeg'
import logo3 from '../../Assets/logo3.png'
// import limo from '../../Assets/airlimo.jpeg'

const Story = () => {
  return (
    <div className='story mt-10 flex flex-col mx-20' id="story">
        <div className=' flex flex-col md:flex-row justify-between '>
            <div className='pt-10 text-left'>
                <h1 className=' text-4xl'>OUR STORY</h1>
                <h6 className=' text-inherit mt-8'> We came from the soil itself, but are dedicated to giving you diamonds.</h6>
            </div>
            <div className=' w-[80vw] md:w-[35vw] text-inherit text-left mt-8'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain</div>
        </div>
        <div className=' flex flex-row md:flex-col lg:flex-row gap-6 align-middle mt-7 mx-auto'>
            <img src={logo3} alt='' className=' object-cover h-[30vh] rounded-xl'/>
            <img src={reception} alt='' className=' hidden md:block object-cover h-[30vh] rounded-xl'/>
            {/* <img src={limo} alt='' className=' object-cover h-[30vh] rounded-xl'/> */}
            <img src={chaffeur} alt='' className=' hidden md:block object-cover h-[30vh] rounded-xl'/>
        </div>
    </div>
  )
}

export default Story