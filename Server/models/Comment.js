import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name:            { type: String, required: true, maxlength: 60 },
  comment:         { type: String, required: true, maxlength: 1000 },
  createdAt:       { type: Date, default: Date.now },
  deleteTokenHash: { type: String, select: false }, // never sent to the browser
});

export default mongoose.model("Comment", CommentSchema);