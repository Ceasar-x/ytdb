import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const sectionsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" }); // Clear the form
    alert("Details saved successfully!");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="contact-container">
      <div
        className="get-in-touch slide-in"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <h3>Get In Touch</h3>
        <p>
          <FaMapMarkerAlt className="icon" />
          PCRV+W2G, Nijhof Advies 232104, Osun
        </p>
        <p>
          <FaPhoneAlt className="icon" />
          +234 803 523 1307
        </p>
        <p>
          <FaEnvelope className="icon" />
          ytdschoolb@gmail.com
        </p>
      </div>

      <div
        className="contact-form slide-in"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div
        className="map slide-in"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <h3>Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.09040160411288!2d4.442447650441098!3d7.7423804981561055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10382a60e83fffff%3A0x8efc4163661c2ee9!2sTajudeen%20School!5e0!3m2!1sen!2sng!4v1736874686218!5m2!1sen!2sng"
          title="Map Location"
          style={{
            width: "100%",
            height: "300px",
            border: "0",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
