import React, { useState } from 'react'
import { db } from '../Config/firebase';
import { collection, addDoc } from 'firebase/firestore'
function Write() {
    const [titles, setTitle] = useState('');
    const [para, setPara] = useState('');
    const [date, setDate] = useState('');

    const postCollectionRef = collection(db, 'post');

    

    const Send = async () => {
        await addDoc(postCollectionRef, { title: titles, paras: para, dates :date });
        
    }


    return (
        <div>
            <input type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
            <textarea type="text" placeholder='Enter Para' onChange={(e) => setPara(e.target.value)} />
            <input type="date"  onChange={(e) => setDate(e.target.value)} />
            <button onClick={Send}>Submit</button>
        </div>
    )
}

export default Write
