import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form submitted by ", title)

    setTitle('')
  }

  const [title, setTitle] = useState('')

  return (
    <div>
      <form action="" onSubmit={ (e)=>{
        submitHandler(e);
      }}>
        <input onChange={ (e)=>{
            setTitle(e.target.value)
        }} value={title} type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App