import React from "react";
import "../styles.css";
import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePosts() {
  const { TextArea } = Input;
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [author, setAuthor] = useState("");
  const postsCollectionRef = collection(db, "posts");

  let navigate = useNavigate();

  const CreatePost = async () => {
    await addDoc(postsCollectionRef, { title, blog, author });
    navigate("/");
  };
  const handleClick = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <div>
      <article className="post-card">
        <h3 className="name">Title of your blog: </h3>
        <input
          className="input"
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <h4 className="name">Your Blog:</h4>
        <TextArea
          className="blog"
          rows={4}
          onChange={(event) => {
            setBlog(event.target.value);
          }}
        />
        <h4 className="name">Your Name and Surname:</h4>
        <input
          className="input"
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <br />
        <div className="buttons">
          <Button onClick={CreatePost} className="create">
            Create Post.
          </Button>
          <Button onClick={handleClick} className="create">
            Go Back.
          </Button>
        </div>
      </article>
    </div>
  );
}

export default CreatePosts;
