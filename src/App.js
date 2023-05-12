import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import LogIn from './Pages/LogIn';
import Message from './Pages/Message';
import Footer from './Pages/Footer';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';



function App(){

const [ isAuth, setIsAuth ] = useState(localStorage.getItem('isAuth'));

const signUserOut = () =>{
signOut(auth)?.then(() => {
  localStorage.clear();
  setIsAuth(false);
  window.location.pathname = '/login';
})

}
  return (
    <div className='bckgrd'>
    <div className="bg">
      <Router>
        <div className="navbar">
          <Link to="/" className="nav-text">
            Home
          </Link>

          {!isAuth ? (
            <Link to="/Login" className="nav-text">
              Log In
            </Link>
          ) : (
            <>
              <Link to="/Message" className="nav-text">
                Messages
              </Link>
              <Link to="/CreatePost" className="nav-text">
                Create
              </Link>
              <button className="btn-logout" onClick={signUserOut}>
                Log Out
              </button>
            </>
          )}
        </div>

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Message" element={<Message isAuth={isAuth}/>} />
            <Route path="/CreatePost" element={<CreatePost isAuth={isAuth} />} />
            <Route path="/login" element={<LogIn setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
      </Router>
      <Footer /> 
    </div>
    </div>
  );
}

export default App;