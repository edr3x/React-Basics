import { useContext, useState } from "react";
import { AppContext, AppContextType } from "../StateManagement";

export function ChangeProfile() {
    const [newUsername, setNewUsername] = useState<string>("");

    const { setUsername } = useContext<AppContextType>(AppContext);

    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)} />

            <button onChange={() => setUsername(() => newUsername)}>
                Change Username
            </button>
        </div>
    );
}
