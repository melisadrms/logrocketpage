import one from "../assets/img1.png";
import human1 from "../assets/human1.png";
import two from "../assets/img2.png";
import human2 from "../assets/human2.png";
import ribbon from "../assets/ribbon.png";
import "../styles.css";

function ShowBlog({ blog }) {
  if (blog.id === 1) {
    blog.img = one;
    blog.avatar = human1;
  } else if (blog.id === 2) {
    blog.img = two;
    blog.avatar = human2;
  }

  return (
    <div className="image">
      <div className="one">
        <img className="img1" src={blog.img} alt="name" />
      </div>
      <div className="two">
        <h2 className="title">{blog.title}</h2>
        <br></br>
        <p className="content">{blog.content}</p>
        <div className="human">
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
            <p>.</p>
            <p>{blog.time}</p>
            <img className="ribbon" src={ribbon} alt="name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlog;
