import React from 'react'
import { FaFacebook, FaSmileBeam, FaBell, FaHome, FaTv, FaShoppingCart, FaLayerGroup, FaFacebookMessenger } from 'react-icons/fa'
import dp from '../src/dp.jpg'

const Navbar = () => {
  return (
    <div className='w-full h-[56px] fixed top-0 bg-gray-50 text-gray-800 flex justify-between items-center'>
        <div className='w-1/3 flex flex-row items-center h-full'>
            <FaFacebook className='text-blue-500 h-[40px] w-[47px] m-1' />
            <input type="text" placeholder='Sirts on fisbook' className='h-[38px] rounded-3xl pl-5 bg-gray-200' />
        </div>
        <div className='w-1/3 items-center h-full'>
            <div className='flex flex-row items-center h-full justify-center'>
                <a href="#1" className='border-b-2 border-blue-400 text-blue-400 hover:bg-gray-100 h-full px-10 mx-1 flex justify-center items-center'><FaHome className='w-[27px] h-[27px]' /></a>
                <a href="#2" className='hover:bg-gray-100 h-full px-10 mx-1 flex justify-center items-center'><FaTv className='w-[27px] h-[27px]' /></a>
                <a href="#3" className='hover:bg-gray-100 h-full px-10 mx-1 flex justify-center items-center'><FaShoppingCart className='w-[27px] h-[27px]' /></a>
                <a href="#4" className='hover:bg-gray-100 h-full px-10 mx-1 flex justify-center items-center'><FaLayerGroup className='w-[27px] h-[27px]' /></a>
            </div>
        </div>
        <div className='w-1/3 items-center h-full'>
            <div className='flex flex-row justify-end items-center h-full mr-2'>
                <button className='w-[38px] h-[38px] hover:bg-gray-300 bg-gray-200 ml-3 flex justify-center items-center rounded-full'><FaFacebookMessenger className='w-[22px] h-[22px]' /></button>
                <button className='w-[38px] h-[38px] hover:bg-gray-300 bg-gray-200 ml-3 flex justify-center items-center rounded-full'><FaBell className='w-[22px] h-[22px]' /></button>
                <button className='w-[38px] h-[38px] hover:bg-gray-300 bg-gray-200 ml-3 flex justify-center items-center rounded-full'><FaSmileBeam className='w-[22px] h-[22px]' /></button>
                <img src={dp} alt="Alt" className='w-[40px] h-[40px] ml-3 rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Navbar