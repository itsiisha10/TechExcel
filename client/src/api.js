const API_URL = "http://localhost:5000/api";

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