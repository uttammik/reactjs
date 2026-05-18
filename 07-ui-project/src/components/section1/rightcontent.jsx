import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
  return (
    <div id='rightt' className='h-full p-6 w-2/3 flex flex-nowrap shrink-0 gap-10 rounded-4xl'>
        {props.users.map(function(elem,idx){
            return <Rightcard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
        })}
    </div>
  )
}

export default rightcontent