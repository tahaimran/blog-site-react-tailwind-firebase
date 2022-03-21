import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { postCont } from '../Config/Context';
import Nav from './Nav';
import Footer from './Footer'

function PostDis() {
    const { posts, setPost } = useContext(postCont);

    const { id } = useParams();
    console.log(posts[1].id == id ? "yes" : "No")
    return (
        <>
            <Nav />

            {
                posts.filter(e => e.id == id).map((e, i) => {
                    return (
                        <div className='flex flex-col p-10 ' key={i}>
                            <h1 className='text-3xl font-semibold py-2 text-[#131215] '>{e.title}</h1>
                            <span className='text-[#454753] font-semibold'>{e.dates}</span>

                            <img className='w-3/5 py-10' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                            <p className='text-[#454753]  w-4/5 text-md'>{e.paras}</p>
                           

                        </div>
                    )
                })
            }
            <Footer />
        </>
    )
}

export default PostDis