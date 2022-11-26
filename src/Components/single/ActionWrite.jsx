import React from 'react'

const ActionWrite = ({text, icon}) => {
  return (
    <a href='#' className='w-1/3 py-3 hover:bg-gray-100 flex flex-row items-center justify-center rounded-lg'>
        <p className='text-2xl'>{icon}</p>
        <p className='text-md ml-2 font-semibold'>{text}</p>
    </a>
  )
}

export default ActionWrite