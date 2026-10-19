import { useParams, Link } from "react-router-dom";

const learningTopics = {
    "dsa-cpp": {
        title: "DSA with C++",
        category: "DATA STRUCTURES & ALGORITHMS",
        description:
            "Build your problem-solving skills and learn how to write efficient C++ programs.",
        icon: "⚡",
        color: "orange",
        skills: ["C++ Basics", "Arrays & Strings", "Linked Lists", "Trees & Graphs"],
        youtube: "https://www.youtube.com/results?search_query=DSA+with+C%2B%2B+beginner+tutorial",
        reading: "https://www.geeksforgeeks.org/data-structures/",
    },

    "dsa-python": {
        title: "DSA with Python",
        category: "DATA STRUCTURES & ALGORITHMS",
        description:
            "Learn data structures and algorithms using Python, from fundamentals to problem-solving.",
        icon: "🐍",
        color: "purple",
        skills: ["Python Basics", "Arrays & Lists", "Stacks & Queues", "Algorithms"],
        youtube: "https://www.youtube.com/results?search_query=DSA+with+Python+beginner+tutorial",
        reading: "https://docs.python.org/3/tutorial/",
    },

    frontend: {
        title: "Frontend Web Development",
        category: "WEB DEVELOPMENT",
        description:
            "Learn to build beautiful, responsive websites using HTML, CSS, JavaScript, and React.",
        icon: "🎨",
        color: "orange",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        youtube: "https://www.youtube.com/results?search_query=frontend+web+development+full+course+beginner",
        reading: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    },

    backend: {
        title: "Backend Web Development",
        category: "WEB DEVELOPMENT",
        description:
            "Understand servers, APIs, databases, and the logic that powers websites.",
        icon: "⚙️",
        color: "purple",
        skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
        youtube: "https://www.youtube.com/results?search_query=Node.js+Express+backend+development+beginner",
        reading: "https://nodejs.org/en/learn",
    },

    fullstack: {
        title: "Full Stack Development",
        category: "FULL STACK",
        description:
            "Connect frontend and backend technologies to build complete web applications.",
        icon: "🌐",
        color: "orange",
        skills: ["Frontend", "Backend", "API Integration", "Deployment"],
        youtube: "https://www.youtube.com/results?search_query=full+stack+web+development+beginner+course",
        reading: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    },

    databases: {
        title: "Databases with Prisma & PostgreSQL",
        category: "DATABASE MANAGEMENT",
        description:
            "Learn how to store, organise, query, and manage application data.",
        icon: "🗄️",
        color: "purple",
        skills: ["SQL Basics", "PostgreSQL", "Prisma ORM", "Database Relations"],
        youtube: "https://www.youtube.com/results?search_query=PostgreSQL+Prisma+ORM+tutorial+beginner",
        reading: "https://www.prisma.io/docs",
    },

    github: {
        title: "Git & GitHub",
        category: "DEVELOPER TOOLS",
        description:
            "Learn version control, manage repositories, and collaborate on projects with confidence.",
        icon: "🔗",
        color: "orange",
        skills: ["Git Basics", "Repositories", "Branches", "Pull Requests"],
        youtube: "https://www.youtube.com/results?search_query=Git+and+GitHub+beginner+tutorial",
        reading: "https://docs.github.com/en/get-started",
    },
};

function TopicPage() {
    const { id } = useParams();
    const topic = learningTopics[id];

    if (!topic) {
        return (
            <main className="topic-page">
                <div className="topic-not-found">
                    <span>🔍</span>
                    <h1>Topic not found</h1>
                    <p>Choose a learning path to start exploring.</p>
                    <Link to="/topics" className="topic-button">
                        Explore Topics →
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="topic-page">
            <section className="topic-hero">
                <Link to="/topics" className="back-link">
                    ← All Learning Paths
                </Link>

                <div className={`topic-icon ${topic.color}`}>
                    {topic.icon}
                </div>

                <p className="topic-category">{topic.category}</p>

                <h1>
                    Master <span>{topic.title}</span>
                </h1>

                <p className="topic-description">{topic.description}</p>

                <a
                    href={topic.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="topic-button"
                >
                    Start Learning ↗
                </a>
            </section>

            <section className="topic-content">
                <div className="section-heading">
                    <p className="topic-category">YOUR LEARNING JOURNEY</p>
                    <h2>What you'll learn</h2>
                    <p>Build your skills one concept at a time.</p>
                </div>

                <div className="skill-grid">
                    {topic.skills.map((skill, index) => (
                        <article className="skill-card" key={skill}>
                            <span className="skill-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3>{skill}</h3>
                            <p>
                                Strengthen your understanding with guided
                                learning and hands-on practice.
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="resource-section">
                <div className="section-heading">
                    <p className="topic-category">CURATED FOR YOU</p>
                    <h2>Choose your learning style</h2>
                    <p>Learn by watching or explore written documentation.</p>
                </div>

                <div className="resource-grid">
                    <a
                        className="resource-card video-resource"
                        href={topic.youtube}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="resource-icon">▶</span>
                        <div>
                            <p className="resource-label">WATCH & LEARN</p>
                            <h3>Video Tutorials</h3>
                            <p>
                                Find beginner-friendly video lessons and
                                follow along with practical examples.
                            </p>
                        </div>
                        <span className="resource-arrow">↗</span>
                    </a>

                    <a
                        className="resource-card reading-resource"
                        href={topic.reading}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="resource-icon">📚</span>
                        <div>
                            <p className="resource-label">READ & UNDERSTAND</p>
                            <h3>Written Resources</h3>
                            <p>
                                Study concepts, review explanations, and
                                revisit documentation whenever you need.
                            </p>
                        </div>
                        <span className="resource-arrow">↗</span>
                    </a>
                </div>
            </section>

            <section className="topic-footer">
                <p>SMALL STEPS. REAL SKILLS. BIGGER POSSIBILITIES.</p>
                <h2>Your next breakthrough starts here.</h2>
                <Link to="/topics" className="topic-button secondary-button">
                    Explore More Topics →
                </Link>
            </section>
        </main>
    );
}

export default TopicPage;