import React from 'react'
import catPic from '../assets/cat-tasks.png'

const empty = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center space-y-5 mt-20 md:mt-25'>
            <img src={catPic} alt="" />
            <p className='text-xl text-input'>No tasks yet ... </p>
        </div>
    </div>
  )
}

export default empty