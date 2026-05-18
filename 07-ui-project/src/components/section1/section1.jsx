import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'

const section1 = (props) => {
  return (
    <div>
        <Navbar />
        <Page1content users={props.users}/>
    </div>
  )
}

export default section1