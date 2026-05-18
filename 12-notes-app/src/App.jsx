import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by ", title, " Note : ", details)

    const copytask = [...task]

    copytask.push({title, details});
    settask(copytask)

  }

  const deletenote = (idx) => {
      const copytask = [...task];

      copytask.splice(idx, 1)

      settask(copytask)
  }

  return (

    <div className='h-screen lg:flex '>
      <form onSubmit={ (e) => {
        submithandler(e)
        settitle('')
        setdetails('')
      }}
        className='flex gap-4 lg:w-1/2 flex-col p-10' action="" >
            <h1 className='text-4xl text-bold'> Add Notes</h1>
            <input className='px-5 w-full py-2 border-2 outline-none rounded' type="text" name="" id="" placeholder='Enter Notes Heading' value={title} 
                onChange = { (e) => {
                settitle(e.target.value);
            }}/>
            <textarea className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 outline-none rounded' name="" id="" placeholder='Write Details' value={details}
                onChange={ (e) => {
                  setdetails(e.target.value)
                }}></textarea>
            <button className='bg-green-900 w-full outline-none text-blue-200 px-5 py-2 rounded text-bold'>Add Notes</button>
      </form>

      <div className='lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold '>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            {task.map( function(elem,idx)  {
              return <div key={idx} className='h-52 w-40 rounded-2xl bg-amber-500 p-4'>
                        <h3 className='text-2xl text-bold text-black'>{elem.title}</h3>
                        <p className='mt-4 leading-tight font-medium text-amber-950'>{elem.details}</p>

                        <button onClick={ () => {
                          deletenote(idx)
                        }
                        } className='w-full bg-red-500 rounded py-1 text-xs font-bold'>Delete</button>
                    </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default App