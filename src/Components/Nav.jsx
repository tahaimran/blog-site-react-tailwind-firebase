import React from 'react'

function Nav() {
    return (
        <div className='flex'>
            <div className='flex-1 m-4'>
                <span className='text-4xl bg-gradient-to-r from-[#FB2E83] to-[#F5663D] text-white p-2 px-5  rounded-full	' >P</span>
            </div>

            <ul className='flex mt-4 text-[#454753] font-bold'>
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Home</li>
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Blog</li>
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>BookMarks</li>
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Playlists</li>
                <li className='mx-4 cursor-pointer hover:text-pink-400 hover:underline'>Books</li>
            </ul>
        </div>
    )
}

export default Nav
