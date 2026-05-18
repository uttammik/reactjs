import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("Button is clicked.");
  }

  function inputchanging(val){
    console.log(val)
  }

  return (
    <div>
      <button onClick={btnclicked} className='p-5 m-5 bg-amber-950'> Click here</button>
      <br/>
      <input onChange={function(elem){
        inputchanging(elem.target.value);
      }}
       type="text" placeholder='Enter name' className='bg-amber-50 p-10 m-10' />
    </div>
  )
}

export default App