import React from 'react'
import { FaHeart, FaRegThumbsUp, FaRegCommentDots, FaRegPaperPlane } from 'react-icons/fa'

const Post = ({dp, p1, p2}) => {
  return (
    <div className='text-sm bg-white rounded-md shadow-md overflow-hidden w-full flex flex-col my-3'>
        <div className='w-full px-5 pt-4 flex flex-row items-center'>
            <img src={dp} alt="as" className='w-[40px] h-[40px] rounded-full' />
            <div className='ml-2'>
                <p className='font-semibold'>Asterisk</p>
                <p className='text-gray-500 text-xs'>1d</p>
            </div>
        </div>
        <div className='w-full'>
            <div className='w-full flex flex-col'>
                <p className='px-5 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio neque commodi incidunt minima ea eligendi. Rerum a tempora debitis officia inventore eum reprehenderit velit quasi, suscipit ullam nisi odit dolorem incidunt aut, dignissimos impedit voluptatibus ratione qui cum temporibus, at aliquam architecto iure? A, animi. Debitis, quo repudiandae delectus excepturi nihil dolorum sequi minima in, dolor similique praesentium, suscipit laudantium vitae reprehenderit quos earum exercitationem.</p>
                <div className='flex flex-row w-full flex-wrap py-1'>
                    <img src={p1} className='w-1/2 pr-[.5px]' alt="" />
                    <img src={p2} className='w-1/2 pl-[.5px]' alt="" />
                </div>
            </div>
            <div className='text-sm flex flex-row justify-between px-4 py-2'>
                <div className='flex flex-row items-center'>
                    <FaHeart className='text-red-500 text-lg' />
                    <p className='ml-1'>101</p>
                </div>
                <p>25 comments</p>
            </div>
        </div>
        <div className='flex flex-row px-10 py-1 border-t border-b mx-4'>
            <a href='#' className='flex flex-row ml-1 rounded-md items-center justify-center w-1/3 hover:bg-blue-300 py-2'>
                <FaRegThumbsUp className='mx-1 text-lg' />
                <button className='mx-1 font-semibold'>Like</button>
            </a>
            <a href='#' className='flex flex-row ml-1 rounded-md items-center justify-center w-1/3 hover:bg-blue-300 py-2'>
                <FaRegCommentDots className='mx-1 text-lg' />
                <button className='mx-1 font-semibold'>Comment</button>
            </a>
            <a href='#' className='flex flex-row ml-1 rounded-md items-center justify-center w-1/3 hover:bg-blue-300 py-2'>
                <FaRegPaperPlane className='mx-1 text-lg' />
                <button className='mx-1 font-semibold'>Share</button>
            </a>
        </div>
        <div className='flex flex-row px-4 py-2'>
            <img src={dp} className="w-[33px] h-[33px] rounded-full" alt="" />
            <input type="text" placeholder='Write a comment...' className='h-[37px] w-full ml-1 rounded-full px-3 outline-none text-sm bg-gray-100' />
        </div>
    </div>
  )
}

export default Post