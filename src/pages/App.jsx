import { useState } from "react";
import logrocket from "../assets/logrocket.png";
import ribbon from "../assets/ribbon.png";
import all1 from "../assets/all1.png";
import all2 from "../assets/all2.png";
import all3 from "../assets/all3.png";
import humanall1 from "../assets/humanall1.png";
import humanall2 from "../assets/humanall2.png";
import humanall3 from "../assets/humanall3.jpg";
import "../styles.css";
import Navbar from "../components/navbar";
import Layout from "antd/es/layout/layout";
import { Card, Col, Row } from "antd";
import { Pagination, Input, Button } from "antd";
import Deneme from "../components/Deneme";
import DatabasePosts from "../components/DatabasePosts";

function App() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  function Write() {
    var array = [];
    for (var i = 0; i < 5; i++) {
      array.push(<Deneme />);
      for (var j = 0; j < 2; j++) {
        array.push(<br></br>);
      }
    }
    return array;
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

        <Card className="card left-app right-app function">
          <Write />
        </Card>

        <DatabasePosts />

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
