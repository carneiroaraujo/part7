import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentBlog, updateBlog } from "../reducers/blogReducer";
import { useParams, Link } from "react-router-dom";

function Blog() {
  const [comment, setComment] = useState("")
  // const { user, blogs } = useSelector(state => state)
  const user = useSelector(({ user }) => user)
  const blogs = useSelector(({ blogs }) => blogs)
  const blogId = useParams().id
  const blog = blogs.find(blog => blog.id === blogId)
  // const isOwned = user.id === blog.user.id

  const dispatch = useDispatch()
  if (!blog) {
    return <div>it is still loading</div>
  }
  function handleLike() {
    dispatch(updateBlog({ ...blog, likes: blog.likes + 1 }))
  }
  function handleComment() {
    dispatch(commentBlog(blogId, comment))
    setComment("")
  }

  return (
    <section className="section">

      <nav className="level">

        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="title">{blog.title}</p>
              <p className="subtitle">Added by {blog.author}</p>
            </div>
          </div>

        </div>


        <div className="level-right">
          <button className="button" onClick={handleLike}>
            <strong>{blog.likes} Likes</strong>
          </button>
        </div>
      </nav>

      <p className="title is-4">Comments session</p>
      <article className="media">
        <div className="media-content">
          <div className="content">
            {
              blog.comments.map(comment => 
                <p>
                  <strong>Anonymous</strong>
                  <br />
                  {comment}
                  <br />
                </p>
              )
            }

          </div>
        </div>
      </article>

      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              
              <textarea
                className="textarea"
                placeholder="Add a comment..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button" onClick={handleComment}>Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Blog;
