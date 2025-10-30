import React from "react";
import { useState } from "react";
import { createMailToLink } from "@slalombuild/react-mailto";
import BigSlide from './BigSlide'
import styles from '../css/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  // Build subject from name
  const subject = name ? `Message from ${name}` : "Message from portfolio";
  const href = createMailToLink(["example@example.com"], { subject, body: msg });

  // Block empty messages
  const onSubmit = (e) => {
    if (!msg.trim()) { e.preventDefault(); return; }
    window.location.href = href;
  };

  return (
    <section className={`${styles.contact} ${styles.contactForm}`} id="contact">
      <BigSlide dir="up" distance={150} duration={2000} cascade damping={0.14} triggerOnce={false} fraction={0}>
      <h2>Contact form</h2>
      <form onSubmit={onSubmit}>
        <div className={`${styles.formComponent}`}>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Your name (optional)"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={`${styles.formComponent}`}>
          <label htmlFor="msg-texarea">Message</label>
          <textarea
            className={`${styles.message}`}
            id="msg-texarea"
            name="msg"
            placeholder="Write your message..."
            rows={6}
            autoComplete="off"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
        </div>
        <button className={`${styles.send}`} type="submit">Send Email</button>
      </form>
      </BigSlide>
    </section>
  );
}

export default Contact