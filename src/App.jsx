import { useState, useEffect } from 'react'
import Posts from './Components/Posts';
import Write from './Components/Write';
import LandingPage from './Components/LandingPage';
import { postCont } from './Config/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { db } from './Config/firebase'
import { collection, doc, getDocs } from 'firebase/firestore'
import PostDis from './Components/PostDis';

function App() {
  const [posts, setPost] = useState([]);
  const postCollectionRef = collection(db, 'post');
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPost();
  }, [])

  return (
    <postCont.Provider value={{ posts, setPost }}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostDis />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </Router>
    </postCont.Provider>
  );
}

export default App;
