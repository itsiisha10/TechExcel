import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicPage from "./pages/TopicPage";

function App() {
    return (<BrowserRouter> <Navbar />

      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:id" element={<TopicPage />} />
        </Routes>
    </BrowserRouter>


);
}

export default App;
