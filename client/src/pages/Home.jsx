import { Link } from "react-router-dom";

const learningPaths = [
    {
        id: "dsa-cpp",
        title: "DSA with C++",
        icon: "⚙️",
        category: "PROGRAMMING",
        description:
            "Master data structures and algorithms using C++. Build strong problem-solving skills.",
        topics: ["Arrays", "Linked Lists", "Trees", "Graphs"],
        level: "Beginner to Advanced",
    },
    {
        id: "dsa-python",
        title: "DSA with Python",
        icon: "🐍",
        category: "PROGRAMMING",
        description:
            "Learn algorithms, solve coding challenges, and develop logical thinking with Python.",
        topics: ["Python Basics", "Searching", "Sorting", "Recursion"],
        level: "Beginner to Advanced",
    },
    {
        id: "frontend",
        title: "Frontend Development",
        icon: "🎨",
        category: "WEB DEVELOPMENT",
        description:
            "Create beautiful, interactive websites using modern frontend technologies.",
        topics: ["HTML", "CSS", "JavaScript", "React"],
        level: "Beginner Friendly",
    },
    {
        id: "backend",
        title: "Backend Development",
        icon: "🛠️",
        category: "WEB DEVELOPMENT",
        description:
            "Understand servers, APIs, authentication, and the logic behind web applications.",
        topics: ["Node.js", "Express", "REST APIs", "Authentication"],
        level: "Beginner Friendly",
    },
    {
        id: "fullstack",
        title: "Full Stack Development",
        icon: "🌐",
        category: "WEB DEVELOPMENT",
        description:
            "Connect frontend and backend skills to build complete web applications.",
        topics: ["React", "Node.js", "APIs", "Deployment"],
        level: "Project Based",
    },
    {
        id: "databases",
        title: "Databases",
        icon: "🗄️",
        category: "DATA & STORAGE",
        description:
            "Learn how applications store, organize, query, and manage information.",
        topics: ["PostgreSQL", "SQL", "Prisma", "MongoDB"],
        level: "Beginner Friendly",
    },
    {
        id: "github",
        title: "Git & GitHub",
        icon: "🐙",
        category: "DEVELOPER TOOLS",
        description:
            "Learn version control, manage repositories, collaborate, and contribute to projects.",
        topics: ["Git Basics", "Branches", "Commits", "Pull Requests"],
        level: "Beginner Friendly",
    },
];

function Home() {
    return (
        <main className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-badge">
                        YOUR JOURNEY. YOUR PACE. YOUR FUTURE.
                    </span>

                    <h1>
                        Learn skills.
                        <br />
                        <span>Build your future.</span>
                    </h1>

                    <p>
                        Your one-stop destination for learning programming, web
                        development, databases, and the tools that turn ideas into
                        real-world projects.
                    </p>

                    <div className="hero-actions">
                        <Link to="/topics" className="button button-primary">
                            Explore Learning Paths →
                        </Link>

                        <a href="#learning-paths" className="button button-secondary">
                            Discover Topics
                        </a>
                    </div>

                    <div className="hero-highlights">
                        <span>📚 Structured roadmaps</span>
                        <span>▶️ Video resources</span>
                        <span>💻 Practical learning</span>
                    </div>
                </div>

                <div className="hero-visual" aria-label="Learning illustration">
                    <div className="visual-orbit orbit-one"></div>
                    <div className="visual-orbit orbit-two"></div>

                    <div className="visual-center">TE</div>

                    <div className="floating-card floating-card-one">
                        <span>💻</span>
                        <div>
                            <strong>Keep Building</strong>
                            <small>Learn by doing</small>
                        </div>
                    </div>

                    <div className="floating-card floating-card-two">
                        <span>🚀</span>
                        <div>
                            <strong>Level Up</strong>
                            <small>One topic at a time</small>
                        </div>
                    </div>

                    <div className="visual-code">
                        <span>const</span> future = <span>"yours"</span>;
                    </div>
                </div>
            </section>

            <section className="learning-section" id="learning-paths">
                <div className="section-heading">
                    <div>
                        <span className="section-eyebrow">FIND YOUR DIRECTION</span>
                        <h2>Explore learning paths</h2>
                        <p>
                            Everything you need to move from learning concepts to building
                            something real.
                        </p>
                    </div>

                    <Link to="/topics" className="text-link">
                        View all topics →
                    </Link>
                </div>

                <div className="learning-grid">
                    {learningPaths.map((path, index) => (
                        <article className="learning-card" key={path.id}>
                            <div className="card-topline">
                                <span className="card-icon">{path.icon}</span>
                                <span className="card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <span className="card-category">{path.category}</span>

                            <h3>{path.title}</h3>

                            <p className="card-description">{path.description}</p>

                            <div className="topic-tags">
                                {path.topics.map((topic) => (
                                    <span key={topic}>{topic}</span>
                                ))}
                            </div>

                            <div className="card-footer">
                                <span className="level-label">{path.level}</span>

                                <Link
                                    to={`/topic/${path.id}`}
                                    className="card-link"
                                    aria-label={`Explore ${path.title}`}
                                >
                                    Explore <span>↗</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="learning-banner">
                <div>
                    <span className="section-eyebrow">START WHERE YOU ARE</span>
                    <h2>Small steps. Real skills. Bigger possibilities.</h2>
                    <p>
                        Choose a learning path, explore the resources, and keep practising.
                    </p>
                </div>

                <Link to="/topics" className="button button-primary">
                    Start Exploring →
                </Link>
            </section>

            <footer className="home-footer">
                <Link to="/" className="footer-brand">
                    Tech<span>Excel</span>
                </Link>

                <p>Learn today. Build tomorrow.</p>

                <span>Made for curious minds.</span>
            </footer>
        </main>
    );
}

export default Home;