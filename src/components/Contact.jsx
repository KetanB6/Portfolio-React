import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    emailjs.init("QqypxDxvf7YLfhIgW");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yvlvep1', 'template_li2ur37', e.target)
      .then(() => {
        alert('Thank You!');
        e.target.reset();
      }, (error) => {
        console.error('Failed to send message:', error);
        alert('Oops! Something went wrong.');
      });
  };

  return (
    <div className="about card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="subdiv">
        <h2 className="sub contain">Contact Me</h2><br />
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" className="form" name="name" required /><br /><br />
          <input type="email" placeholder="Your Email" className="form" name="email" required /><br /><br />
          <textarea placeholder="Your Message" name="message" cols="67" rows="10" className="form textarea" required></textarea><br /><br />
          <button className="small_adj">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
