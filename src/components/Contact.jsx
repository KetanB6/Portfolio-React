import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    emailjs.init("QqypxDxvf7YLfhIgW");
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const socials = [
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/KetanB6" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/ketan-bidave-08397430a" },
    { icon: <FaXTwitter />, label: "Twitter", href: "https://x.com/Ketan_Bidave" },
    { icon: <BiLogoInstagram />, label: "Instagram", href: "https://www.instagram.com/ketanbidave_06/" },
  ];

  return (
    <section id="contact">
      <div className="container">
        <motion.p className="section-label" {...fadeUp(0)}>
          Get In Touch
        </motion.p>
        <motion.h2 className="section-title" {...fadeUp(0.1)}>
          Let's work <em>together</em>
        </motion.h2>

        <div className="contact-grid">
          {/* Info side */}
          <motion.div {...fadeUp(0.2)}>
            <h3 className="contact-info-title">Open to opportunities</h3>
            <p className="contact-info-text">
              I'm currently looking for new opportunities — whether it's a full-time
              role, internship, or an exciting project to collaborate on. My inbox is
              always open. Even if you just want to say hi, I'll do my best to get
              back to you!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-icon"><MdEmail /></span>
                <span className="contact-detail-text">ketanbidave07@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon"><MdLocationOn /></span>
                <span className="contact-detail-text">Latur, Maharashtra, India</span>
              </div>
            </div>

            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div {...fadeUp(0.3)}>
            <div className="contact-form">
              {status === "success" ? (
                <div className="form-success">
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                  <p>Message sent! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Ketan Bidave"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#ff6b6b", fontSize: ".82rem", marginBottom: "1rem" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
