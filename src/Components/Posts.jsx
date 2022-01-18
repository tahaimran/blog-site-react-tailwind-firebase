import React, { useEffect, useState } from 'react'
import { db } from '../Config/firebase'
import { collection, doc, getDocs } from 'firebase/firestore'
function Posts() {
    const [posts, setPost] = useState([]);
    const postCollectionRef = collection(db, 'post');
    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(postCollectionRef);
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data)
        }
        getPost();
    }, [])
    return (
        <div className='  grid  grid-cols-3 gap-5 m-5 text-center'>
            {posts.map((post) => {
                return(
                     <div> 
                         <span>{post.dates}</span>
                         <h2>{post.title}</h2>
                          <p>{post.paras}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Posts
