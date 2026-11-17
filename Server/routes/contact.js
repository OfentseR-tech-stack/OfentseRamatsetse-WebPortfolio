import express from "express";
import Message from "../models/Message.js";
import Comment from "../models/Comment.js";

const router = express.Router();

// Save contact details
router.post("/", async (req, res) => {
  try {
    await Message.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save" });
  }
});

// Get all comments
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

// Save a comment
router.post("/comments", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to save comment" });
  }
});

// Delete a comment
router.delete("/comments/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

export default router;