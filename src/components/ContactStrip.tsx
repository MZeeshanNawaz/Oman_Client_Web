import React from "react";

const NAVY = "#1e3a8a"; // updated navy for better visibility

const ContactStrip = () => {
  return (
    <div className="contact-strip bg-light py-2">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">

        {/* Company Name */}
        <div className="fw-bold flex-grow-1" style={{ fontSize: "1.1rem", color: NAVY }}>
          Tariq Al Khoud LLC
        </div>

        {/* Social Icons */}
        <div className="d-flex gap-3 align-items-center flex-shrink-0">
          <a href="#" className="small" style={{ color: NAVY }}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" className="small" style={{ color: NAVY }}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="small" style={{ color: NAVY }}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="small" style={{ color: NAVY }}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="d-flex flex-wrap gap-3 align-items-center small w-100 mt-2" style={{ color: NAVY }}>
          <div>
            <i className="fa-solid fa-phone me-1" style={{ color: NAVY }}></i> +968 98164264
          </div>
          <div>
            <i className="fa-solid fa-envelope me-1" style={{ color: NAVY }}></i> saeedraja830@gmail.com
          </div>
          <div>
            <i className="fa-solid fa-location-dot" style={{ color: NAVY }}></i> Misfah As Safil, Oman
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactStrip;
