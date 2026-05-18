import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      <h1>What app</h1>
      {Card()}
      <Card />
      <Navbar />
  
    </div>
  )
}

export default App