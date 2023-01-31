import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import logrocket from "./assets/logrocket.png";
import one from "./assets/img1.png";
import human1 from "./assets/human1.png";
import human2 from "./assets/human2.png";
import ribbon from "./assets/ribbon.png";
import two from "./assets/img2.png";
import all1 from "./assets/all1.png";
import all2 from "./assets/all2.png";
import all3 from "./assets/all3.png";
import humanall1 from "./assets/humanall1.png";
import humanall2 from "./assets/humanall2.png";
import humanall3 from "./assets/humanall3.jpg";
import "./styles.css";
import Navbar from "./comp/navbar";
import Layout from "antd/es/layout/layout";
import { Card, Col, Row } from "antd";
import { Pagination, Input, Button } from "antd";
import { Link } from "react-router-dom";

function App() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

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
    <div className="container">
      <Layout className="App">
        <div>
          <Navbar />
        </div>
        <img
          className="img"
          src={logrocket}
          alt="name"
          width={150}
          height={40}
        />
        <h1 className="titleOne"> Featured Posts</h1>
        <hr className="hr" />
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img className="img1" src={one} alt="name" />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p>.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="card left-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={one}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Exploring 5 popular React Native color picker libraries
                    </h2>
                    <br></br>
                    <p className="content">
                      React Native color picker libraries can help us select the
                      right color scheme for our apps. Let's look at...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human1}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Chimezie Innocent</p>
                      <div className="details">
                        <p>Dec 7, 2022</p>
                        <p className="dot">.</p>
                        <p>8 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="card right-app" bordered={true}>
                <div className="image">
                  <div className="one">
                    <img
                      className="img1"
                      src={two}
                      alt="name"
                      width={150}
                      height={40}
                    />
                  </div>
                  <div className="two">
                    <h2 className="title">
                      Strategies for migrating from a monolith to islands
                    </h2>
                    <br></br>
                    <p className="content">
                      Our goal here is to explore how we can take advantage of
                      the benefits of islands architecture when working...
                    </p>
                    <div className="human">
                      <img
                        className="avatar"
                        src={human2}
                        alt="name"
                        width={20}
                        height={20}
                      />
                      <p>Sean Davis</p>
                      <div className="details">
                        <p>Nov 30, 2022</p>
                        <p className="dot">.</p>
                        <p>6 min read</p>
                        <img className="ribbon" src={ribbon} alt="name" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
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
        <h1 className="titleOne"> All Stories </h1>
        <hr className="hr" />
        <div className="bottom-cards">
          <Row gutter={24}>
            <Col span={9}>
              <Card className="card left-app" bordered={true}>
                <img className="imgall" src={all1} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall1}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Kumar Harsh</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>8 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="card middle" bordered={true}>
                <img className="imgall-bottom" src={all2} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall2}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Fimber Elemuwa</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>5 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={9}>
              <Card className="card right-app" bordered={true}>
                <img className="imgall" src={all3} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall3}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Shalitha Suranga</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>14 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bottom-cards">
          <Row gutter={24}>
            <Col span={9}>
              <Card className="card left-app" bordered={true}>
                <img className="imgall" src={all1} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall1}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Kumar Harsh</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>8 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="card middle" bordered={true}>
                <img className="imgall-bottom" src={all2} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall2}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Fimber Elemuwa</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>5 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={9}>
              <Card className="card right-app" bordered={true}>
                <img className="imgall" src={all3} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall3}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Shalitha Suranga</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>14 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bottom-cards">
          <Row gutter={24}>
            <Col span={9}>
              <Card className="card left-app" bordered={true}>
                <img className="imgall" src={all1} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall1}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Kumar Harsh</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>8 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="card middle" bordered={true}>
                <img className="imgall-bottom" src={all2} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall2}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Fimber Elemuwa</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>5 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={9}>
              <Card className="card right-app" bordered={true}>
                <img className="imgall" src={all3} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall3}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Shalitha Suranga</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>14 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bottom-cards">
          <Row gutter={24}>
            <Col span={9}>
              <Card className="card left-app" bordered={true}>
                <img className="imgall" src={all1} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall1}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Kumar Harsh</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>8 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="card middle" bordered={true}>
                <img className="imgall-bottom" src={all2} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall2}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Fimber Elemuwa</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>5 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={9}>
              <Card className="card right-app" bordered={true}>
                <img className="imgall" src={all3} alt="name" />
                <div className="two">
                  <h2 className="left-card">
                    Understanding inheritance in React Native
                  </h2>
                  <p className="content">
                    Inheritance is a great OOP concept to reuse code while
                    maintaining its integrity. However, due to the structure of
                    React Native components, inheritance is...
                  </p>
                </div>
                <div className="humanall">
                  <img
                    className="avatar"
                    src={humanall3}
                    alt="name"
                    width={20}
                    height={20}
                  />
                  <p>Shalitha Suranga</p>
                  <div className="details">
                    <p>Dec 19, 2022</p>
                    <p className="dot">.</p>
                    <p>14 min read</p>
                    <img className="ribbon" src={ribbon} alt="name" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <hr className="hr" />
          <Pagination
            className="pagination"
            current={current}
            onChange={onChange}
            total={50}
          />
          <hr className="hr" />
        </div>
        <div className="searchbar">
          <Input className="search" />
          <Button>Search</Button>
        </div>
        <br />
      </Layout>
    </div>
  );
}

export default App;
