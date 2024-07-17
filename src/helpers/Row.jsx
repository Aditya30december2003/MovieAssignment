import GetData from './getData'
import { Link } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Spinner from './Spinner';
import { CartState } from '../Context/Context';
import { MdDelete } from "react-icons/md";

const Row = () => {
    let {items , loading } = GetData()

 if(loading) return (<Spinner />)
  return (
    <>
    <div className='bg-black relative mt-10'>
      <div className='text-white text-[2rem] font-bold p-2'><h1></h1></div>
      <div className="relative flex items-center group">
     <div  id={'slider'} className='w-full h-full grid grid-cols-4'>
      {items.map((item , id)=>(
        <>
        <div key={id}>
        <Link to={item.imdb_url}  className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            {item.img?<img className='w-[15rem] h-[20rem] object-cover' src={item.image} alt={item.movie} />: <img className='w-[15rem] h-[20rem] object-cover' src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={item.movie} />}
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className=' w-[70%] mx-auto flex-col gap-3  text-white white-space-normal text-xs  font-bold flex justify-center items-center h-full text-center'>
                {item?.movie}
                <p>Rating:{item?.rating}</p>
            </p>
            </div>
        </Link>
        </div>
        </>
      ))}
      </div>
        </div>
        </div>
    </>
  )
}

export default Row
