import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {img: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro: '', tag: 'Satisfied'},
    {img: 'https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ', intro: '', tag: 'Underserved'},
    {img: 'https://images.unsplash.com/photo-1633079527517-a43fd76cb142?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro: '', tag: 'Underbanked'}
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />

    </div>
  )
}

export default App