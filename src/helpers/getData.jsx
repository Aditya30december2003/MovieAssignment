import {useState , useEffect} from 'react'   

export default function GetData(){
    const [items , setItems] = useState([])
    const [loading , setLoading] = useState(true)
    const fetchData = async()=>{
        try {
            const response = await fetch("https://dummyapi.online/api/movies")
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const result = await response.json()
            setLoading(false)
            console.log(result)
            setItems(result)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return {items , loading}
}
    
