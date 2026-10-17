import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicPage from "./pages/TopicPage";

function ScrollToTop() {
    const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

return null;

}

function App() {
    return (<BrowserRouter> <ScrollToTop /> <Navbar />

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:id" element={<TopicPage />} />
        </Routes>
    </BrowserRouter>
    );
    

}

export default App;
