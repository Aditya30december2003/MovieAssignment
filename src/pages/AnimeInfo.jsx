import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { BsHandThumbsUp ,  BsHandThumbsDown } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CgScreen } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import Navbar from '../components/Navbar'
import Spinner from '../helpers/Spinner';
const AnimeInfo = () => {
  const {mal_id} = useParams()
  const [item , setItem] = useState({})
  const [loading , setLoading] = useState(true)
  const [synopsis , setSynopsis] = useState(false)
  const getData = async()=>{
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
      const result = await response.json()
      setLoading(false)
      console.log(result.data)
      setItem(result.data)
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }

  useEffect(()=>{
  getData()
  },[mal_id])

  const syn = item?.synopsis ? synopsis ? item.synopsis + ' less' : item?.synopsis.slice(0, 230) + '.....more' : 'No synopsis available';

  if (loading) return <Spinner />

  // if (error) return <div className="flex bg-black text-white p-7 w-full h-screen gap-4">Error: {error}</div>;

  return (
    <div className="flex bg-black text-white p-7 w-[95%] h-screen gap-4 ml-[5%] ">
      <div className="w-[40%]">
        <img
          className="h-[30rem] w-full object-cover rounded-md border-white border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          src={item?.images?.jpg?.large_image_url || 'https://via.placeholder.com/150?text=No+Image'}
          alt={item?.title || 'No title'}
        />
      </div>
      <div className="w-[60%]">
        <p className="text-[2.85rem] font-bold">{item?.title}</p>

        <div className='flex font-bold gap-6 p-4 items-center'>
        <p>{item?.year}</p>  
        <p>{item?.genres?.[0]?.type.toUpperCase()}</p>
        <p>{item?.duration}</p>
        <p className='border-2 border-white rounded-md px-1'>HD</p>
        <p className='border-2 border-white rounded-md px-1'>{item?.score}</p>
        </div>

        <div className='flex items-center gap-6 px-4 font-bold'>
        <p className='bg-gray-500/70 font-bold p-1 rounded-md'>{item?.rating}</p>
        <p>{item?.type}</p>
        </div>

        <div onClick={()=>setSynopsis(!synopsis)} className='cursor-pointer font-bold p-4 text-[1.1rem]'>{item?.synopsis == null ? 'No synopsis available' : syn}</div>

        <div className='px-4 font-bold flex gap-5 items-center'>
            <BsHandThumbsUp className='cursor-pointer' size={30}/>
            <BsHandThumbsDown className='cursor-pointer' size={30}/>
            <CiCirclePlus className='cursor-pointer' size={30}/>
        </div>

        {item?.type==="TV" && "ONA" && "OVA" && "Special" ?<div className='px-4 flex items-center mt-5 ml-1 cursor-pointer rounded-md font-bold text-black bg-white justify-between w-[45%]'>
         <CgScreen size={40}/>
         <p className='text-[1.3rem]'>Episodes</p>
         <div>{item?.episodes}</div>
        </div>: " "}

       <div className='flex items-center justify-between gap-10 p-10 mb-2'>
        <div className='px-4 font-bold mt-2 items-center text-[1.3rem]'>
        <p>{item?.status}</p>
        <p>{item?.aired?.string}</p>
        </div>
        <div className='cursor-pointer mr-[10rem]'>
        <div className='' ><FaRegCirclePlay size={70}/></div>
        </div>
        </div>
  
      </div>
    </div>
  );
};

export default AnimeInfo
