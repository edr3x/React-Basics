import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import { NavBar } from "./components/NavBar";

import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

import { store } from "./store";

export function ReduxToolKitDemo() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/contact" element={<ContactPage />} />

                        <Route
                            path="*"
                            element={<h1>ERROR 404 PAGE NOT_FOUND</h1>}
                        />
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}
