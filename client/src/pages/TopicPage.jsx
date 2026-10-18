
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTopicById } from "../api.js";

const topicDetails = {
    "dsa-cpp": {
        category: "DATA STRUCTURES & ALGORITHMS",
        icon: "⚡",
        color: "orange",
        skills: ["C++ Basics", "Arrays & Strings", "Linked Lists", "Trees & Graphs"],
    },
    "dsa-python": {
        category: "DATA STRUCTURES & ALGORITHMS",
        icon: "🐍",
        color: "purple",
        skills: ["Python Basics", "Arrays & Lists", "Stacks & Queues", "Algorithms"],
    },
    frontend: {
        category: "WEB DEVELOPMENT",
        icon: "🎨",
        color: "orange",
        skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    backend: {
        category: "WEB DEVELOPMENT",
        icon: "⚙️",
        color: "purple",
        skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    fullstack: {
        category: "FULL STACK",
        icon: "🌐",
        color: "orange",
        skills: ["Frontend", "Backend", "API Integration", "Deployment"],
    },
    github: {
        category: "DEVELOPER TOOLS",
        icon: "🔗",
        color: "orange",
        skills: ["Git Basics", "Repositories", "Branches", "Pull Requests"],
    },
    "ai-tools": {
        category: "AI TOOLS",
        icon: "🤖",
        color: "purple",
        skills: ["AI Tools", "Prompting", "Productivity", "Research"],
    },
    motivation: {
        category: "PERSONAL GROWTH",
        icon: "✨",
        color: "orange",
        skills: ["Goal Setting", "Consistency", "Time Management", "Growth"],
    },
};

function TopicPage() {
    const { id } = useParams();

    const [topic, setTopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function loadTopic() {
            setLoading(true);
            setError("");
            setTopic(null);

            try {
                const data = await getTopicById(id);

                if (!cancelled) {
                    setTopic(data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError("Topic not found or unable to load it.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadTopic();

        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) {
        return (
            <main className="topic-page">
                <p>Loading topic...</p>
            </main>
        );
    }

    if (error || !topic) {
        return (
            <main className="topic-page">
                <div className="topic-not-found">
                    <span>🔍</span>
                    <h1>Topic not found</h1>
                    <p>
                        Choose a learning path to start exploring.
                    </p>
                    <Link to="/topics" className="topic-button">
                        Explore Topics →
                    </Link>
                </div>
            </main>
        );
    }

    const details = topicDetails[id] || {
        category: "LEARNING RESOURCES",
        icon: "📚",
        color: "purple",
        skills: ["Fundamentals", "Core Concepts", "Practice", "Revision"],
    };

    const youtubeLinks = topic.youtubeLinks || [];
    const studyResources = topic.studyResources || [];

    return (
        <main className="topic-page">
            <section className="topic-hero">
                <Link to="/topics" className="back-link">
                    ← All Learning Paths
                </Link>

                <div className={`topic-icon ${details.color}`}>
                    {details.icon}
                </div>

                <p className="topic-category">{details.category}</p>

                <h1>
                    Master <span>{topic.title}</span>
                </h1>

                <p className="topic-description">
                    {topic.description}
                </p>

                {youtubeLinks.length > 0 && (
                    <a
                        href={youtubeLinks[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="topic-button"
                    >
                        Start Learning ↗
                    </a>
                )}
            </section>

            <section className="topic-content">
                <div className="section-heading">
                    <p className="topic-category">
                        YOUR LEARNING JOURNEY
                    </p>
                    <h2>What you'll learn</h2>
                    <p>
                        Build your skills one concept at a time.
                    </p>
                </div>

                <div className="skill-grid">
                    {details.skills.map((skill, index) => (
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
                    <p>
                        Learn by watching or explore written documentation.
                    </p>
                </div>

                <div className="resource-grid">
                    <div className="resource-card video-resource">
                        <span className="resource-icon">▶</span>

                        <div>
                            <p className="resource-label">WATCH & LEARN</p>
                            <h3>Video Tutorials</h3>

                            {youtubeLinks.length > 0 ? (
                                youtubeLinks.map((resource) => (
                                    <p key={resource.title}>
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {resource.title} ↗
                                        </a>
                                    </p>
                                ))
                            ) : (
                                <p>No video resources available yet.</p>
                            )}
                        </div>

                        <span className="resource-arrow">↗</span>
                    </div>

                    <div className="resource-card reading-resource">
                        <span className="resource-icon">📚</span>

                        <div>
                            <p className="resource-label">
                                READ & UNDERSTAND
                            </p>
                            <h3>Written Resources</h3>

                            {studyResources.length > 0 ? (
                                studyResources.map((resource) => (
                                    <p key={resource.title}>
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {resource.title} ↗
                                        </a>
                                    </p>
                                ))
                            ) : (
                                <p>No written resources available yet.</p>
                            )}
                        </div>

                        <span className="resource-arrow">↗</span>
                    </div>
                </div>
            </section>

            <section className="topic-footer">
                <p>SMALL STEPS. REAL SKILLS. BIGGER POSSIBILITIES.</p>
                <h2>Your next breakthrough starts here.</h2>

                <Link
                    to="/topics"
                    className="topic-button secondary-button"
                >
                    Explore More Topics →
                </Link>
            </section>
        </main>
    );
}

export default TopicPage;
