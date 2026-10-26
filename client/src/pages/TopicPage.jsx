import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ResourceCard from "../components/ResourceCard.jsx";
import { getTopicById } from "../api.js";
import { getYouTubeResource } from "../youtube.js";

const topicDetails = {
    "dsa-cpp": { category: "DATA STRUCTURES & ALGORITHMS", icon: "⚡", color: "orange", skills: ["C++ Basics", "Arrays & Strings", "Linked Lists", "Trees & Graphs"] },
    "dsa-python": { category: "DATA STRUCTURES & ALGORITHMS", icon: "🐍", color: "purple", skills: ["Python Basics", "Arrays & Lists", "Stacks & Queues", "Algorithms"] },
    frontend: { category: "WEB DEVELOPMENT", icon: "🎨", color: "orange", skills: ["HTML", "CSS", "JavaScript", "React"] },
    backend: { category: "WEB DEVELOPMENT", icon: "⚙️", color: "purple", skills: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
    fullstack: { category: "FULL STACK", icon: "🌐", color: "orange", skills: ["Frontend", "Backend", "API Integration", "Deployment"] },
    databases: { category: "DATABASE MANAGEMENT", icon: "🗄️", color: "purple", skills: ["SQL Basics", "PostgreSQL", "Prisma ORM", "Database Relations"] },
    github: { category: "DEVELOPER TOOLS", icon: "🔗", color: "orange", skills: ["Git Basics", "Repositories", "Branches", "Pull Requests"] },
};

function TopicPage() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError("");
        setTopic(null);
        setSelectedVideo(null);

        getTopicById(id)
            .then((data) => {
                if (!cancelled) setTopic(data);
            })
            .catch(() => {
                if (!cancelled) setError("We couldn't load this learning path. Make sure the TechExcel backend is running, then try again.");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, [id]);

    if (loading) {
        return <main className="topic-page"><p className="topic-state">Loading learning path…</p></main>;
    }

    if (error || !topic) {
        return (
            <main className="topic-page">
                <div className="topic-not-found">
                    <span>🔍</span>
                    <h1>{error ? "Learning path unavailable" : "Topic not found"}</h1>
                    <p>{error || "Choose a learning path to start exploring."}</p>
                    <Link to="/topics" className="topic-button">Explore Topics →</Link>
                </div>
            </main>
        );
    }

    const details = topicDetails[id] || { category: "LEARNING RESOURCES", icon: "📚", color: "purple", skills: [] };
    const videos = topic.youtubeLinks || [];
    const readings = topic.studyResources || [];
    const selectedEmbed = selectedVideo ? getYouTubeResource(selectedVideo.url)?.embedUrl : "";

    return (
        <main className="topic-page">
            <section className="topic-hero">
                <Link to="/topics" className="back-link">← All Learning Paths</Link>
                <div className={`topic-icon ${details.color}`}>{details.icon}</div>
                <p className="topic-category">{details.category}</p>
                <h1>Master <span>{topic.title}</span></h1>
                <p className="topic-description">{topic.description}</p>
                <a href="#video-lessons" className="topic-button">Explore curated lessons ↓</a>
            </section>

            {details.skills.length > 0 && (
                <section className="topic-content">
                    <div className="section-heading">
                        <p className="topic-category">YOUR LEARNING JOURNEY</p>
                        <h2>What you'll learn</h2>
                        <p>Build your skills one concept at a time.</p>
                    </div>
                    <div className="skill-grid">
                        {details.skills.map((skill, index) => (
                            <article className="skill-card" key={skill}>
                                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                                <h3>{skill}</h3>
                                <p>Strengthen your understanding with guided learning and hands-on practice.</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            <section className="resource-section resource-library" id="video-lessons">
                <div className="section-heading">
                    <p className="topic-category">CURATED FOR YOU</p>
                    <h2>Choose a resource</h2>
                    <p>Pick an individual lesson to play here, or open a reading link in a new tab.</p>
                </div>

                <div className="resource-columns">
                    <div className="resource-column">
                        <div className="resource-column-heading">
                            <span className="resource-heading-icon">▶</span>
                            <div><h3>Video tutorials</h3><p>{videos.length} curated {videos.length === 1 ? "video" : "videos"}</p></div>
                        </div>
                        {selectedVideo && selectedEmbed && (
                            <div className="video-player-wrap">
                                <iframe
                                    key={selectedEmbed}
                                    src={selectedEmbed}
                                    title={`Now playing: ${selectedVideo.title}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                                <div className="playing-title"><span>Now playing: {selectedVideo.title}</span><a href={selectedVideo.url} target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a></div>
                            </div>
                        )}
                        <div className="resource-list">
                            {videos.length ? videos.map((resource) => (
                                <ResourceCard key={`${resource.title}-${resource.url}`} resource={resource} type="video" onPlay={setSelectedVideo} isSelected={selectedVideo?.url === resource.url} />
                            )) : <p className="empty-resources">Video lessons will be added soon.</p>}
                        </div>
                    </div>

                    <div className="resource-column">
                        <div className="resource-column-heading reading-heading">
                            <span className="resource-heading-icon">📚</span>
                            <div><h3>Written resources</h3><p>{readings.length} curated {readings.length === 1 ? "resource" : "resources"}</p></div>
                        </div>
                        <div className="resource-list">
                            {readings.length ? readings.map((resource) => (
                                <ResourceCard key={`${resource.title}-${resource.url}`} resource={resource} type="reading" />
                            )) : <p className="empty-resources">Written resources will be added soon.</p>}
                        </div>
                    </div>
                </div>
            </section>

            <section className="topic-footer">
                <p>SMALL STEPS. REAL SKILLS. BIGGER POSSIBILITIES.</p>
                <h2>Your next breakthrough starts here.</h2>
                <Link to="/topics" className="topic-button secondary-button">Explore More Topics →</Link>
            </section>
        </main>
    );
}

export default TopicPage;

