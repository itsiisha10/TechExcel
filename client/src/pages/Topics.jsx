
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api.js";

function Topics() {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadTopics() {
            try {
                const data = await getTopics();
                setTopics(data);
            } catch (err) {
                setError("Unable to load learning topics. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        loadTopics();
    }, []);

    return (
        <main className="topics-page">
            <section className="topics-hero">
                <span className="section-eyebrow">
                    YOUR LEARNING STARTS HERE
                </span>

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
                    <strong>{String(topics.length).padStart(2, "0")}</strong>
                    <span>learning paths to explore</span>
                </div>
            </section>

            <section className="topics-content">
                <div className="topics-heading">
                    <div>
                        <span className="section-eyebrow">
                            ALL LEARNING PATHS
                        </span>
                        <h2>Find your next skill</h2>
                    </div>

                    <Link to="/" className="text-link">
                        ← Back to Home
                    </Link>
                </div>

                {loading && <p>Loading learning topics...</p>}

                {error && <p role="alert">{error}</p>}

                {!loading && !error && (
                    <div className="learning-grid">
                        {topics.map((topic, index) => (
                            <article
                                className="learning-card"
                                key={topic.id}
                            >
                                <div className="card-topline">
                                    <span className="card-icon">
                                        {topic.id === "dsa-cpp"
                                            ? "⚙️"
                                            : topic.id === "dsa-python"
                                            ? "🐍"
                                            : topic.id === "frontend"
                                            ? "🎨"
                                            : topic.id === "backend"
                                            ? "🛠️"
                                            : topic.id === "fullstack"
                                            ? "🌐"
                                            : topic.id === "github"
                                            ? "🐙"
                                            : topic.id === "ai-tools"
                                            ? "🤖"
                                            : topic.id === "motivation"
                                            ? "✨"
                                            : "📚"}
                                    </span>

                                    <span className="card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <span className="card-category">
                                    {topic.id.startsWith("dsa-")
                                        ? "PROGRAMMING"
                                        : [
                                              "frontend",
                                              "backend",
                                              "fullstack",
                                          ].includes(topic.id)
                                        ? "WEB DEVELOPMENT"
                                        : topic.id === "github"
                                        ? "DEVELOPER TOOLS"
                                        : topic.id === "ai-tools"
                                        ? "AI TOOLS"
                                        : topic.id === "motivation"
                                        ? "PERSONAL GROWTH"
                                        : "LEARNING RESOURCES"}
                                </span>

                                <h3>{topic.title}</h3>

                                <p className="card-description">
                                    {topic.description}
                                </p>

                                <div className="topic-tags">
                                    {topic.youtubeLinks
                                        .slice(0, 3)
                                        .map((resource) => (
                                            <span key={resource.title}>
                                                {resource.title}
                                            </span>
                                        ))}
                                </div>

                                <div className="card-footer">
                                    <span className="level-label">
                                        Learning resources
                                    </span>

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
                )}
            </section>
        </main>
    );
}

export default Topics;

