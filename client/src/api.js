// API base URL — uses VITE_API_URL env var in production, falls back to localhost for local dev
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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
