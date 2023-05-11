import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db} from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'


const CreatePost = ({isAuth}) => {

  const [ title, setTitle] = useState('');
  const [ postTitle, setPostTitle] = useState('');

  let navigate = useNavigate();

  const postCollectionRef = collection(db, 'posts');
  const createPost = async() =>   {
    if (title === '' || postTitle ===  ''){
      alert ('Fill all Fields');
      return false;
    }else{
      try{
        await addDoc(postCollectionRef, {
          title,
          postTitle,
          author: {
            name: auth?.currentUser?.displayName,
            // id: auth.currentUser.id
          }
        })
        console.log(auth);
        navigate('/Message');
      }catch(error){
        console.log('error');
      }
    }
  }

  useEffect(() => {
    if(!isAuth){
      navigate("/login");
    }
  })

  return (
    <div className='container'>
    <div className='card-msg'>
    <h1>Post a Message</h1>
      <div className='mb-3'>
        {/* <label htmlFor='title' className='form-label'>Title</label> */}
        <input type='text' placeholder='Message Title' className='form-control' onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='mb-3'>
        {/* <label htmlFor='posts' className='form-label'>Posts</label> */}
        <textarea placeholder='Your Message' className='form-control-msg'  onChange={(e) => setPostTitle(e.target.value)}></textarea>
      </div>
      <button className='btn-createpost' onClick={createPost}>Submit</button>

    </div>
    
    </div>
  )
}

export default CreatePost