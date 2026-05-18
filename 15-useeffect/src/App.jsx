import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(10)


  function changeA(){
    console.log("A is changing...")
  }

  function changeB(){
    console.log("B is changing...")
  }

  useEffect(function(){
    console.log("Use efffect is running...")
  },[num1])

  return (
    <div>
        <h1>A is {num1}</h1>
        <h1>B is {num2}</h1>

        <button onClick={ () => {
          setnum1(num1+1)
        }}>Change A</button>
        <button onClick={ () => {
          setnum2(num2-1)
        }}>Change B</button>
    </div>
  )
}

export default App