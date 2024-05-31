import { createSlice, current } from "@reduxjs/toolkit"
import blogService from "../services/blog"
const blogSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        setBlogs(state, { payload }) {
            return payload
        },
        concatBlog(state, { payload }) {
            state.push(payload)
        },
        replaceBlog(state, { payload }) {
            return state.map(blog => blog.id === payload.id ? payload : blog)
        },
        concatComment(state, { payload }) {
            const { id, content } = payload
            return state.map(blog => blog.id === id
                ? {...blog, comments: [...blog.comments, content]}
                : blog
            )
        }
    }
})

const { setBlogs, concatBlog, replaceBlog, concatComment } = blogSlice.actions

export function initializeBlogs() {
    return async function (dispatch) {
        dispatch(setBlogs(await blogService.getAllBlogs()))
    }
}

export function createBlog(blog) {
    return async function (dispatch, getState) {
        blogService.setToken(getState().user.token)
        dispatch(concatBlog(await blogService.createBlog(blog)))
    }
}

export function updateBlog(newBlog) {
    return async function (dispatch) {
        dispatch(replaceBlog(await blogService.updateBlog(newBlog)))
    }
}

export function commentBlog(id, content) {
    return async function (dispatch) {
        const payload = {
            id,
            content: (await blogService.addComment(id, content)).content
        }
        dispatch(concatComment(payload))
    }
}
export default blogSlice.reducer