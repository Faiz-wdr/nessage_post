import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs ,collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import './Message.css'

const Message = ({isAuth}) => {

const [ postList, setPostList] = useState([]);
const [ loading, setLoading] = useState(false);
const postCollectionRef = collection(db, 'posts');

const getPosts = async() => {
    setLoading(false);
    const data= await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc)=> ({...doc.data(), id:doc?.id})))
    setLoading(false);
}

const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc);
    getPosts();
    
}

useEffect (() =>{
    getPosts();
},[])

if(loading){
    return <h3>Loading...</h3>
}

  return (
    <div className="Homepage">
      {postList.length === 0 ? <h3> Loading...</h3> : postList.map( (post) => {
        return (
          <div key={post.id} className="card">
          
            <div className="card-body">
            {isAuth && post.author.id === auth.currentUser.uid && <div className='d-flex'>
          <button className='btn-dlt-msg' onClick={() => {deletePost(post?.id)}}>
          Delete Message
          </button>
          </div>}
              <h5 className="card-title">{post?.title}</h5>
              <p className="post">{post.postTitle}</p>
              {/* <span className="badge bg-dark">{post.author?.name}</span> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Message