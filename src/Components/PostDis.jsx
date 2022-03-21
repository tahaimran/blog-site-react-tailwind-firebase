import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { postCont } from '../Config/Context';

function PostDis() {
    const { posts, setPost } = useContext(postCont);

    const { id } = useParams();
    console.log(posts[1].id == id ? "yes" : "No")
    return (
        <div>
            {
                posts.filter(e => e.id == id).map((e, i) => {
                    return (<div key={i}>
                        <h1>{e.title}</h1>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default PostDis