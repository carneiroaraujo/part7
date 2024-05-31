import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadUserFromStorage } from "../reducers/userReducer";
import { Link } from "react-router-dom";
import userService from "../services/user"
export default function Users() {
  const user = useSelector(({ user }) => user)
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUserFromStorage())
    userService.getAll().then(r => {
      setUsers(r)
    })
  }, []);


  function handleLogout() {

  }
  console.log(users);
  return (
    <div>
      <h2>Users</h2>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={user.id}>{user.name}</Link>
                
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}