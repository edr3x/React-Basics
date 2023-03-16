import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            NAVBAR
            <br />
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
