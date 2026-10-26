import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home-page welcome-page">
            <section className="hero welcome-hero">
                <div className="hero-content welcome-content">
                    <span className="hero-badge">TechExcel · YOUR NEXT SKILL STARTS HERE</span>
                    <h1>
                        Start your
                        <br />
                        <span>learning journey.</span>
                    </h1>
                    <p>
                        Find your next step in tech with focused learning paths,
                        hand-picked video lessons, and useful reading resources.
                        Learn at your pace, build your confidence, and turn curiosity
                        into practical skills.
                    </p>
                    <p className="welcome-prompt">Choose a path. Start learning.</p>
                    <div className="hero-actions welcome-actions">
                        <Link to="/login" className="button button-primary">Log in <span aria-hidden="true">→</span></Link>
                        <Link to="/signup" className="button button-secondary">Create an account</Link>
                    </div>
                    <div className="hero-highlights">
                        <span>📚 Clear learning paths</span>
                        <span>▶️ Curated lessons</span>
                        <span>🚀 Skills you can build on</span>
                    </div>
                </div>

                <div className="hero-visual welcome-visual" aria-hidden="true">
                    <div className="visual-orbit orbit-one"></div>
                    <div className="visual-orbit orbit-two"></div>
                    <div className="visual-center">TE</div>
                    <div className="floating-card floating-card-one">
                        <span>💡</span>
                        <div><strong>Choose a path</strong><small>Start with what interests you</small></div>
                    </div>
                    <div className="floating-card floating-card-two">
                        <span>✨</span>
                        <div><strong>Keep progressing</strong><small>One concept at a time</small></div>
                    </div>
                    <div className="visual-code"><span>learn</span> → <span>build</span> → <span>grow</span></div>
                </div>
            </section>
            <footer className="home-footer welcome-footer">
                <Link to="/" className="footer-brand">Tech<span>Excel</span></Link>
                <p>Learn today. Build tomorrow.</p>
                <span>Made for curious minds.</span>
            </footer>
        </main>
    );
}

export default Home;

