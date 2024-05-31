import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login"
const slice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        loadUserFromStorage(state, action) {
            const loggedUser = window.localStorage.getItem("blogAppLoggedUser");
            if (loggedUser) {
                const user = JSON.parse(loggedUser);
                // blogService.setToken(user.token);
                return user
            }
            return null
        },
        setUser(state, { payload }) {
            return payload
        }
    },
});

const {setUser} = slice.actions

export const {loadUserFromStorage} = slice.actions

export function login(username, password) {
    return async function (dispatch) {
        const user = await loginService.login({ username, password });
        dispatch(setUser(user));
        window.localStorage.setItem("blogAppLoggedUser", JSON.stringify(user));
    }
}
export function logout() {
    return function (dispatch) {

        window.localStorage.removeItem("blogAppLoggedUser");
        dispatch(setUser(null))
    }
}
export default slice.reducer