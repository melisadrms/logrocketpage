import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ribbon from "../assets/ribbon.png";

function DatabasePosts() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  let postList1 = [];
  let postList2 = [];

  for (let i = 0; i < postList.length; i++) {
    if (i % 2 == 0) {
      postList1.push(postList[i]);
    } else {
      postList2.push(postList[i]);
    }
  }

  return (
    <div className="site-card-wrapper">
      <Row className="row" gutter={24}>
        <Col span={12}>
          {postList1.map((post, i) => {
            return (
              <Card className="card left-app" bordered={true}>
                <div className="two-database">
                  <div key={post._id}>
                    <a href={post._id}>
                      <Link to={`/posts/${post.id}`}>
                        <h2 className="title"> {post.title} </h2>
                      </Link>
                    </a>
                    <br></br>
                    <p className="new-content">{post.blog}</p>
                    <div className="human-database">
                      <p>{post.author}</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img
                          className="ribbon-database"
                          src={ribbon}
                          alt="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </Col>
        <Col span={12}>
          {postList2.map((post) => {
            return (
              <Card className="card right-app" bordered={true}>
                <div className="two-database">
                  <div key={post._id}>
                    <a href={post._id}>
                      <Link to={`/posts/${post.id}`}>
                        <h2 className="title"> {post.title} </h2>
                      </Link>
                    </a>
                    <br></br>
                    <p className="new-content">{post.blog}</p>
                    <div className="human-database">
                      <p>{post.author}</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img
                          className="ribbon-database"
                          src={ribbon}
                          alt="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default DatabasePosts;
