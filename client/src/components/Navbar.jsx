import { Link } from "react-router-dom";

function Navbar() {
    return (<nav> <h2>TechExcel</h2>

        <div>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
        </div>
    </nav>

);
}

export default Navbar;
