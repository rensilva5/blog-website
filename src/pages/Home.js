import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase-Config";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postCollectorRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectorRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
                <div className="title">
                    <h1>{post.title}</h1>
                </div>
                <div className="deletePost">
                    {isAuth && post.author.id === auth.currentUser.uid &&
                    (<button onClick={() => {deletePost(post.id)}}>&#128465;</button>)}
                </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
