import React from "react";
import ShowBlog from "./ShowBlog";
import one from "../assets/img1.png";
import human1 from "../assets/human1.png";
import two from "../assets/img2.png";
import human2 from "../assets/human2.png";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Exploring 5 popular React Native color picker libraries",
      content:
        "React Native color picker libraries can help us select the right color scheme for our apps. Let's look at...",
      name: "Chimezie Innocent",
      date: "Dec 7, 2022",
      time: "8 min read",
      img: { one },
      avatar: { human1 },
    },
    {
      id: 2,
      title: "Strategies for migrating from a monolith to islands",
      content:
        "Our goal here is to explore how we can take advantage of the benefits of islands architecture when working...",
      name: "Sean Davis",
      date: "Nov 30, 2022",
      time: "6 min read",
      img: { two },
      avatar: { human2 },
    },
  ];

  return (
    <div>
      {blogs.map((blog) => {
        return <ShowBlog key={blog.id} blog={blog} />;
      })}
    </div>
  );
}
export default Blog;
