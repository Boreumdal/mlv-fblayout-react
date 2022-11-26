import React from 'react'
import { FaEllo, FaBirthdayCake, FaBookOpen, FaFilm, FaCoffee, FaVideo, FaWindowMaximize, FaSmile, FaBook, FaTv, FaShoppingCart, FaLayerGroup } from 'react-icons/fa'
import dp from '../src/dp.jpg'
import sp1 from '../src/sp.jpg'
import sp2 from '../src/sp2.jpg'
import c1 from '../src/contact1.jpg'
import c2 from '../src/contact2.jpg'
import c3 from '../src/contact3.jpg'
import p1 from '../src/p1.jpg'
import p2 from '../src/p2.jpg'

import md1 from '../src/22.jpg'
import md2 from '../src/33.jpg'
import md3 from '../src/14.jpg'
import md4 from '../src/3.jpg'
import md5 from '../src/25.jpg'
import md6 from '../src/38.jpg'
import md7 from '../src/31.jpg'

import MydayCard from './single/MydayCard'
import Title from './single/TitleSmall'
import Post from './single/Post'
import Action from './single/ActionWrite'
import MydayAction from './single/MydayAction'

const Main = () => {
  return (
    <div className='w-full flex flex-row justify-between h-full'>
        <div className='w-1/4 px-2 pt-2 pr-5 h-full fixed top-[53px] left-0'>
            <ul>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <img src={dp} alt="dp" className='w-[35px] h-[35px] rounded-full' />
                        <p className='ml-3 text-sm font-semibold'>Melvin</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <FaEllo className='text-green-600 w-[35px] h-[35px]' />
                        <p className='ml-3 text-sm font-semibold'>Friends</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <FaLayerGroup className='text-blue-400 w-[35px] h-[35px]' />
                        <p className='ml-3 text-sm font-semibold'>Groups</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <FaShoppingCart className='text-orange-600 w-[35px] h-[35px]' />
                        <p className='ml-3 text-sm font-semibold'>Marketplace</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <FaTv className='text-red-500 w-[35px] h-[35px]' />
                        <p className='ml-3 text-sm font-semibold'>Watch</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='p-2 mt-2 hover:bg-gray-100 rounded-md flex flex-row items-center'>
                        <FaBook className='text-yellow-500 w-[35px] h-[35px]' />
                        <p className='ml-3 text-sm font-semibold'>Memories</p>
                    </a>
                </li>
            </ul>
        </div>

        <div className='w-1/2 mx-auto mt-[53px] pt-6 px-24'>
            <div className='text-sm py-3 bg-white rounded-md shadow-md overflow-hidden w-full flex flex-col my-3'>
                <div className='flex flex-row px-4 w-full'>
                    <MydayAction icon={<FaBookOpen />} text='Stories' active='true' />
                    <MydayAction icon={<FaFilm />} text='Reels' active='false' />
                    <MydayAction icon={<FaCoffee />} text='Rooms' active='false' />
                </div>
                <div className='myday flex flex-row w-full overflow-auto p-4'>
                    <MydayCard img={md1} name='Name One' dp={dp} />
                    <MydayCard img={md2} name='Name Two' dp={dp} />
                    <MydayCard img={md3} name='Name Three' dp={dp} />
                    <MydayCard img={md4} name='Name Fo' dp={dp} />
                    <MydayCard img={md5} name='Name Five' dp={dp} />
                    <MydayCard img={md6} name='Name Six' dp={dp} />
                    <MydayCard img={md7} name='Name Seven' dp={dp} />
                </div>
            </div>
            <div className='text-sm bg-white rounded-md shadow-md overflow-hidden w-full flex flex-col my-3'>
                <div className='flex flex-row p-4'>
                    <img src={dp} className="w-[40px] h-[40px] rounded-full" alt="" />
                    <input type="text" placeholder='Write a comment...' className='h-[42px] w-full ml-1 rounded-full px-3 outline-none text-sm bg-gray-100' />
                </div>
                <div className='py-2 px-6 border-t mx-4 flex flex-row justify-around'>
                    <Action icon={<FaVideo />} text='Live video' />
                    <Action icon={<FaWindowMaximize />} text='Photo/Video' />
                    <Action icon={<FaSmile />} text='Feeling/Activity' />
                </div>
            </div>
            <Post dp={dp} p1={p1} p2={p2} />
            <Post dp={dp} p1={p1} p2={p2} />
            <Post dp={dp} p1={p1} p2={p2} />
            <Post dp={dp} p1={p1} p2={p2} />
            <Post dp={dp} p1={p1} p2={p2} />
        </div>
        
        <div className='w-1/4 px-2 pt-2 pl-5 h-screen overflow-auto fixed top-[53px] right-0'>
            <div className='border-b'>
                <Title title='Sponsored' />
                <a href='#' className=' hover:bg-gray-100 p-2 text-sm flex flex-row items-center my-1 rounded-md'>
                    <img src={sp1} alt="sp1" className='w-[122px] rounded-xl' />
                    <div className='ml-3'>
                        <h1 className='font-bold py-1'>Antifragile</h1>
                        <p>Wachu lookin' at</p>
                    </div>
                </a>
                <a href='#' className='hover:bg-gray-100 p-2 text-sm flex flex-row items-center  my-1 rounded-md'>
                    <img src={sp2} alt="sp2" className='w-[122px] rounded-xl' />
                    <div className='ml-3'>
                        <h1 className='font-bold py-1'>After LIKE</h1>
                        <p>What's After LIKE</p>
                    </div>
                </a>
            </div>
            <div className='border-b my-1'>
                <Title title='Your Pages and Profiles' />
                <div className='text-sm'>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={dp} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Melvin Arellano</p>
                    </a>
                </div>
            </div>
            <div className='border-b my-1'>
                <Title title='Birthdays' />
                <a href='#' className='text-sm flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                    <FaBirthdayCake className='text-red-500 text-xl' />
                    <p className='ml-2'><strong>No one</strong>'s birthday is today</p>
                </a>
            </div>
            <div className='border-b my-1'>
                <Title title='Contacts' />
                <div className='text-sm'>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c1} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben19</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c2} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben29</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c3} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben59</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c1} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben19</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c2} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben29</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c3} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben59</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c1} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben19</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c2} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben29</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c3} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben59</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c1} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben19</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c2} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben29</p>
                    </a>
                    <a href='#' className='flex flex-row items-center p-2 hover:bg-gray-100 my-1 rounded-md'>
                        <img src={c3} alt="dp" className='w-[37px] rounded-full' />
                        <p className='ml-2'>Ben59</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main