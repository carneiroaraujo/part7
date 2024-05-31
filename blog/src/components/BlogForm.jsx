import { useState } from "react";
import { createBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [isHidden, setHidden] = useState(true)

  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, author, url);
    console.log();
    dispatch(createBlog({ title, author, url }))
    setHidden(true)
  }

  if (isHidden) {
    return (
        <button className="button is-normal is-fullwidth" onClick={() => setHidden(false)}>Create New Blog</button>
    )
  }
  return (
    <div className="box">

      <h1 className="title is-4 has-text-centered">Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" value={title} onChange={({ target }) => setTitle(target.value)} />
          </div>
        </div>
        <div class="field">
          <label class="label">Author</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" value={author} onChange={({ target }) => setAuthor(target.value)} />
          </div>
        </div>
        <div class="field">
          <label class="label">Url</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" value={url} onChange={({ target }) => setUrl(target.value)} />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit" onClick={handleSubmit}>Create</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" onClick={() => setHidden(true)}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
