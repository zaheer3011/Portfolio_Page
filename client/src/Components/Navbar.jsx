import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from 'react-icons/io5'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const NAV_BAR_LIST = [
        'Home', 
        'About Me', 
        'Education', 
        'Experience', 
        'Skills', 
        'Contact'];

  return (
    <header className='px-8 bg-[#06d6a0] sticky top-0 z-50 shadow-md'>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

            <h3 className='text-md font-bold tracking-wider'>ZAHEER</h3>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
                <ul className='flex items-center gap-8 font-bold text-[13px] '>

                {
                    NAV_BAR_LIST.map((items, index) => {
                        return <li className='tracking-wide cursor-pointer' key={index}><a href={`#${items}`}>{items}</a></li>
                    })
                }
                </ul>
            </nav>

            {/* Toggle Menu Bar */}
            <button className='lg:hidden'
                onClick={() => setOpen(!open)}>  
                { open ? (
                    <IoClose className='text-2xl cursor-pointer' />
                ) : (
                    <CiMenuFries className='text-2xl cursor-pointer'/>
                )}
            </button>
        </div>

            {/* Mobile Menu */}
             <div className={`lg:hidden overflow-hidden transition-all duration-600 ${ open ? "max-h-96" : "max-h-0"}`}>
                <nav className='bg-[#06d6a0] border-t border-white/20'>
                    <ul className='flex flex-col items-center py-1'>
                        {
                            NAV_BAR_LIST.map((item) => {
                                return <li key={item}><a 
                                href={`${item}`}
                                onClick={() => setOpen(false)}
                                className='block px-2 py-3 font-bold text-[.9rem] hover:bg-[#05c28f] rounded-md transition '>
                                {item}
                                </a></li>
                            } )
                        }
                    </ul>
                </nav>
             </div>
    </header>
  )
}

export default Navbar
