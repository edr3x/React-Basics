import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { MenuPage } from "./pages/Menu";

export function ReactRouterDemo() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route
                        path="*"
                        element={<h1>ERROR 404 PAGE NOT_FOUND</h1>}
                    />
                </Routes>
            </Router>
        </>
    );
}
