import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <span>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
        </span>
    );
}
