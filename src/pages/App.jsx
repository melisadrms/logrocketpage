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
import DatabasePosts from "../components/DatabasePosts";
import FirstPosts from "../components/FirstPosts";
import Posts from "../components/3Posts";

function App() {
  const [current, setCurrent] = useState(3);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  function Write() {
    var array = [];
    for (var i = 0; i < 5; i++) {
      array.push(<FirstPosts />);
      for (var j = 0; j < 2; j++) {
        array.push(<br></br>);
      }
    }
    return array;
  }

  function Write2() {
    var array = [];
    for (var i = 0; i < 3; i++) {
      array.push(<Posts />);
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
        <Card className="card left-app right-app function">
          <Write2 />
        </Card>
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
