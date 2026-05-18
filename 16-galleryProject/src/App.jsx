import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserdata] = useState([])

  const [index, setindex] = useState(1)

  async function getdata(){
    console.log("Data is here.")

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    
    setUserdata(response.data);
  }

  let printUserData = "No data available.";

  useEffect(function(){
      getdata()
  }, [index])


  if(printUserData.length > 0)
  {
    printUserData = userdata.map(function(elem, idx){
        return <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-32 rounded overflow-hidden'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold '>{elem.author}</h2>
        </a>
        </div>
    })
  }
  

  return (
    <div className='p-5 overflow-auto'>
      <h1 className='text-xl'>{index}</h1>
      <div className='flex flex-wrap gap-4'>  
          {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-4'>
        <button onClick={ ()=>{
            if(index>1)
              setindex(index-1)
            setUserdata([])
        }} className='bg-amber-500 rounded text-small curson-pointer active:scale-95 px-4 py-2 font-semibold '>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
            setindex(index+1)
            setUserdata([])
        }}className='bg-amber-500 rounded text-small curson-pointer active:scale-95 px-4 py-2 font-semibold '>Next</button>
      </div>
    </div>
  )
}

export default App