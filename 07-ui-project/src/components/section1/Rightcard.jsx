import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 bg-lime-700 rounded-4xl relative overflow-hidden shrink-0' >
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <Rightcardcontent id={props.id} tag={props.tag}/> 
    </div>
  )
}

export default Rightcard