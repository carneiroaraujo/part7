import { useSelector } from "react-redux";
import Blog from "./Blog";
import BlogForm from "./BlogForm";
import Toggable from "./Toggable";
import { Link } from "react-router-dom";

export default function BlogList() {
  const blogs = useSelector(({ blogs }) => blogs)
  return (
    <div className="section">
 
      {/* <Toggable buttonLabel="Create new blog">
      </Toggable> */}
        <BlogForm />
      <div className="section">
        <article class="media">
          <div class="media-content">
            <div class="content">
              {[...blogs]
                .sort((a, b) => b.likes - a.likes)
                .map((blog) => (
                  <p key={blog.id}>
                    <Link to={"/blogs/"+blog.id}><strong>{blog.title}</strong></Link> <small>by {blog.author}</small>
                    <br />
                  </p>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}