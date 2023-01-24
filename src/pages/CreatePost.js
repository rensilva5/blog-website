import React from "react";

const CreatePost = () => {
    return (
        <div className="createPostPage">
            <div className="createPostContainer">
                <h1>Create Post</h1>
                <div className="inputCreate">
                    <label>Title</label>
                    <input placeholder="Title..." />
                </div>
                <div className="inputCreate">
                    <label>Post</label>
                    <textarea placeholder="Post..."/>
                </div>
                <button>Submit Post</button>
            </div>
        </div>
    );
}
 
export default CreatePost;