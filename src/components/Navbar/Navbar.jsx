import React, {useState} from 'react'
import logo from '../../Assets/logo2.png'
import ReactFlagsSelect from "react-flags-select";
import {CgMenuGridO} from 'react-icons/cg'
import './Navbar.css'


const Navbar = () => {
    const [select, setSelect] = useState("KE");
    const onSelect = (code) => setSelect(code);
    console.log("SELECT", select);

    const [menu_table, setMenuTable] = useState("menu hidden");
    const [isMenuClicked,setIsMenuClicked] = useState (false);

    const ToggleMenu=()=> {
        if (!isMenuClicked){
            setMenuTable("menu visible")
        }
        else{
            setMenuTable("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <div>
    <div className='.Navbar flex justify-between items-center px-8 pt-6'>
        <a href='#hero'><img src={logo} alt="" className=' object-cover w-44'/></a>
        <div className='nav_menu hidden lg:block'>
            <ul className=' flex gap-5'>
                <li><a href="#hero" className='a'>Home</a></li>
                <li><a href="#services" className='a'>Our Services</a></li>
                <li><a href="#story" className='a'>Our Story</a></li>
                <li><a href="#fleets" className='a'>Our Fleets</a></li>
                <li><a href="#contact" className='a'>Contact Us</a></li>
            </ul>

        </div>
        <div className=' flex w-[12rem] gap-2'>
            <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={["UK", "KE", "IE", "IT", "NL", "SE"]}
            customStyleOptionListItem={{ color: 'black' }}
            customStyleOptionListContainer={{ maxHeight: '100px', background: 'black', marginTop: '11px' }}
            /*showSelectedLabel={showSelectedLabel}
            selectedSize={selectedSize}
            showOptionLabel={showOptionLabel}
            optionsSize={optionsSize}
            placeholder={placeholder}
            searchable={searchable}
            searchPlaceholder={searchPlaceholder}
            alignOptionsToRight={alignOptionsToRight}
            fullWidth={fullWidth}
            disabled={disabled} */
            className=' flags relative'/>
            <div className=' items-center flex fixed right-7 top-2 z-50 sm:top-5 h-fit w-fit p-1 rounded-full bg-black'><CgMenuGridO className='menu_icon text-3xl hover:cursor-pointer z-50' onClick={ToggleMenu}/></div>
        </div>
    </div>
    <div className={menu_table}>
          <ul className=' flex flex-col fixed right-1 mt-7 z-50 shadow-lg shadow-black/90'>
                <li className=' w-40 h-fit px-3 py-3 border-t-2 border-b-2 border-black bg-[var(--color-background)]'><a href="#hero">Home</a></li>
                <li className=' w-40 h-fit px-3 py-3 border-t-2 border-b-2 border-black bg-[var(--color-background)]'><a href="#services">Our Services</a></li>
                <li className=' w-40 h-fit px-3 py-3 border-t-2 border-b-2 border-black bg-[var(--color-background)]'><a href="#story">Our Story</a></li>
                <li className=' w-40 h-fit px-3 py-3 border-t-2 border-b-2 border-black bg-[var(--color-background)]'><a href="#fleets">Our Fleets</a></li>
                <li className=' w-40 h-fit px-3 py-3 border-t-2 border-b-2 border-black bg-[var(--color-background)]'><a href="#contact">Contact Us</a></li>
            </ul>
    </div>
    </div>
  )
}

export default Navbar