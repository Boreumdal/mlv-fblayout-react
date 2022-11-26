import React from 'react'

const MydayCard = ({ img, name, dp }) => {
  return (
    <a href='#' className='filler rounded-lg relative mx-[6px] shadow-sm h-[210px] min-w-[130px] overflow-hidden bg-center bg-cover bg-no-repeat ' style={{backgroundImage: `url(${img})`}} >
      <img src={dp} alt={name} className='absolute top-2 left-2 w-[45px] h-[45px] rounded-full' />
      <p className='absolute bottom-2 left-3 text-white font-bold text-md text-shadow-md'>{ name }</p>
    </a>
  )
}

export default MydayCard