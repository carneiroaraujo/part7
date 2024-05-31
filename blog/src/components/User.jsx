
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadUserFromStorage } from "../reducers/userReducer";
import { useParams } from "react-router-dom";

import userService from "../services/user"
export default function Users() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])

  useEffect(() => {
    dispatch(loadUserFromStorage())
    userService.getAll().then(r => {
      setUsers(r)
    })
  }, []);

  if (!users.length) {
    return <div>still loading...</div>
  }
  const id = useParams().id
  const user = users.find(user => user.id === id)
  if (!user) {
    return <div>something went wrong</div>
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>

      {
        user.blogs.map(blog => 
          <li>{blog.title}</li>  
        )
      }
      </ul>
    </div>
  )
}