import topics from "../data/topics.js";

// Get all learning topics
export const getAllTopics = (req, res) => {
res.status(200).json({
success: true,
count: topics.length,
data: topics
});
};

// Get one learning topic by its ID
export const getTopicById = (req, res) => {
const topicId = req.params.id;


const topic = topics.find((item) => item.id === topicId);

if (!topic) {
    return res.status(404).json({
        success: false,
        message: "Topic not found"
    });
}

res.status(200).json({
    success: true,
    data: topic
});

};
