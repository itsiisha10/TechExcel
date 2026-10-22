import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>TechExcel</h2>
                    <p>
                        Learn new skills, explore resources, and build your future
                        with TechExcel.
                    </p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/topics">Explore Topics</Link>
                </div>
                <div className="footer-contact">
                    <h3>Keep Learning</h3>
                    <p>Your journey. Your pace. Your future.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} TechExcel. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;