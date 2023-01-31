import * as React from "react";
import logo from "../assets/logo.jpeg";
import "../styles.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:5174">
        DEV
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.logrocket.com/product-management"
      >
        PRODUCT MANAGEMENT
      </a>
    ),
    key: "1",
  },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/createpost");
  };

  return (
    <div className="navbar">
      <a href="https://logrocket.com">
        <img className="logo" src={logo} alt="logo" width={35} height={35} />
      </a>
      <nav className={`${showNavbar && "active"}`}>
        <ul id="menuList" className="left">
          <li>
            <Dropdown className="blog" menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Blog
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="https://podrocket.logrocket.com">
              <Button style={{ color: "#764abc" }} type="text" className="left">
                PODCAST
              </Button>
            </a>
          </li>
          <li>
            <a href="https://blog.logrocket.com/tech-meetups/">
              <Button style={{ color: "#764abc" }} type="text" className="left">
                MEETUPS
              </Button>
            </a>
          </li>
          <li>
            <a href="https://logrocket.com/signup/">
              <Button
                style={{ color: "white", backgroundColor: "#764abc" }}
                className="right"
              >
                START MONITORING FOR FREE
              </Button>
            </a>
          </li>
          <li>
            <Button
              onClick={handleClick}
              style={{ color: "#764abc" }}
              type="text"
              className="right2"
            >
              Create A Post
            </Button>
          </li>
        </ul>
      </nav>
      <MenuOutlined className="menu" onClick={handleShowNavbar} />
    </div>
  );
}
