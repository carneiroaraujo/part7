import { useEffect, useState } from "react";
import Users from "./components/Users";
import User from "./components/User";

import Blog from "./components/Blog";

import "./App.css";
import { initializeBlogs } from "./reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { loadUserFromStorage, logout } from "./reducers/userReducer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  useEffect(() => {
    dispatch(loadUserFromStorage())
  }, []);
  useEffect(() => {
    dispatch(initializeBlogs())
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <section className="hero">
          <div className="hero-body">
          </div>
        </section> */}
        <p className="title">Blog App</p>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/blogs"} />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/blogs" element={user ? <BlogList /> : <Navigate replace to={"/login"} />} />
          <Route path="/login" element={user ? <Navigate replace to={"/blogs"} /> : <LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
