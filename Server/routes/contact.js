import express from "express";
import crypto from "crypto";
import Message from "../models/Message.js";
import Comment from "../models/Comment.js";

const router = express.Router();

const hash = (t) => crypto.createHash("sha256").update(t).digest("hex");

const safeEqual = (a, b) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

// Save contact details
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Message.create({ name, email, message });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save" });
  }
});

// Get all comments (deleteTokenHash is excluded by the schema)
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

// Save a comment and return a one-time delete token
router.post("/comments", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim().slice(0, 60);
    const comment = String(req.body.comment || "").trim().slice(0, 1000);
    if (!name || !comment) {
      return res.status(400).json({ error: "Name and comment required" });
    }

    const deleteToken = crypto.randomBytes(24).toString("hex");
    const saved = await Comment.create({
      name,
      comment,
      deleteTokenHash: hash(deleteToken),
    });

    res.status(201).json({
      _id: saved._id,
      name: saved.name,
      comment: saved.comment,
      createdAt: saved.createdAt,
      deleteToken, // only ever sent here, once
    });
  } catch (err) {
    res.status(400).json({ error: "Failed to save comment" });
  }
});

// Delete a comment: owner token or admin key
router.delete("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).select("+deleteTokenHash");
    if (!comment) return res.status(404).json({ error: "Not found" });

    const token = req.get("x-delete-token") || "";
    const adminKey = req.get("x-admin-key") || "";

    const isAdmin =
      process.env.ADMIN_KEY && adminKey && safeEqual(adminKey, process.env.ADMIN_KEY);
    const isOwner =
      comment.deleteTokenHash && token && safeEqual(hash(token), comment.deleteTokenHash);

    if (!isAdmin && !isOwner) {
      return res.status(403).json({ error: "Not allowed" });
    }

    await comment.deleteOne();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

export default router;