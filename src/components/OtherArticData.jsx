import all1 from "../assets/all1.png";
import humanall1 from "../assets/humanall1.png";
import all2 from "../assets/all2.png";
import humanall2 from "../assets/humanall2.png";
import all3 from "../assets/all3.png";
import humanall3 from "../assets/humanall3.jpg";
import "../styles.css";
import ShowOtherBlog from "./OtherPosts";

function OtherBlogs() {
  const otherblogs = [
    {
      id: 1,
      title: "Understanding inheritance in React Native",
      content:
        "Inheritance is a great OOP concept to reuse code while maintaining its integrity. However, due to the structure of React Native components, inheritance is...",
      name: "Kumar Harsh",
      date: "Dec 19, 2022",
      time: "8 min read",
      img: { all1 },
      avatar: { humanall1 },
    },
    {
      id: 2,
      title: "Understanding inheritance in React Native",
      content:
        "Inheritance is a great OOP concept to reuse code while maintaining its integrity. However, due to the structure of React Native components, inheritance is...",
      name: "Fimber Elemuwa",
      date: "Dec 19, 2022",
      time: "8 min read",
      img: { all2 },
      avatar: { humanall2 },
    },
    {
      id: 3,
      title: "Understanding inheritance in React Native",
      content:
        "Inheritance is a great OOP concept to reuse code while maintaining its integrity. However, due to the structure of React Native components, inheritance is...",
      name: "Shalitha Suranga",
      date: "Dec 19, 2022",
      time: "8 min read",
      img: { all3 },
      avatar: { humanall3 },
    },
  ];

  return (
    <div className="other-posts">
      {otherblogs.map((blog) => {
        return <ShowOtherBlog key={blog.id} blog={blog} />;
      })}
      {otherblogs.map((blog) => {
        return <ShowOtherBlog key={blog.id} blog={blog} />;
      })}
      {otherblogs.map((blog) => {
        return <ShowOtherBlog key={blog.id} blog={blog} />;
      })}
    </div>
  );
}
export default OtherBlogs;
