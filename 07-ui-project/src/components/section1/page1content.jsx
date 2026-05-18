import React from 'react'
import Leftcontent from './leftcontent';
import Righttcontent from './rightcontent'

const page1content = (props) => {
  return (
    <div className='py-10 items-center flex px-10 gap-10 h-[90vh]'>
        <Leftcontent/>
        <Righttcontent users={props.users}/>
        
    </div>
  )
}

export default page1content