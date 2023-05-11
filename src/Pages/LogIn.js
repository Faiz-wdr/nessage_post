import { signInWithEmailAndPassword } from 'firebase/auth';
import React , { useState, useEffect} from 'react';
import { auth } from '../firebase-config';
import { useNavigate, Navigate } from 'react-router-dom';
// import useBodyScrollLock from './ScrollLock';


const Signin = ({setIsAuth}) => {
  // useBodyScrollLock();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const navigate = useNavigate();

    

    const Signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => { 
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/Message')

        }).catch((error) => {
        alert('Are You a Actual User?');
        });

        
        
    }
   
    
    return (
      
      <div className='bg-logs'>
        <div className="s-container">
          <form className="login-form" onSubmit={Signin}>
            <div className="form-text-area">
              <input className='form-log'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input className='form-log'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button className="btn" type="submit" >
              Log In
            </button>
          </form>
        </div>
        
      </div>
      
    );
}

export default Signin