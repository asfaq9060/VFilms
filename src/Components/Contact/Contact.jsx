import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatusMessage("Please fill in all fields");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatusMessage("Form Submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Network error, Please try again later.");
    }
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles["left-contact"]}>
        <p>
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away. <br /> Let’s catch up
          over coffee. Great stories always begin with a good conversation.
        </p>
        {/* <img src="/VectorArt.png" alt="" /> */}
      </div>

      <div className={styles["right-contact"]}>
        <h2>Join the Story</h2>
        <h3>Ready to bring your vision to life? Let’s talk.</h3>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            min="0"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {statusMessage && (
          <p className={styles.statusMessage}>{statusMessage}</p>
        )}
        <div className={styles.contactdetails}>
          <p>vernita@varnanfilms.co.in</p>
          <hr className={styles["contact-divider"]} />
          <p>+91 98736 84567</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
