import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NavBar } from "./components/NavBar";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Menu";

export function ReactQueryDemo() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <div>
            <QueryClientProvider client={client}>
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
            </QueryClientProvider>
        </div>
    );
}
