import { useSelector } from "react-redux";

export function HomePage() {
    const username = useSelector((state: any) => state.user.value.username);

    return <h1> This is Home Page of {username}</h1>;
}
