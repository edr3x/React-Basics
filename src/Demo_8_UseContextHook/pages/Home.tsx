import { useContext } from "react";
import { AppContext, AppContextType } from "../StateManagement";

export function HomePage() {
    const { username } = useContext<AppContextType>(AppContext);

    return <h1>THIS IS THE HOME PAGE of {username} </h1>;
}
