import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postsCollectionRef]);

  useEffect(() => {
    let blog = postList.find((blog) => blog.id === id);
    if (!blog) return;

    setBlog(blog);
  }, [postList, id]);

  if (!blog) {
    return (
      <article class="card-post">
        <p class="skeleton card-title"></p>
        <p class="skeleton card-body"></p>
        <p class="skeleton card-body"></p>
        <p class="skeleton card-body"></p>
        <div class="info-loading">
          <p class="skeleton button"></p>
          <p class="skeleton button"></p>
        </div>
      </article>
    );
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="post-element">
      <article className="post">
        <h1 className="detail-title">{blog.title}</h1>
        <div className="detail-blog">
          <text>{blog.blog}</text>
        </div>
        <div className="info-database">
          <h3 className="detail-author">{blog.author}</h3>
          <button onClick={handleClick} className="back-button">
            Go Back.
          </button>
        </div>
      </article>
    </div>
  );
};

export default Post;
