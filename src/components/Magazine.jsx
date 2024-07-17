import React , {useEffect , useState} from 'react'

const Magazine = (title , prop) => {
    const [items , setItems] = useState([])
    const [loading , setLoading] = useState(true)
    const page = Math.floor(Math.random() * 1072);
    const fetchData = async()=>{
        try {
            const response = await fetch(`https://api.jikan.moe/v4/${prop}?page=${page}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const result = await response.json()
            setLoading(false)
            setItems(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData(prop);
    },[])

   if(loading) return (<><div className='text-white'>Loading....</div></>)
  return (
    <>
    <div className='bg-black'>
      <div className='text-white text-[2rem] font-bold p-2'><h1>{title}</h1></div>
      <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
      {items.map((item)=>(
        <>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-[15rem] h-[20rem] object-cover' src={item.images.jpg.large_image_url} alt="" />
        </div>
        </>
      ))}
    </div>
    </div>
    </>
  )
}

export default Magazine
