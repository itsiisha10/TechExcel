// Base API URL: Uses VITE_API_URL if configured, falling back to localhost:5000 for local development
const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_URL = rawApiUrl.endsWith("/api")
    ? rawApiUrl
    : `${rawApiUrl.replace(/\/+$/, "")}/api`;

export async function getTopics() {
    const response = await fetch(`${API_URL}/topics`);

    if (!response.ok) {
        throw new Error("Failed to fetch learning topics");
    }

    const result = await response.json();

    return result.data;
}

export async function getTopicById(id) {
    const response = await fetch(
        `${API_URL}/topics/${encodeURIComponent(id)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch learning topic");
    }

    const result = await response.json();

    return result.data;
}
