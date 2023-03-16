import { useContext } from "react";
import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext, AppContextType } from "../StateManagement";

export function ProfilePage() {
    const { username } = useContext<AppContextType>(AppContext);

    return (
        <div>
            <h1>PROFILE of {username}</h1>
            <ChangeProfile />
        </div>
    );
}
