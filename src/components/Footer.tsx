import React from "react";
import { FooterProps } from "../types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NAVY = "#1e3a8a"; // brighter navy for dark bg

const Footer: React.FC<FooterProps> = ({ subscribeEmail, setSubscribeEmail, handleSubscribe }) => {
  return (
    <footer className="site-footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* Logo & About */}
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="fw-bold mb-3" style={{ color: NAVY }}>Tariq Al Khoud LLC</h4>
            <p className="small footer-desc mb-3">
              Leading provider of portable cabins in Oman — from office units to labor housing and custom modular solutions built with quality and precision.
            </p>
            <div className="socials d-flex gap-2 mt-3">
              {["facebook-f","instagram","linkedin-in","whatsapp"].map((icon, idx) => (
                <a key={idx} href="#" className="social-btn" style={{ backgroundColor: NAVY }}>
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h6 className="footer-heading pb-2 position-relative d-inline-block underline-start" style={{ color: NAVY }}>
              Explore
            </h6>
            <ul className="list-unstyled footer-links small mt-3">
              {[
                {to: "/", label: "Home"},
                {to: "/about", label: "About"},
                {to: "/services", label: "Services"},
                {to: "/gallery", label: "Gallery"},
                {to: "/contact", label: "Contact"},
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} style={{ color: "inherit" }}>
                    <i className="fa-solid fa-chevron-right me-2 fa-xs" style={{ color: NAVY }}></i>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="col-12 col-md-12 col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h6 className="footer-heading pb-2 position-relative d-inline-block underline-start" style={{ color: NAVY }}>
              Contact
            </h6>
            <div className="contact-list small mt-3" style={{ color: "lightgray" }}>
              <div className="mb-2"><i className="fa-solid fa-phone me-2" style={{ color: NAVY }}></i> +968 98164264</div>
              <div className="mb-2"><i className="fa-regular fa-envelope me-2" style={{ color: NAVY }}></i> saeedraja830@gmail.com</div>
              <div className="mb-2"><i className="fa-solid fa-location-dot me-2" style={{ color: NAVY }}></i> Misfah As Safil, Oman</div>

              <div className="mt-3">
                <div className="input-group subscribe-group">
                  <input
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Your Email Address"
                  />
                  <button
                    className="btn subscribe-btn"
                    type="button"
                    onClick={handleSubscribe}
                    style={{ backgroundColor: NAVY, color: "#fff" }}
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
              <div className="mt-3 small">
                Business Hours: Sun - Thu, 8:00 AM - 5:00 PM
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3 border-top border-secondary mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div className="small mb-2 mb-md-0">
            © All Copyright 2025 by Tariq Al Khoud LLC
          </div>
          <div className="small footer-bottom-links">
            <a href="#" className="me-3 text-decoration-none">Terms of Use</a>
            <a href="#" className="text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style>
        {`
          .underline-start::after {
            content: '';
            display: block;
            width: 40px;
            height: 2px;
            background-color: ${NAVY};
            margin-top: 4px;
            border-radius: 1px;
          }

          .social-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            color: #fff;
            transition: 0.3s;
          }

          .social-btn:hover {
            transform: translateY(-2px);
            opacity: 0.85;
          }

          .footer-links a:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
