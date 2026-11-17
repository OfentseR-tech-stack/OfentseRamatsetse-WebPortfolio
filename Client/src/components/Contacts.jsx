import { useState, useEffect } from "react";
import { socials } from "./Socials";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Contacts() {
  // ── Contact form state
  const [form, setForm]           = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent]   = useState(false);
  const [formError, setFormError] = useState("");

  // ── Comment state
  const [comments, setComments]       = useState([]);
  const [newComment, setNewComment]   = useState({ name: "", comment: "" });
  const [commentSent, setCommentSent] = useState(false);

  // ── Load comments on mount
  useEffect(() => {
    fetch(`${API_URL}/api/contact/comments`)
      .then((r) => r.json())
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch(() => setComments([]));
  }, []);

  // ── Submit contact form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFormError("Please fill in all fields.");
      return;
    }
    setFormError("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormSent(false), 4000);
      }
    } catch (err) {
      setFormError("Could not connect to server.");
    }
  };

  // ── Submit comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.comment) return;
    try {
      const res = await fetch(`${API_URL}/api/contact/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
      const saved = await res.json();
      setComments([saved, ...comments]);
      setNewComment({ name: "", comment: "" });
      setCommentSent(true);
      setTimeout(() => setCommentSent(false), 3000);
    } catch (err) {
      console.error("Failed to post comment");
    }
  };

  // ── Delete comment
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/api/contact/comments/${id}`, {
        method: "DELETE",
      });
      setComments(comments.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Failed to delete comment");
    }
  };

  return (
    <section className="contacts" id="contact">
      <div className="contacts__inner">

        {/* ── Contact details form ── */}
        <div className="contacts__form-wrap">
          <h3 className="contacts__form-title">Leave Your Details</h3>
          <p className="contacts__form-sub">I'll get back to you as soon as possible.</p>

          {formSent  && <div className="contacts__success">✅ Details saved! I'll be in touch.</div>}
          {formError && <div className="contacts__error">⚠️ {formError}</div>}

          <form className="contacts__form" onSubmit={handleFormSubmit}>
            <div className="contacts__form-row">
              <div className="contacts__field">
                <label className="contacts__label">Name</label>
                <input type="text" name="name" placeholder="Your name"
                  className="contacts__input" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="contacts__field">
                <label className="contacts__label">Email</label>
                <input type="email" name="email" placeholder="Your email"
                  className="contacts__input" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="contacts__field">
              <label className="contacts__label">Message</label>
              <textarea name="message" placeholder="Write your message..."
                className="contacts__textarea" rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" className="btn btn--solid contacts__submit">
              Send Message →
            </button>
          </form>
        </div>

        {/* ── Contact info ── */}
        <div className="contacts__info-col">
          <a href="mailto:OfentseRamatsetseWeb@gmail.com" className="contacts__link">
            <span className="contacts__icon">✉</span>
            OfentseRamatsetseWeb@gmail.com
          </a>
          <div className="contacts__socials">
            {socials.map((s, i) => (
              <a href={s.href} className="contacts__social" key={i}
                target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Comments section ── */}
      <div className="contacts__comments-section">
        <h3 className="contacts__comments-title">Leave a Comment</h3>

        {commentSent && <div className="contacts__success">✅ Comment posted!</div>}

        <form className="contacts__comment-form" onSubmit={handleCommentSubmit}>
          <input type="text" placeholder="Your name"
            className="contacts__input" value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })} />
          <textarea placeholder="Write a comment..."
            className="contacts__textarea" rows={3} value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })} />
          <button type="submit" className="btn btn--outline">Post Comment →</button>
        </form>

        {/* Comment list */}
        <ul className="contacts__comment-list">
          {comments.map((c) => (
            <li key={c._id} className="contacts__comment-item">
              <div className="contacts__comment-header">
                <span className="contacts__comment-name">{c.name}</span>
                <span className="contacts__comment-date">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
                <button
                  className="contacts__comment-delete"
                  onClick={() => handleDelete(c._id)}
                  title="Delete comment"
                >
                  🗑
                </button>
              </div>
              <p className="contacts__comment-text">{c.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="contacts__copy">
        © 2026 Ofentse Ramatsetse. All rights reserved.
      </p>
    </section>
  );
}