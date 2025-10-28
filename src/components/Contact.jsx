import React from "react";
import { useState } from "react";
import { createMailToLink } from "@slalombuild/react-mailto";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Write your message..."
        rows={6}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default Contact