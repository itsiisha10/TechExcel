import { Link } from "react-router-dom";
const topics = [
    {
        id: "dsa-cpp",
        icon: "⚙️",
        category: "PROGRAMMING",
        title: "DSA with C++",
        description:
            "Learn data structures, algorithms, and problem-solving using C++.",
        skills: ["C++", "Arrays", "Trees", "Graphs"],
    },
    {
        id: "dsa-python",
        icon: "🐍",
        category: "PROGRAMMING",
        title: "DSA with Python",
        description:
            "Build algorithmic thinking and solve programming challenges with Python.",
        skills: ["Python", "Sorting", "Searching", "Recursion"],
    },
    {
        id: "frontend",
        icon: "🎨",
        category: "WEB DEVELOPMENT",
        title: "Frontend Development",
        description:
            "Build responsive, interactive websites with modern frontend tools.",
        skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        id: "backend",
        icon: "🛠️",
        category: "WEB DEVELOPMENT",
        title: "Backend Development",
        description:
            "Learn how servers, APIs, and application logic work together.",
        skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    },
    {
        id: "fullstack",
        icon: "🌐",
        category: "WEB DEVELOPMENT",
        title: "Full Stack Development",
        description:
            "Combine frontend and backend skills to build complete applications.",
        skills: ["React", "Node.js", "APIs", "Deployment"],
    },
    {
        id: "databases",
        icon: "🗄️",
        category: "DATA & STORAGE",
        title: "Databases",
        description:
            "Understand data storage, database queries, and working with application data.",
        skills: ["PostgreSQL", "SQL", "Prisma", "MongoDB"],
    },
    {
        id: "github",
        icon: "🐙",
        category: "DEVELOPER TOOLS",
        title: "Git & GitHub",
        description:
            "Learn version control, branches, repositories, and team collaboration.",
        skills: ["Git", "Commits", "Branches", "Pull Requests"],
    },
];
function Topics() {
    return (
        <main className="topics-page">
            <section className="topics-hero">
                <span className="section-eyebrow">YOUR LEARNING STARTS HERE</span>
                <h1>
                    Explore. Learn.
                    <br />
                    <span>Build something amazing.</span>
                </h1>
                <p>
                    Choose a learning path, explore useful resources, and develop
                    practical skills one topic at a time.
                </p>
                <div className="topics-count">
                    <strong>07</strong>
                    <span>learning paths to explore</span>
                </div>
            </section>
            <section className="topics-content">
                <div className="topics-heading">
                    <div>
                        <span className="section-eyebrow">ALL LEARNING PATHS</span>
                        <h2>Find your next skill</h2>
                    </div>
                    <Link to="/" className="text-link">
                        ← Back to Home
                    </Link>
                </div>
                <div className="learning-grid">
                    {topics.map((topic, index) => (
                        <article className="learning-card" key={topic.id}>
                            <div className="card-topline">
                                <span className="card-icon">{topic.icon}</span>
                                <span className="card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <span className="card-category">{topic.category}</span>
                            <h3>{topic.title}</h3>
                            <p className="card-description">{topic.description}</p>
                            <div className="topic-tags">
                                {topic.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                            <div className="card-footer">
                                <span className="level-label">Learning roadmap</span>
                                <Link
                                    to={`/topic/${topic.id}`}
                                    className="card-link"
                                    aria-label={`Explore ${topic.title}`}
                                >
                                    Explore <span>↗</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
export default Topics;
