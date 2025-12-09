import React, { useState } from "react";
import emailjs from "emailjs-com";
import CurvyEdge from "../components/CurvyEdge";

interface ContactProps {
  showToast: (args: {
    title: string;
    message: string;
    type?: "success" | "danger" | "info" | "warning";
  }) => void;
}

const Contact: React.FC<ContactProps> = ({ showToast }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 1️⃣ Send acknowledgment email to user
      await emailjs.send(
        "service_7v50fgl",
        "template_4gfcj56",
        {
          name: formData.name,
          title: formData.message,
          to_email: formData.email, // send to user
          from_name: "Tariq Al Khoud",
        },
        "TU_c-2q8LIKZmAHSk"
      );

      // 2️⃣ Send notification email to company
      await emailjs.send(
        "service_7v50fgl",
        "template_lev4qyu",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
          to_email: "saeedraja830@gmail.com",
        },
        "TU_c-2q8LIKZmAHSk"
      );

      showToast({ title: "Success", message: "Message sent successfully!", type: "success" });

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      showToast({ title: "Error", message: "Failed to send message.", type: "danger" });
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <header className="hero hero-section position-relative">
        <div className="hero-overlay" />
        <div className="container hero-content text-center text-white">
          <small className="text-uppercase breadcrumb">Home / Contact</small>
          <h1 className="display-5 fw-bold">Contact Us</h1>
        </div>
        <CurvyEdge color="rgba(255,255,255,1)" />
      </header>

      {/* Info Cards */}
      <section className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="contact-card about p-4 rounded shadow-sm">
              <h5>About</h5>
              <p>Tariq Al Khoud is your trusted partner for services in Oman.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card contact p-4 rounded shadow-sm">
              <h5>Contact</h5>
              <p>+968 0000 0000</p>
              <p>info@tariqalkhoud.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card address p-4 rounded shadow-sm">
              <h5>Address</h5>
              <p>Misfah As Safil</p>
              <p>Oman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <iframe
              title="Location"
              src="https://maps.google.com/maps?q=Misfah%20As%20Safil,%20Oman&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
            />
          </div>

          <div className="col-lg-6">
            <div className="contact-form-box p-4 h-100 rounded shadow-sm">
              <h6 className="text-success">Contact us</h6>
              <h3 className="fw-bold mb-4">Write a Message</h3>

              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-control"
                    placeholder="Write a Message"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success px-4">
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
