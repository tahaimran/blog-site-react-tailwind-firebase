import React,{useContext} from 'react'
import { postCont } from '../Config/Context';
import { Link } from 'react-router-dom'
function Main() {
    const { posts, setPost } = useContext(postCont);

    return (
        <div className='flex flex-col items-center my-20 sm:flex-row sm:justify-center  '>
            <div className='w-[80%] sm:w-2/5'>
                <img className=' rounded-md' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" srcSet="" />
            </div>
            <>
                {posts.filter((e,i) => i < 1).map((e, i) => {
                    return (
                        <div className='w-4/5 sm:w-1/3  px-4 '>
                            <span className='text-[#454753] font-semibold'>Marc 21, 2004</span>
                            <h2 className='text-4xl font-semibold py-2 text-[#131215]'>{e.title}</h2>
                            {/* <p className='text-[#454753]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eum aspernatur minima  </p> */}
                            <Link to={`/posts/${e.id}`}>
                                <button className='w-36 cursor-pointer bg-[#F75257] text-white rounded-lg p-1 text-lg font-semibold hover:scale-110 hover:duration-1000 hover:bg-[#FA3876] my-4'>Visit</button>
                            </Link>
                        </div>
                    )
                })}

            </>
        </div>
    )
}

export default Main
