import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase-Config';

function App() {

  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
    })
  }

  return (
   <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/createpost'>Create Post</Link>
      {!isAuth ? <Link to='/login'>Login</Link> : <button>Log Out</button>}
    </nav>
    <Routes>
      <Route path='/' element={ <Home  />} />
      <Route path='/createpost' element={ <CreatePost /> } />
      <Route path='/login' element={ <Login setIsAuth={setIsAuth} /> } />
    </Routes>
   </Router>
  )
    // <div className="App">
    // </div>
}

export default App;
