import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

export type AppContextType = {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType>({
    username: "",
    setUsername: () => {},
});

export function StateManagementDemo() {
    const [username, setUsername] = useState<string>("ObiWan");

    return (
        <div>
            <AppContext.Provider value={{ username, setUsername }}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/contact" element={<ContactPage />} />

                        <Route
                            path="*"
                            element={<h1>ERROR 404 PAGE NOT_FOUND</h1>}
                        />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}
