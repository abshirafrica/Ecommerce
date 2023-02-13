import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import {BsSearch, BsSun, BsShieldLock} from 'react-icons/bs'
import { useState } from 'react'
import {RiMenu3Fill} from 'react-icons/ri'

import {useTheme} from 'next-themes';
import { BsMoon } from 'react-icons/bs'


const Header = () => {
  const {theme, setTheme} = useTheme();
  const [open, setOpen] = useState(false)
  
  return (
    <div className='flex items-center justify-between'>
      {/* left */}
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <div className='cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
          <RiMenu3Fill className='w-6'/>
        </div>

      {/* right */}
    

        {/* Desktop */}

      <div className='items-center space-x-10 hidden md:flex'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Productse</Link>
        <BsSearch className='cursor-pointer'/>
       
        {
          theme === "dark" ? (
            <BsMoon className='w-7 cursor-pointer' onClick={() => setTheme("light")}  />
          ): (
            <BsSun className='cursor-pointer'  onClick={() => setTheme("dark")}/>
          )
        }
       
        <BsShieldLock className='cursor-pointer'/>
      </div>
        {/* men menu */}
      <div className={`items-center space-y-24 flex md:hidden flex-col absolute left-0 top-20 w-screen shadow-3xl bg-white ${open ? "flex" : "hidden"} `}> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Productse</Link>
        <BsSearch />
        <BsSun />
        <BsShieldLock />
      </div>

   

    

      
    </div>
  )
}

export default Header
