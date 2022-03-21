import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='flex'>
            <div className='flex-1 m-4 cursor-pointer '>
                <Link to='/'>
                    <span className='text-4xl bg-gradient-to-r from-[#FB2E83] to-[#F5663D] text-white p-2 px-5  rounded-full 	' >T</span>
                </Link>
            </div>

            <ul className='flex mt-4 text-[#454753] font-bold'>
              <Link to='/'><li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Home</li></Link>  
              <Link to='/'><li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Blog</li></Link>  
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>About Us</li>
            </ul>
        </div>
    )
}

export default Nav
