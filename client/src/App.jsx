import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Home from "./pages/Home.jsx";
import Topics from "./pages/Topics.jsx";
import TopicPage from "./pages/TopicPage.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function ProtectedRoute({ user, children }) {
    return user ? children : <Navigate to="/login" replace />;
}

function AppContent() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function logout() {
        setUser(null);
        navigate("/");
    }

    return (
        <>
            <ScrollToTop />
            <Navbar user={user} onLogout={logout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<AuthPage mode="login" onSuccess={setUser} />} />
                <Route path="/signup" element={<AuthPage mode="signup" onSuccess={setUser} />} />
                <Route path="/topics" element={<ProtectedRoute user={user}><Topics /></ProtectedRoute>} />
                <Route path="/topic/:id" element={<ProtectedRoute user={user}><TopicPage /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;


