function ResourceCard({ resource }) {
    return (
        <article className="resource-card">
            <span className="resource-type">
                {resource.type === "video" ? "▶ Video Lecture" : "📚 Study Material"}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
            >
                Open Resource →
            </a>
        </article>
    );
}

export default ResourceCard;