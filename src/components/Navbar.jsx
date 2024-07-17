import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoTrendingUp } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { GiClapperboard } from "react-icons/gi";
import { FaShapes , FaPlus  } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Navbar = () => {
    const [expand , setExpand] = useState(false)
  return (
    <div onMouseOver={()=>setExpand(true)} onMouseOut={()=>setExpand(false)} className={expand ?'cursor-pointer text-white fixed  z-20 w-[20%] h-screen flex flex-col gap-12 bg-black/70 duration-700':'duration-700 cursor-pointer text-white fixed  z-20 w-[4%] h-screen flex flex-col gap-12 bg-black'}>
       <div className='flex mx-auto gap-7 items-center z-10 font-bold p-2  cursor-pointer '>
        <img className='w-[2rem]' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile-icon" />
        {expand?<div className='text-[1.2rem]'>Profile</div>:''}
      </div> 

      <ul className='flex flex-col mx-auto items-center text-center gap-8 font-bold'>
        <li className='flex gap-7 items-center  hover:scale-110 duration-500'>
            <FaSearch size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>Search</div>:''}
        </li>
        <Link to='/' className='flex gap-7 items-center hover:scale-110 duration-500'>
            <GoHome size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>Home</div>:''}
        </Link>
        <li className='flex gap-7 items-center hover:scale-110 duration-500'>
            <IoTrendingUp size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>Newspaper</div>:''}
        </li>
        <li className='flex gap-7 items-center hover:scale-110 duration-500'>
            <LuMonitor size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>Shows</div>:''}
        </li>
        <li className='flex gap-7 items-center hover:scale-110 duration-500'>
            <GiClapperboard size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>Movies</div>:''}
        </li>
        <div className='flex gap-7 items-center hover:scale-110 duration-500'>
            <FaPlus size={22} className='text-center mx-auto cursor-pointer font-bold'/>
            {expand?<div className='text-[1.2rem]'>List</div>:''}
        </div>
      </ul>

       {expand?<div className='text-[1rem] font-bold text-center'>Exit OtakuRealm</div>:''}
    </div>
  )
}

export default Navbar
