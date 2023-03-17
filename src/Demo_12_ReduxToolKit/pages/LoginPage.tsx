import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//note: useDispatch is for modifying state
//note: useSelector is for getting state

import { logout, login } from "../store";

export function LoginPage() {
    const [newUsername, setNewUsername] = useState<string>("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>{username}</h1>
            <input
                type="text"
                onChange={(event) => setNewUsername(event.target.value)}
            />
            <button onClick={() => dispatch(login({ username: newUsername }))}>
                Login
            </button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}
