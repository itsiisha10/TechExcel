export function getYouTubeResource(url) {
    try {
        const parsedUrl = new URL(url);
        const host = parsedUrl.hostname.replace(/^www\./, "");
        const segments = parsedUrl.pathname.split("/").filter(Boolean);

        let videoId = "";
        if (host === "youtu.be") {
            videoId = segments[0] || "";
        } else if (parsedUrl.pathname === "/watch") {
            videoId = parsedUrl.searchParams.get("v") || "";
        } else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
            const embedIndex = segments.findIndex((segment) => ["embed", "shorts"].includes(segment));
            if (embedIndex >= 0) videoId = segments[embedIndex + 1] || "";
        }

        const playlistId = parsedUrl.searchParams.get("list") || "";
        if (videoId) {
            return {
                embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`,
                videoId,
                thumbnailUrl: `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`,
            };
        }
        if (playlistId) {
            return {
                embedUrl: `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(playlistId)}&autoplay=1&rel=0`,
                videoId: "",
                thumbnailUrl: "",
            };
        }
    } catch {
        // Invalid or non-YouTube URLs are displayed as ordinary external links.
    }

    return null;
}
