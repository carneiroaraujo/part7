import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../reducers/userReducer";

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  function handleLogout() {
    dispatch(logout())
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/blogs"> Blogs</Link>
          <Link className="navbar-item" to="/users"> Users</Link>
        </div>

        <div className="navbar-end">
          {
            user
              ?
              <div className="navbar-item">
                <p>{user.name} logged in</p>
              </div>

              : null
          }

          <div className="navbar-item">
            <div className="buttons">
              {
                user
                  ?
                  <a className="button is-danger" onClick={handleLogout}>
                    Log out
                  </a>
                  :
                    <Link className="button is-light" to={"/login"}>Login</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}