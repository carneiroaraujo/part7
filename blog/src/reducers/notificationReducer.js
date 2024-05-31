export default function notificationReducer(state={message:null, type:null}, action) {
    if (action.type === "SET") {
        return action.payload
    } else if (action.type === "HIDE") {
        return {message:null}
    }
    return state
}

export function hideNotification() {
    return {
        type: "HIDE"
    }
}

export function showNotification(message, type) {
    
    return {
        type: "SET",
        payload: {
            message, type
        }
    }
}
















// import {createSlice} from "@reduxjs/toolkit"
// const NotificationSlice = createSlice({
//     name: "notification",
//     initialState: null,
//     reducers: {
//         setNotification(state, {payload}) {
//             console.log(payload);
//             return payload
//         },
//         hideNotification(state, action) {
//             return null
//         }
//     }
// })


// export const {setNotification, hideNotification} = NotificationSlice.actions

// export function notificate(message, type) {
//     return function(dispatch) {
//         dispatch(setNotification({message, type}))
//         setTimeout(() => {
//             dispatch(hideNotification())
//         }, 5000);
//     }
// }

// export function notificate(message, type) {
//     return function(dispatch) {
//         dispatch(setNotification({message, type}))
//         setTimeout(() => {
//             dispatch(hideNotification())
//         }, 5000);
//     }
// }

// export default NotificationSlice.reducer
