import express from "express";
import {
getAllTopics,
getTopicById
} from "../controllers/topicsController.js";

const router = express.Router();

// GET all learning topics
router.get("/", getAllTopics);

// GET one topic by its ID
router.get("/:id", getTopicById);

export default router;
