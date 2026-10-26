import { getYouTubeResource } from "../youtube.js";

function ResourceCard({ resource, type, onPlay, isSelected = false }) {
    const isVideo = type === "video";
    const youtube = isVideo ? getYouTubeResource(resource.url) : null;
    const thumbnailUrl = resource.thumbnailUrl || youtube?.thumbnailUrl;

    if (isVideo && youtube) {
        return (
            <button
                type="button"
                className={`resource-item video-resource-item${isSelected ? " selected" : ""}`}
                onClick={() => onPlay(resource)}
                aria-pressed={isSelected}
            >
                <span className="resource-thumbnail">
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt=""
                            loading="lazy"
                            onError={(event) => {
                                const image = event.currentTarget;
                                const fallbacks = ["sddefault", "mqdefault", "default"];
                                const nextIndex = Number(image.dataset.fallbackIndex || 0);
                                if (youtube.videoId && nextIndex < fallbacks.length) {
                                    image.dataset.fallbackIndex = String(nextIndex + 1);
                                    image.src = `https://i.ytimg.com/vi/${encodeURIComponent(youtube.videoId)}/${fallbacks[nextIndex]}.jpg`;
                                } else {
                                    image.style.display = "none";
                                }
                            }}
                        />
                    ) : null}
                    <span className="thumbnail-play">▶</span>
                </span>
                <span className="resource-item-copy">
                    <span className="resource-type">VIDEO LESSON</span>
                    <span className="resource-item-title">{resource.title}</span>
                    <span className="resource-item-action">{isSelected ? "Now playing" : "Play in TechExcel"}</span>
                </span>
            </button>
        );
    }

    return (
        <a
            className={`resource-item ${isVideo ? "video-resource-item" : "reading-resource-item"}`}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="resource-thumbnail resource-thumbnail-fallback">
                {isVideo ? <span className="video-fallback-mark">▶</span> : (
                    <span className="reading-art" aria-hidden="true">
                        <span className="reading-art-spark">✦</span>
                        <span className="reading-art-book reading-art-book-back" />
                        <span className="reading-art-book reading-art-book-front">
                            <span className="reading-art-spine" />
                            <span className="reading-art-lines" />
                        </span>
                    </span>
                )}
            </span>
            <span className="resource-item-copy">
                <span className="resource-type">{isVideo ? "YOUTUBE CHANNEL" : "READING RESOURCE"}</span>
                <span className="resource-item-title">{resource.title}</span>
                <span className="resource-item-action">Open resource ↗</span>
            </span>
        </a>
    );
}

export default ResourceCard;


