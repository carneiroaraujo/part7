import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Notification from "./Notification";
import { login } from "../reducers/userReducer"

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const notification = useSelector(({ notification }) => notification)
    const dispatch = useDispatch()

    async function handleLoginSubmit(event) {
        event.preventDefault();
        try {
            dispatch(login(username, password))
        } catch {
            console.log("problem");
            notificate("wrong username or password", "error")
        }
    }
    return (
        <section className="section">
            <form class="box" onSubmit={handleLoginSubmit}>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input 
                        class="input" 
                        type="text" 
                        placeholder="johndoe"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)} 
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input
                        class="input"
                        type="password" 
                        placeholder="********"
                        data-testid="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                        
                    </div>
                </div>

                <button class="button is-primary" type="submit">Sign in</button>
            </form>
        </section>
    )
    return (
        <>
            <h2>Log in to application</h2>
            <Notification {...notification} />
            <form onSubmit={handleLoginSubmit}>
                <div>
                    username
                    <input
                        type="text"
                        data-testid="username"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="text"
                        data-testid="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </>
    );
}