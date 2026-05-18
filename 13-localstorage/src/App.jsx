import { LucideMoveDiagonal } from 'lucide-react'
import React from 'react'

const App = () => {

  localStorage.setItem('username','Uttam')
  localStorage.setItem('age',18)

  const uservalue = localStorage.getItem('username')
  const agevalue = localStorage.getItem('age')

  const user = {
    name : 'Uttam',
    age : 18,
    city : 'Dehradun'
  }

  localStorage.setItem('userobject', JSON.stringify(user))

  const userr = JSON.parse(localStorage.getItem('userobject'))

  console.log(userr)

  // localStorage.removeItem('age')

  console.log(uservalue)
  console.log(agevalue)
 
  return (
    <div>App</div>
  )
}

export default App