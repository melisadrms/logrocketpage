import { useState } from "react";
import logrocket from "../assets/logrocket.png";
import "../styles.css";
import Navbar from "../components/navbar";
import Layout from "antd/es/layout/layout";
import { Card } from "antd";
import { Pagination, Input, Button } from "antd";
import DatabasePosts from "../components/DatabasePosts";
import Blog from "../components/ArticlesData";
import OtherBlogs from "../components/OtherArticData";

function App() {
  const [current, setCurrent] = useState(3);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="container">
      <Layout className="App">
        <Navbar />

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
          <Blog />
        </Card>

        <DatabasePosts />

        <h1 className="titleOne"> All Stories </h1>
        <hr className="hr" />
        <Card className="card left-app right-app function">
          <OtherBlogs />
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
