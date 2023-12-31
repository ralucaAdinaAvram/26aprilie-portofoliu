import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import SocialMedia from "../components/SocialMedia";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null); // Initialize with null and provide type

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_40t55tu",
          "template_fjk2exq",
          form.current,
          "bjEbo9bUl7a4-S5XG"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="containerForm">
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="social-media-contact">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
