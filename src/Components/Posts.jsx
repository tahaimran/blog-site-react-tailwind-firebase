import React, { useContext } from 'react'
import { postCont } from '../Config/Context';
import { Link } from 'react-router-dom'
import "./App.css"

function Posts() {
    const { posts, setPost } = useContext(postCont);

    return (
        <div className='my-20'>
            <h2 className='text-5xl font-semibold my-6  text-center'>Blogs</h2>
            <div className='flex flex-col sm:flex-row sm:justify-center  '>
                {posts.map((post, i) => {
                    return (
                        <div key={i} className='flex flex-col items-center  done m-4 overflow-hidden'>
                            <img className=' ' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                            <div className='flex flex-col items-start w-[95%]'>
                                <h2 className='text-2xl font-semibold py-2 text-[#131215] font'>{post.title}</h2>
                                {/* <p className='text-[#454753] text-base'>{post.paras}</p> */}
                            </div>
                            <Link to={`/posts/${post.id}`}>
                                <button className='w-36 cursor-pointer bg-[#F75257] text-white rounded-lg p-1 text-lg font-semibold hover:scale-110 hover:duration-1000 hover:bg-[#FA3876] my-4'>Visit</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts
