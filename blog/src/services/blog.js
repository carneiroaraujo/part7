import axios from "axios";

const baseUrl = "/api/blogs/";
let token = null;
async function getAllBlogs() {
  return (await axios.get(baseUrl)).data;
}
async function createBlog(blog) {

  const config = { headers: { Authorization: token } };

  console.log(config);
  return (await axios.post(baseUrl, blog, config)).data;
}

async function updateBlog(blog) {
  return (await axios.put(baseUrl + blog.id, blog)).data;
}

async function deleteBlog(id) {
  const config = { headers: { Authorization: token } };
  return (await axios.delete(baseUrl + id, config)).data;
}

async function addComment(id, content) {
  return (await axios.post(baseUrl+id+"/comments", {content})).data;
}

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

export default { getAllBlogs, createBlog, updateBlog, addComment, deleteBlog, setToken };
