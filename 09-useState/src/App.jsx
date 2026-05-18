import { useState } from "react"

const App = () => {

  const [num, setnum] = useState(0)
  const [username, setusername] = useState('Uttam')

  function changevalue(){
    setnum(num+1);
    setusername('Anshu');
  }

  return (
    <div>
      <h1>The value of num is {num}</h1>
      <h2>Username : {username}</h2>
      <button onClick={changevalue}>Click to change</button>
      
    </div>
  )
}

export default App