import Posts from './Components/Show';
import Write from './Components/Write';
import LandingPage from './Components/LandingPage';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Routes>
     <Route path='/'  element={<LandingPage />} />
       <Route path='/posts'  element={<Posts />} />
       <Route path='/write'  element={<Write />} />

     </Routes>
   </Router>
  );
}

export default App;
