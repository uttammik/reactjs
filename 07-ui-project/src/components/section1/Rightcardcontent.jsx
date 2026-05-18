import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 items-center flex justify-center text-2xl font-semibold '>{props.id +1}</h2>
            <div>
                <p className='text-lg leading-normal mb-10'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, delectus.</p>
                <div className='flex justify-between gap-5'>
                    <button className='text-white font-medium bg-blue-700 px-5 py-1 rounded-full'>{props.tag}</button>
                    <button className='text-white font-medium bg-blue-700 px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent