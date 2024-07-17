import {useState } from 'react';
import { BsHandThumbsUp ,  BsHandThumbsDown } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CgScreen } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import GetData from '../helpers/getData';
import Spinner from '../helpers/Spinner';
const Hero = () => {
  const {items , loading} = GetData()
  const [error, setError] = useState(null);
  const item = items[Math.floor(Math.random() * 100)];


  if (loading) return <Spinner />

  if (error) return <div className="flex bg-black text-white p-7 w-full h-screen gap-4">Error: {error}</div>;

  return (
    <div className="flex bg-black text-white p-7 w-full h-screen gap-4">
      <div className="w-[40%]">
        {item.img ?<img
          className="cursor-pointer h-[30rem] w-full object-cover rounded-md border-white border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          src={item.image || 'https://via.placeholder.com/150?text=No+Image'}
          alt={item?.movie || 'No title'}
        />
      : <img className="cursor-pointer h-[30rem] w-full object-cover rounded-md border-white border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={item.movie} />}
      </div> 
      <div className="w-[60%]">
        <p className="text-[2.85rem] font-bold">{item?.movie}</p>

        <div className='flex font-bold gap-6 p-4 items-center'>
        {/* <p>{item?.year}</p>  
        <p>{item?.genres?.[0]?.type.toUpperCase()}</p>
        <p>{item?.duration}</p> */}
        <p className='border-2 border-white rounded-md px-1'>HD</p>
        <p className='border-2 border-white rounded-md px-1'>{item?.rating}</p>
        </div>

        {/* <div className='flex items-center gap-6 px-4 font-bold'>
        <p className='bg-gray-500/70 font-bold p-1 rounded-md'>{item?.rating}</p>
        <p>{item?.type}</p>
        </div> */}

        {/* <div className='font-bold p-4 text-[1.1rem]'>{item?.synopsis == null ? 'No synopsis available' : syn}</div> */}

        <div className='px-4 font-bold flex gap-5 items-center'>
            <BsHandThumbsUp className='cursor-pointer' size={30}/>
            <BsHandThumbsDown className='cursor-pointer' size={30}/>
            <CiCirclePlus className='cursor-pointer' size={30}/>
        </div>

        {/* {item?.type==="TV" && "ONA" && "OVA" && "Special" ?<div className='px-4 flex items-center mt-5 ml-1 cursor-pointer rounded-md font-bold text-black bg-white justify-between w-[45%]'>
         <CgScreen size={40}/>
         <p className='text-[1.3rem]'>Episodes</p>
         <div>{item?.episodes}</div>
        </div>: " "} */}

       <div className='flex items-center justify-between gap-10 p-10 mb-2'>
        <div className='px-4 font-bold mt-2 items-center text-[1.3rem]'>
        {/* <p>{item?.status}</p>
        <p>{item?.aired?.string}</p> */}
        </div>
        <div className='cursor-pointer mr-[10rem]'>
        <div className='' ><FaRegCirclePlay size={70}/></div>
        </div>
        </div>
  
      </div>
    </div>
  );
};

export default Hero;
