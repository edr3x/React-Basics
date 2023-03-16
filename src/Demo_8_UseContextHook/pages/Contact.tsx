import { useContext } from "react";
import { AppContext, AppContextType } from "../StateManagement";
export function ContactPage() {
    const { username } = useContext<AppContextType>(AppContext);
    return (
        <div>
            <h1>Contact {username}</h1>
        </div>
    );
}
