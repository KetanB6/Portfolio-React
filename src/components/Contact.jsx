import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { MdEmail, MdLocationOn, MdContentCopy, MdCheck } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi2";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    emailjs.init("QqypxDxvf7YLfhIgW");
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send("service_yvlvep1", "template_li2ur37", {
        name: form.name,
        email: form.email,
        message: form.message,
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ketanbidave07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/KetanB6" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/ketan-bidave-08397430a" },
    { icon: <FaXTwitter />, label: "Twitter", href: "https://x.com/Ketan_Bidave" },
    { icon: <BiLogoInstagram />, label: "Instagram", href: "https://www.instagram.com/ketanbidave_06/" },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's Get In <em>Touch</em>
          </h2>
          <p className="section-desc">
            I am currently available for entry-level developer roles and internships.
            Feel free to reach out with any job opportunities or questions!
          </p>
        </div>

        <div className="contact-box">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info-side">
              <div>
                <h3 className="contact-info-title">Open to Opportunities</h3>
                <p className="contact-info-text">
                  Have an open role, an interesting project, or want to review my code?
                  Send me a message using the form or reach out directly via email.
                  I usually respond within 24 hours!
                </p>

                <div className="contact-channels">
                  <div
                    className="contact-channel-item"
                    onClick={handleCopyEmail}
                    style={{ cursor: "pointer", justifyContent: "space-between" }}
                    title="Click to copy email address"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span className="contact-channel-icon"><MdEmail /></span>
                      <span>ketanbidave07@gmail.com</span>
                    </div>
                    <button
                      type="button"
                      aria-label="Copy email"
                      style={{ color: copied ? "var(--accent-emerald)" : "var(--text-muted)", display: "flex", alignItems: "center" }}
                    >
                      {copied ? <MdCheck size={18} /> : <MdContentCopy size={16} />}
                    </button>
                  </div>

                  <div className="contact-channel-item">
                    <span className="contact-channel-icon"><MdLocationOn /></span>
                    <span>Pune, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                  Find me on
                </p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-btn"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Ketan, I'd like to talk to you about..."
                    required
                    className="form-textarea"
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    className="form-status-msg success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span>✓ Message sent successfully! I will get back to you soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="form-status-msg error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span>✕ Failed to send message. Please email me directly at ketanbidave07@gmail.com</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.85rem" }}
                >
                  <HiPaperAirplane />
                  <span>
                    {status === "sending" ? "Sending Message..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
