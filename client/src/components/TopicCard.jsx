import { Link } from "react-router-dom";

function TopicCard({ topic }) {
    return (
        <article className="topic-card">
            <div className="topic-card-icon">
                {topic.icon}
            </div>

            <h3>{topic.title}</h3>

            <p>{topic.description}</p>

            <Link to={`/topic/${topic.id}`} className="topic-card-link">
                Explore Topic →
            </Link>
        </article>
    );
}

export default TopicCard;