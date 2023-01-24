import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase-Config";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectorRef = collection(db, 'posts')
  let navigate = useNavigate()

  const createPost = async () => {
    await addDoc(postCollectorRef, {title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }})
    navigate("/")
  };

  useEffect(() => {
    if (!isAuth) {
        navigate('login')
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>Create Post</h1>
        <div className="inputCreate">
          <label>Title</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputCreate">
          <label>Post</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
