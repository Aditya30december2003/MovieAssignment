// import GetData from './getData'
import { Link } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import Spinner from './Spinner';
import { CartState } from '../Context/Context';
const List = (rowID) => {
  const {
    state :{cart},
    dispatch ,
  } = CartState()

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // if(loading) return (<Spinner />)

  return (
    <div className='text-white ml-[5%]'>
      <div className='bg-black relative mt-10'>
      <div className='text-white text-[2rem] font-bold p-2'><h1>Your Watch List</h1></div>
      <div className="relative flex items-center group">
      {cart.length>4 ? <MdChevronLeft
          onClick={slideLeft}
          className='bg-white  left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
          size={50}
        /> : null}
     <div  id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
      {cart.map((item , id)=>(
        <>
        <Link to={`/anime/${item.mal_id}`}>
        <div key={id} className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-[15rem] h-[20rem] object-cover' src={item.images.jpg.large_image_url} alt={item.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className=' w-[70%] mx-auto white-space-normal text-xs  font-bold flex justify-center items-center h-full text-center'>
                {item?.title.slice(0 , 40)}
            </p>
            <Link>
            {/* {
              cart.some((p)=>p.mal_id === item.mal_id) ?
              (<FaRegHeart onClick={()=>{
                dispatch({
                  type : "REMOVE_FROM_CART",
                  payload : item
                })
              }}  className='absolute top-4 left-4 text-gray-300' size={20}/>)
              :(<FaHeart onClick={()=>{
                dispatch({
                  type : "ADD_TO_CART",
                  payload : item
                })
              }}  className='absolute top-4 left-4 text-gray-300' size={20}/>)
              } */}
            </Link>
            </div>
        </div>
        </Link>
        </>
      ))}
      </div>
      {cart.length >4 ?<MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
          size={50}
        /> : null}
        </div>
        </div>
    </div>
  )
}

export default List
