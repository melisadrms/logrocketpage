import all1 from "../assets/all1.png";
import humanall1 from "../assets/humanall1.png";
import all2 from "../assets/all2.png";
import humanall2 from "../assets/humanall2.png";
import all3 from "../assets/all3.png";
import humanall3 from "../assets/humanall3.jpg";
import ribbon from "../assets/ribbon.png";
import "../styles.css";

function ShowOtherBlog({ blog }) {
  if (blog.id === 1) {
    blog.img = all1;
    blog.avatar = humanall1;
  } else if (blog.id === 2) {
    blog.img = all2;
    blog.avatar = humanall2;
  } else if (blog.id === 3) {
    blog.img = all3;
    blog.avatar = humanall3;
  }

  return (
    <div className="all">
      <img className="imgall-bottom" src={blog.img} alt="name" />
      <div className="two">
        <h2 className="left-card">{blog.title}</h2>
        <p className="content">{blog.content}</p>
      </div>
      <div className="humanall">
        <img
          className="avatar"
          src={blog.avatar}
          alt="name"
          width={20}
          height={20}
        />
        <p>{blog.name}</p>
        <div className="details">
          <p>{blog.date}</p>
          <p className="dot">.</p>
          <p>{blog.time}</p>
          <img className="ribbon" src={ribbon} alt="name" />
        </div>
      </div>
    </div>
  );
}

export default ShowOtherBlog;

{
}
